
import * as SQLite from 'expo-sqlite';

export const banco = SQLite.openDatabaseAsync('estoque.db');

// TIPOS

export type Produto = {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  quantidade: number;
  estoque_minimo: number;
  fornecedor_id: number | null;
  fornecedor_nome?: string | null;
  imagem: string | null;
};

export type Fornecedor = {
  id: number;
  nome: string;
  cnpj: string;
  endereco: string;
  telefone: string;
  bairro: string;
  cidade: string;
  estado: string;
  email: string;
};

export type Movimentacao = {
  id: number;
  produto_id: number;
  produto_nome?: string;
  tipo: 'ENTRADA' | 'SAIDA';
  quantidade: number;
  observacao: string | null;
  data: string;
};

type DadosProduto = {
  nome: string;
  categoria: string;
  preco: number;
  quantidade: number;
  estoque_minimo: number;
  fornecedor_id: number | null;
  imagem: string | null;
};

type DadosFornecedor = Omit<Fornecedor, 'id'>;

// INICIALIZAÇÃO DO BANCO

let inicializacao: Promise<void> | null = null;

export async function inicializarBanco() {
  if (!inicializacao) {
    inicializacao = (async () => {
      const db = await banco;

      await db.execAsync(`
        PRAGMA foreign_keys = ON;

        CREATE TABLE IF NOT EXISTS fornecedores (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nome TEXT NOT NULL,
          cnpj TEXT,
          endereco TEXT,
          telefone TEXT,
          bairro TEXT,
          cidade TEXT,
          estado TEXT,
          email TEXT
        );

        CREATE TABLE IF NOT EXISTS produtos (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nome TEXT NOT NULL,
          categoria TEXT NOT NULL,
          preco REAL NOT NULL CHECK (preco >= 0),
          quantidade INTEGER NOT NULL DEFAULT 0
            CHECK (quantidade >= 0),
          estoque_minimo INTEGER NOT NULL DEFAULT 5,
          fornecedor_id INTEGER,
          imagem TEXT,
          FOREIGN KEY (fornecedor_id)
            REFERENCES fornecedores(id)
            ON DELETE SET NULL
        );

        CREATE TABLE IF NOT EXISTS movimentacoes (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          produto_id INTEGER NOT NULL,
          tipo TEXT NOT NULL
            CHECK (tipo IN ('ENTRADA', 'SAIDA')),
          quantidade INTEGER NOT NULL
            CHECK (quantidade > 0),
          observacao TEXT,
          data TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (produto_id)
            REFERENCES produtos(id)
            ON DELETE RESTRICT
        );
      `);

      // MIGRAÇÃO DE FORNECEDORES ANTIGOS

      const colunasFornecedor = await db.getAllAsync<{
        name: string;
      }>('PRAGMA table_info(fornecedores)');

      const nomesColunasFornecedor = colunasFornecedor.map(
        coluna => coluna.name
      );

      const novasColunasFornecedor = [
        { nome: 'cnpj', tipo: 'TEXT' },
        { nome: 'endereco', tipo: 'TEXT' },
        { nome: 'bairro', tipo: 'TEXT' },
        { nome: 'cidade', tipo: 'TEXT' },
        { nome: 'estado', tipo: 'TEXT' },
      ];

      for (const coluna of novasColunasFornecedor) {
        if (!nomesColunasFornecedor.includes(coluna.nome)) {
          await db.execAsync(`
            ALTER TABLE fornecedores
            ADD COLUMN ${coluna.nome} ${coluna.tipo};
          `);
        }
      }

      // MIGRAÇÃO DA IMAGEM DOS PRODUTOS ANTIGOS

      const colunasProduto = await db.getAllAsync<{
        name: string;
      }>('PRAGMA table_info(produtos)');

      const nomesColunasProduto = colunasProduto.map(
        coluna => coluna.name
      );

      if (!nomesColunasProduto.includes('imagem')) {
        await db.execAsync(`
          ALTER TABLE produtos
          ADD COLUMN imagem TEXT;
        `);
      }
    })().catch(erro => {
      inicializacao = null;
      throw erro;
    });
  }

  return inicializacao;
}

// ==============================
// PRODUTOS
// ==============================

export async function listarProdutos(pesquisa = '') {
  await inicializarBanco();

  const db = await banco;
  const termo = `%${pesquisa.trim()}%`;

  return db.getAllAsync<Produto>(
    `SELECT
      p.*,
      f.nome AS fornecedor_nome
     FROM produtos p
     LEFT JOIN fornecedores f
       ON p.fornecedor_id = f.id
     WHERE p.nome LIKE ?
        OR p.categoria LIKE ?
        OR CAST(p.id AS TEXT) LIKE ?
     ORDER BY p.nome ASC`,
    termo,
    termo,
    termo
  );
}

export async function buscarProduto(id: number) {
  await inicializarBanco();

  const db = await banco;

  return db.getFirstAsync<Produto>(
    'SELECT * FROM produtos WHERE id = ?',
    id
  );
}

