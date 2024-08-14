const cars = [
    {
      "id": 401,
      "make": "Toyota",
      "model": "Camry",
      "year": 2021,
      "color": "Blue"
    },
    {
      "id": 402,
      "make": "Honda",
      "model": "Civic",
      "year": 2020,
      "color": "Silver"
    },
    {
      "id": 403,
      "make": "Ford",
      "model": "Mustang",
      "year": 2019,
      "color": "Red"
    },
    {
      "id": 404,
      "make": "Chevrolet",
      "model": "Tahoe",
      "year": 2022,
      "color": "Black"
    },
    {
      "id": 405,
      "make": "Nissan",
      "model": "Altima",
      "year": 2020,
      "color": "White"
    }
  ];

  const getCarMake = (car) => car.make;
  console.log(getCarMake(cars[0]))

  const isColorMatching = (car, color) => car.color == color ? true: false;
  console.log(isColorMatching(cars[1], "Blue"))

  const addCar = (cars, car) => {
    cars.push(car);
    return cars
}
  const newCar = {
  "id": 406,
  "make": "Kia",
  "model": "Sorento",
  "year": 2021,
  "color": "Green"
};
  console.log(addCar(cars, newCar))


  const countCarsMadeInYear = (cars, year) => {
    let count = 0;
    cars.forEach(car => car.year == year ? count+= 1: false);
    return count;
  }
console.log(countCarsMadeInYear(cars, 2020))


const removeCarById = (cars, id) => cars.filter(car => car.id == id ? false:true);
console.log(removeCarById(cars, 404))


const updateCarColor = (cars, id, color) =>  {
    let car = cars.find((car) => car.id == id);
    if(car == undefined){
       return "No Car Found";
    }else{
        car.color = color;
        return car;
    }
}

console.log(updateCarColor(cars, 401, "Yellow"))
console.log(updateCarColor(cars, 900, "Green"))

