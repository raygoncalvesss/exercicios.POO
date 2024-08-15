const pessoa = {
    primeiroNome: "Rayssa",
    sobrenome: "Gonçalves",
    idade: 17,
    corOlho: "castanho",
    Altura: 165,
    dataNacimento: "09/04/07",
    usaOculos: true,
    corpele: "parda",
    corfavorita: "Vermelho",
    sexo: "feminino",
};

//primeira frase
console.log(" 1 -" + pessoa.primeiroNome + " "  + pessoa.sobrenome +  " "  + pessoa.idade + " anos ")

//alterar um objeto
pessoa.sobrenome = "Souza";

//segunda frase
console.log(" 2 -" + pessoa.primeiroNome + " "  + pessoa.sobrenome +  " "  + pessoa.idade + " anos ")
