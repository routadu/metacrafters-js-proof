
let car = {
    brand: "Nissan",
    model: "GTR",
    hp: 600,
    seatingCapacity: 4,
    price: 200000
}
car.driveTrain = "AWD"

console.log(car)
console.log()
delete car.driveTrain


car.brand = "Lamborghini"
car.model = "Aventador"
car.seatingCapacity = 2
car.hp = 700
car.type = "ICE"

console.log(car)