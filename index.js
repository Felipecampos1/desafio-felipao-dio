let heroi = 'Homem de Ferro';
let xpIronMan = -1;
let rankHeroi = '';

if (xpIronMan < 1000){
    rankHeroi = 'Ferro'
}else if(xpIronMan > 1001 && xpIronMan < 2000){
    rankHeroi = 'Bronze';
}else if(xpIronMan > 2001 && xpIronMan	< 5000){
    rankHeroi = 'Prata';
}else if(xpIronMan > 6001 && xpIronMan < 7000){
    rankHeroi = 'Ouro';
}else if(xpIronMan > 7001 && xpIronMan < 8000){
    rankHeroi = 'Platina';
}else if(xpIronMan > 8001 && xpIronMan < 9000){
    rankHeroi = 'Ascendente';
}else if (xpIronMan > 9001 && xpIronMan < 10000){
    rankHeroi = 'Imortal';
}else if (xpIronMan >= 10001){
    rankHeroi = 'Radiante';
}

console.log('O Herói de nome ' + heroi + ' está no nível de ' + rankHeroi + ' com ' + xpIronMan + ' pontos');
