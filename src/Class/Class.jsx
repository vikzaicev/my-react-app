export class User {
    constructor(name) {
        this.name = name
        //console.log(name)
    }
    newUser(id, datas) {
        datas.forEach(user => {
            if (id == user.id) {
                console.log(user.name)
            }
        });
    }
}




class Clock {
    constructor({ template }) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}
//new Clock({ template: "h:m:s" }).start()

class ExtendClock extends Clock {
    constructor(...args) {
        super(...args);
        this.pr = arguments.pr || 1000
    }
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.pr);
    }
}
//const timer = new ExtendClock({ template: "h:m:s" }).start()


class Produkt1 {
    name = "";
    prise = 0;
    constructor(data) {
        this.name = data[0];
        this.prise = data[1];
    }
    getPrise = () => {

        return (`${this.name} стоит ${this.prise}`)
    }
}
const aple = new Produkt1(["aple", '200'])

//console.log(aple.getPrise());


//*************домашка***********//

class Product {
    name = "";
    price = 0;
    constructor(name, price) {
        this.name = name;
        this.price = price
    }
}

class Shoes extends Product {
    constructor(data) {
        super(data.name, data.price);
        this.size = data.size;
        this.season = data.season
    }
    getPrise = () => {
        return (`${this.name} (${this.season}) - ${this.size} размер - ${this.price} Руб)`)
    }
}

class Phone extends Product {
    constructor(data) {
        super(data.name, data.price);
        this.memory = data.memory;
        this.name = data.model.split('-')[0];
        this.model = data.model.split('-')[1];
    }

    getPrice = () => {
        return `${this.name}(${this.model}) - ${this.memory} - ${this.price} Руб`
    }
}

const sneakers = new Shoes({ name: "кеды", season: "Лето", size: "41", price: 500 })
console.log(sneakers.getPrise())

const iphome = new Phone({
    model: "iphome-4s",
    memory: "128GB",
    price: 1000
})
console.log(iphome.getPrice())
console.log(iphome.model)