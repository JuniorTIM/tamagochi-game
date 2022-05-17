const tamogotchi = {
    name: 'egg',
    meal: 1,
    energy: 2,
    mood: 4,

    getStatus: function() {
    let hungry;
    let sleepy;
    let moody;
    let result;
      
    if (this.meal < 3) {
        hungry = `Я голоден (${this.meal})`
    } else {
        hungry = `Я не голоден (${this.meal})`
    }

    if (this.energy < 3) {
        sleepy = `Я хочу спать (${this.energy})`
    } else {
        sleepy = `Я не хочу спать (${this.energy})`
    }

    if (this.mood < 3) {
        moody = `Мне не весело (${this.mood})`
    } else {
        moody = `Мне весело (${this.mood})`
    }

    if (this.meal <= 0 || this.energy <= 0 || this.mood <= 0) {
    result = `[${this.name}] умер :(`
    } else {
    result = (`Имя: ${this.name}, Еда: ${hungry}, 
    Энергия: ${sleepy}, Настроение: ${moody}.`)
    }

    console.log(result)
    },
      
    setName: function (newName) {
      this.name = newName
    },

    goEat: function () {
        if (this.meal < 5) {
           this.meal += 1 
        }
        this.mood -= 1
    },

    goSleep: function () {
        if (this.energy < 5) {
            this.energy += 1
        }
        this.meal -= 1
    },

    goPlay: function () {
        if (this.mood < 5) {
            this.mood += 1
        }
        this.energy -= 1
    }

}