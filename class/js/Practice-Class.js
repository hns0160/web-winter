const user = {
    id: 1,
    name: "David",
    email: "dave@gmail.com",
    address: {
    mailing: "123 Main St",
    shipping: "789 Main St"
    },
    cart: ["banana", "milk", "napkins"]
    }

console.log(user)
    
let addGeneral = user["address"]
addGeneral["general"] = addGeneral["mailing"]

console.log(user)