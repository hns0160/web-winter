// q1

function Animal(color,eyes,legs){
    this.color = color;
    this.eyes = eyes;
    this.legs = legs;

    this.eat = function (food){
        if (this.legs == 2){
            if (food == "vegetables"){
                return "food not eaten"
            }
            else { 
                return "food was eaten"
            }
        } 
    }

    this.sleep = function(time){
        if (0 < time <24){
            if (14<time<24){
                return "animal is sleeping"
            }
        }
    }

}

const Owl = new Animal("white",2,2)
const Cheetah = new Animal("brown", 2, 4 )
const Dolphin = new Animal("black", 2, 0)

console.log(Owl.sleep(15))
console.log(Owl.eat("vegetables"))


// q2

function Bird(name,color,eyes,legs){
    this.name = name
    this.color = color
    this.eyes = eyes
    this.legs = legs

    this.eat = function (food){
        if (this.legs == 2){
            if (food == "vegetables"){
                return this.name + " doesnt like vegetables"
            } 

        }
    }

    this.sleep = function(time){
        if (0 < time <24){
            if (14<time<24){
                return this.name + " is sleeping"
            }
            else{
                return this.name + " is awake"
            }
        }
    }

    this.getName = function (){
        return this.name
    }

    this.setName = function (newName){
        this.name = newName
        return "Name of the bird has been changed to " + newName
    }

}

const Parrot = new Bird("Poppy","beige",2,2)
// console.log(Parrot)
console.log(Parrot.sleep(16))
console.log(Parrot.eat("vegetables"))
console.log(Parrot.getName())
console.log(Parrot.setName("KiKi"))
console.log(Parrot.getName())