export async function salvarProduto(
  dados: DadosProduto,
  id?: number
) {
  await inicializarBanco();

  const db = await banco;

  if (id) {
    return db.runAsync(
      `UPDATE produtos
       SET nome = ?,
           categoria = ?,
           preco = ?,
           quantidade = ?,
           estoque_minimo = ?,
           fornecedor_id = ?,
           imagem = ?
       WHERE id = ?`,
      dados.nome,
      dados.categoria,
      dados.preco,
      dados.quantidade,
      dados.estoque_minimo,
      dados.fornecedor_id,
      dados.imagem,
      id
    );
  }

  return db.runAsync(
    `INSERT INTO produtos (
      nome,
      categoria,
      preco,
      quantidade,
      estoque_minimo,
      fornecedor_id,
      imagem
    )
    VALUES (?, ?, ?, ?, ?, ?, ?)`,
    dados.nome,
    dados.categoria,
    dados.preco,
    dados.quantidade,
    dados.estoque_minimo,
    dados.fornecedor_id,
    dados.imagem
  );
}

export async function excluirProduto(id: number) {
  await inicializarBanco();

  const db = await banco;

  return db.runAsync(
    'DELETE FROM produtos WHERE id = ?',
    id
  );
}

// ==============================
// FORNECEDORES
// ==============================

export async function listarFornecedores(pesquisa = '') {
  await inicializarBanco();

  const db = await banco;
  const termo = `%${pesquisa.trim()}%`;

  return db.getAllAsync<Fornecedor>(
    `SELECT *
     FROM fornecedores
     WHERE nome LIKE ?
        OR cnpj LIKE ?
        OR cidade LIKE ?
     ORDER BY nome ASC`,
    termo,
    termo,
    termo
  );
}

export async function buscarFornecedor(id: number) {
  await inicializarBanco();

  const db = await banco;

  return db.getFirstAsync<Fornecedor>(
    'SELECT * FROM fornecedores WHERE id = ?',
    id
  );
}

export async function salvarFornecedor(
  dados: DadosFornecedor,
  id?: number
) {
  await inicializarBanco();

  const db = await banco;

  if (id) {
    return db.runAsync(
      `UPDATE fornecedores
       SET nome = ?,
           cnpj = ?,
           endereco = ?,
           telefone = ?,
           bairro = ?,
           cidade = ?,
           estado = ?,
           email = ?
       WHERE id = ?`,
      dados.nome,
      dados.cnpj,
      dados.endereco,
      dados.telefone,
      dados.bairro,
      dados.cidade,
      dados.estado,
      dados.email,
      id
    );
  }

  return db.runAsync(
    `INSERT INTO fornecedores (
      nome,
      cnpj,
      endereco,
      telefone,
      bairro,
      cidade,
      estado,
      email
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    dados.nome,
    dados.cnpj,
    dados.endereco,
    dados.telefone,
    dados.bairro,
    dados.cidade,
    dados.estado,
    dados.email
  );
}

export async function excluirFornecedor(id: number) {
  await inicializarBanco();

  const db = await banco;

  return db.runAsync(
    'DELETE FROM fornecedores WHERE id = ?',
    id
  );
}

// ==============================
// MOVIMENTAÇÕES
// ==============================

export async function registrarMovimentacao(
  produtoId: number,
  tipo: 'ENTRADA' | 'SAIDA',
  quantidade: number,
  observacao: string
) {
  await inicializarBanco();

  const db = await banco;

  if (!Number.isInteger(quantidade) || quantidade <= 0) {
    throw new Error('Informe uma quantidade válida.');
  }

  if (tipo !== 'ENTRADA' && tipo !== 'SAIDA') {
    throw new Error('Tipo de movimentação inválido.');
  }

  return db.withTransactionAsync(async () => {
    const produto = await db.getFirstAsync<Produto>(
      'SELECT * FROM produtos WHERE id = ?',
      produtoId
    );

    if (!produto) {
      throw new Error('Produto não encontrado.');
    }

    let novaQuantidade = produto.quantidade;

    if (tipo === 'ENTRADA') {
      novaQuantidade += quantidade;
    } else {
      if (quantidade > produto.quantidade) {
        throw new Error(
          'Estoque insuficiente para essa saída.'
        );
      }

      novaQuantidade -= quantidade;
    }

    await db.runAsync(
      'UPDATE produtos SET quantidade = ? WHERE id = ?',
      novaQuantidade,
      produtoId
    );

    await db.runAsync(
      `INSERT INTO movimentacoes (
        produto_id,
        tipo,
        quantidade,
        observacao
      )
      VALUES (?, ?, ?, ?)`,
      produtoId,
      tipo,
      quantidade,
      observacao.trim() || null
    );
  });
}

export async function listarMovimentacoes() {
  await inicializarBanco();

  const db = await banco;

  return db.getAllAsync<Movimentacao>(
    `SELECT
      m.*,
      p.nome AS produto_nome
     FROM movimentacoes m
     INNER JOIN produtos p
       ON m.produto_id = p.id
     ORDER BY m.id DESC`
  );
}
