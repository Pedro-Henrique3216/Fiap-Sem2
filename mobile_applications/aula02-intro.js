// const pessoa = {
//     nome: "Pedro",
//     sobreNome: "Henrique",
//     idade: 23,
//     peso: 92,
//     endereco: {
//         logradouro: "ELis REgina",
//         numero: 54
//     }
// }

// const {idade : id, peso, endereco: {logradouro}} = pessoa

// console.log(id, peso, logradouro);

// const teste = ["Fernando", "Carlos"]

// teste.sort()
// console.log(teste);


// teste.push("Leonardo")
// console.log(teste);

// teste.unshift("Pedro")
// console.log(teste);


const carros = [
    {modelo:"Paggani", preco:300000, anoFabr:2018,flex:false},
    {modelo:"Tiguan", preco:120000, anoFabr:2022,flex:true},
    {modelo:"Fusca", preco:45000, anoFabr:1990,flex:false},
    {modelo:"Toro", preco:90000, anoFabr:2021,flex:true}
]
console.log(carros.filter((e) => {
    return e.preco>100000 && e.anoFabr > 2020 && !e.flex
}))
 






