class Personagem {
    constructor (nome, vida, ataque, defesa){
        this.nome = nome,
        this.vida = vida,
        this.ataque = ataque
        this.defesa = defesa
    }

    causaDano(personagem){
        personagem.recebeDano(this.ataque)
    }

    recebeDano(quantidade){
        this.vida = this.vida - quantidade
        
        if(this.vida <= 0){
        this.vida = "eliminado"
    }
    }

    estaVivo(){
        return this.vida > 0
    }

    mostrarStatus(){
        console.log(this.nome + " | Vida: " + this.vida)
    }
}

const druida = new Personagem("Kode", 80, 25, 15)
const guerreiro = new Personagem("Thorin", 60, 20, 30)
const mago = new Personagem("Gandalfe", 60, 35, 20)
const arqueiro = new Personagem("Legolas", 80, 25, 10)

const samurai = new Personagem("Akuma", 70, 25, 10)
const necromante = new Personagem("Vult", 60, 20, 20)
const tanque = new Personagem("Isati", 90, 15, 50)

class Teste extends Personagem {
    constructor(nome){
        super(nome, 80, 35, 15)
    }
}

const Sigmund = new Teste("Sigmund")

const personagens = [
    druida,
    guerreiro,
    mago,
    arqueiro,
    samurai,
    necromante,
    tanque,
    Sigmund
]

personagens.forEach(function(personagem){
    personagem.mostrarStatus()
})