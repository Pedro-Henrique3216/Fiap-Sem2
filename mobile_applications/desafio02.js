function filterPeople(peoples) {
    console.log(peoples.filter((people => {
        const {age, profession} = people
        return age >= 18 && profession == "Desenvolvedor"
    })));
}

const peoples = [
    {name: "João", age: 25, profession: "Desenvolvedor"},
    {name: "Maria", age: 17, profession: "Designer"},
    {name: "Carlos", age: 30, profession: "Desenvolvedor"},
    {name: "Ana", age: 12, profession: "Desenvolvedor"},
]

filterPeople(peoples);

// Crie uma função que receba dois números e retorne a soma, subtração, multiplicação e divisão desses números em um objeto.

function calc(num1, num2) {
    console.log(
        num1 + num2,
        num1 - num2,
        num1 * num2,
        num1 / num2
    );
}

calc(2, 2)