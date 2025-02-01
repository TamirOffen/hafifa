class LateBloomer {
    #delay;
    petalNumber;

    constructor(delay = 1000) {
        this.#delay = delay;
        this.petalNumber = Math.floor(Math.random() * 12) + 1;
    }

    bloom() {
        // setTimeout(this.declare, this.#delay);
        setTimeout(() => this.declare(), this.#delay);
        // setTimeout(this.declare.bind(this), this.#delay);
    }

    declare() {
        console.log(`I am a beautiful flower with ${this.petalNumber} petals!`);
    }
}

const flower = new LateBloomer();
flower.bloom();
flower.declare();

  
