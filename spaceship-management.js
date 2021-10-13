class spaceship {
    constructor(und_name, nd_quant, engatada = true, door = true, ) {
        this.name = und_name
        this.quantity_crew = nd_quant
        this.engatada = engatada
        this.door = door
    }
}
var spaceshipArray = []

function createSpaceship(spaceship_name, quantidade) {
    let namestring = spaceship_name
    let newNave = new spaceship
    newNave.name = namestring
    newNave.quantity_crew = quantidade
    return newNave
}



while (true) {
    let op = parseInt(prompt("Qual é a sua opção? "))
    if (op === 1) {
        let user_name = prompt("Qual o nome da nave? ")
        let user_crew = prompt("Quantidade de tripulantes? ")
        var aux_ship = createSpaceship(user_name, user_crew)
        spaceshipArray.push(aux_ship)
    } else if (op === 2) {
        for (let index = 0; index < spaceshipArray.length; index++) {
            console.log(spaceshipArray[index].name + ", " + spaceshipArray[index].quantity_crew)
        }
    } else {
        break
    }
}
