class Personagem {
    constructor (nome, vida, ataque){
        this.nome = nome,
        this.vida = vida,
        this.ataque = ataque
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
}

const druida = new Personagem("Kode", 80, 25)
const guerreiro = new Personagem("Thorin", 60, 20)
const mago = new Personagem("Gandalfe", 60, 35)
const arqueiro = new Personagem("Legolas", 80, 25)

const cavaleiro = new Personagem("Cadmus", 70, 25)
const renegado = new Personagem("Valtair", 60, 20)
const tanque = new Personagem("Isati", 90, 15)




druida.causaDano(guerreiro)
guerreiro.causaDano(mago)
mago.causaDano(arqueiro)
arqueiro.causaDano(cavaleiro)
cavaleiro.causaDano(renegado)
renegado.causaDano(tanque)
tanque.causaDano(druida)

console.log(druida.vida, guerreiro.vida, mago.vida, arqueiro.vida, cavaleiro.vida, renegado.vida, tanque.vida)