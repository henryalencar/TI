<?
//exercicos sobre ARRAY(VETOR)
        
        /*01Faça um algoritmo que receba a idade e o peso de 5 pessoas, guarde esses dados em vetores (idade e peso), calcule e mostre:
        A quantidade de pessoas com mais de 90 quilos; A média das idades das 5 pessoas.
      
        const idades = []
        const peso = []
        let mais90 = 0
        let soma = 0

        for( let i = 0; i < 5; i++){    // vai repetir 5 vezes
        idades[i] = Number(prompt('dgigte a idade da pessoa' + (i + 1) + ''))
         peso[i] =  Number(prompt('digite o peso do usario'+ (i + 1) + '' ))

        if(peso [i] > 90){
        mais90++
        }
        soma += idades[i]
    }
     const media = soma / idades.length  // lengt tamanho do vetor(capacidade)
      
     alert('as pessoas com mais de 90kg : ' + mais90)
     alert('media das idADES' + media.toFixed(2))
     */

 $idades = $_GET['idade'];
 $pesos  = $_GET['peso'];

 $mais90 = 0;
 $soma   = 0;

for ($i = 0; $i < 5; $i++) {

    if ($pesos[$i] > 90) {  //$i = vai contar td
        $mais90++;
    }

    $soma += $idades[$i];
}

$media = $soma / count($idades);

echo "Pessoass com mais de 90kg: " . $mais90 . "<hr>";
echo "media das idades:" . $soma . "<hr>";
?>