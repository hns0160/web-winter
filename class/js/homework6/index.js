class Building {

    #hasWalls; #numOfWalls; #roofShape
    
    constructor(hasWalls, numOfWalls, roofShape){
    this.#hasWalls = hasWalls;
    this.#numOfWalls = numOfWalls;
    this.#roofShape = roofShape;
    }
    
    closedDoor() {
        console.log("door is closing");
    }
    

    openDoor(){
        console.log("door is opening");
    }

    getHasWall(){
        return this.#hasWalls
    }
    getnumWalls(){
        return this.#numOfWalls
    }

    getRoofShape(){
        return this.#roofShape
    }

    setHasWall(val){
        this.#hasWalls = val
    }
    setNumWalls(val){
        this.#numOfWalls = val
    }

    setRoofShape(val){
        this.#roofShape = val
    }

}


// let skyrise_terminal = new Building(20,22,"dome")
// for (key in skyrise_terminal){
//     console.log(key)
// }

// skyrise_terminal.closedDoor()
// skyrise_terminal.openDoor()


class Gym extends Building {
    #gymName; #hasPool

    constructor(gymName,hasPool,hasWalls,numOfWalls,roofShape){
        super(hasWalls,numOfWalls,roofShape)
        this.#gymName = gymName
        this.#hasPool = hasPool
    }

    getGymName(){
        return this.#gymName
    }

    getHasPool(){
        return this.#hasPool
    }

    setGymName(val){
        this.#gymName = val
    }

    setHasPool(val){
        this.#hasPool = val
    }

    closeGym(){
        super.closedDoor()
    }
    openGym(){
        super.openDoor()
    }
}

class Bank extends Building{
    #name;#numOfStaff;#numOfVault

    constructor(name,numOfStaff,numOfVault,hasWalls,numOfWalls,roofShape){
        super(hasWalls,numOfWalls,roofShape)
        this.#name = name
        this.#numOfStaff = numOfStaff
        this.#numOfVault = numOfVault
    }

    getName(){
        return this.#name
    }

    getNumOfStaff(){
        return this.#numOfStaff
    }

    getNumOfVault(){
        return this.#numOfVault
    }

    setName(val){
        this.#name = val
    }

    setNumOfStaff(val){
        this.#numOfStaff = val
    }

    setNumOfVault(val){
        this.#numOfVault = val
    }
    closeBank(){
        return super.closedDoor()
    }
    openBank(){
        return super.openDoor()
    }
}


let bitnor = new Bank("bitnor",45,22,"yes",77,"flat")
let gymBro = new Gym("GymBro","yes","no",0,"open")


// bank
console.log("-------Bank CLASS------------")
// testing parent classes private properties through methods
console.log(bitnor.getHasWall())
bitnor.setHasWall("YESS")
console.log(bitnor.getHasWall())
console.log("-----------------------")
console.log(bitnor.getnumWalls())
console.log(bitnor.getRoofShape())
console.log("-----------------------")

// // testing bank class methods 
console.log("-----------------------")
bitnor.closeBank()
bitnor.openBank()
console.log("-----------------------")
console.log(bitnor.getNumOfStaff())
bitnor.setNumOfStaff(99)
console.log(bitnor.getNumOfStaff())
console.log("---------------------------------------------------------")
console.log("---------------------------------------------------------")
// gym
// checking parent classes private properties through methods
console.log("-------GYM CLASS------------")
console.log(gymBro.getHasWall())
gymBro.setHasWall("OPEN FIELD")
console.log(gymBro.getHasWall())
console.log("-----------------------")
console.log(gymBro.getnumWalls())
console.log(gymBro.getRoofShape())
console.log("-----------------------")
// testing gym class methods 
gymBro.closeGym()
gymBro.openGym()
console.log("-----------------------")
console.log(gymBro.getGymName())
gymBro.setGymName("NewGymBro")
console.log(gymBro.getGymName())

