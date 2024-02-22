class heroi{
    constructor(nomeDoHeroi, idadeDoHeroi, tipoDoHeroi){
        this.nomeDoHeroi = nomeDoHeroi
        this.idadeDoHeroi = idadeDoHeroi
        this.tipoDoHeroi = tipoDoHeroi
    }
    atacar(){
        console.log(`O ${this.nomeDoHeroi} atacou usando ${this.tipoDoHeroi}`)
    }

}

    let mago = new heroi("Mago", "26 anos", "magia")
    let guerreiro = new heroi("Guerreiro", "25 anos", "espada")
    let monge = new heroi("Monge", "50 anos", "artes marciais")
    let ninja = new heroi("Ninja", "23 anos", "shuriken")

    mago.atacar()