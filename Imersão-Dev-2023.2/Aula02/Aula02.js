var numeroSecreto = parseInt(Math.random()*1001);


while(chute != numeroSecreto){
    var  chute = prompt('Adivinhe um numero: ');


    if (chute == numeroSecreto){
        alert('Acertou');
    }else if(chute > numeroSecreto){
        alert('Tente de novo! Só que um numero menor!');
    }else if(chute < numeroSecreto){
        alert('Tente de novo! Só que um numero maior!');
    }
};