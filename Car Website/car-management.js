const carMakes = ["Toyota", "Honda", "Ford", "Chevrolet", "BMW", "Mercedes-Benz", "Volkswagen", "Audi", "Porsche", "Ferrari", "Lamborghini", "Mclaren", "Bentley", "Rolls-Royce", "Jaguar", "Land Rover", "Tesla", "Mazda", "Nissan"];
const submitBtn = document.getElementById("button_container");
carMakes.forEach(make => {
  const option = document.createElement("option");
  option.value = make;
  option.text = make;
  document.querySelector("#make").appendChild(option);
});

const years = [...Array(2023 - 1989 + 1).keys()].map(i => 2023 - i);
years.forEach(year => {
  const option = document.createElement("option");
  option.value = year;
  option.text = year;
  document.querySelector("#year").appendChild(option);
});

const fuelTypes = ["Petrol", "Diesel", "Electric", "Hybrid"];
const transmissionTypes = ["Manual", "Automatic", "CVT"];
const bodyTypes = ["Sedan", "Hatchback", "SUV", "Crossover", "Coupe"];

const addOptions = (id, types) => {
  types.forEach(type => {
    const option = document.createElement("option");
    option.value = type;
    option.text = type;
    document.querySelector(`#${id}`).appendChild(option);
  });
};

addOptions("fuel-type", fuelTypes);
addOptions("transmission", transmissionTypes);
addOptions("body-type", bodyTypes);

submitBtn.addEventListener("click", async function(event) {
  event.preventDefault();

  var db = firebase.firestore();

  // Create a reference to the cars table
  var carsRef = db.collection("cars");

  // Get the file input element
  const fileInput = document.querySelector("#image");

  // Get the file from the input element
  const file = fileInput.files[0];

  // Create a storage reference
  const storageRef = firebase.storage().ref();

  // Create a unique file name
  const fileName = `cars/${file.name}-${Date.now()}`;

  // Create a reference to the file
  const fileRef = storageRef.child(fileName);

  // Upload the file to Firebase Storage
  const snapshot = await fileRef.put(file);

  // Get the download URL of the file
  const downloadURL = await snapshot.ref.getDownloadURL();
  
  // Get the values of the form inputs
  const make = document.querySelector("#make").value;
  const model = document.querySelector("#model").value;
  const year = document.querySelector("#year").value;
  const fuelType = document.querySelector("#fuel-type").value;
  const transmission = document.querySelector("#transmission").value;
  const bodyType= document.querySelector("#body-type").value;  
  // Add the new car to the cars collection
  carsRef
  .add({
  make,
  model,
  year,
  fuelType,
  transmission,
  bodyType,
  imageURL: downloadURL
  })
  .then(function() {
  // Show success message
  alert("Car added successfully");
    // Clear the form inputs
    document.querySelector("#make").value = "";
    document.querySelector("#model").value = "";
    document.querySelector("#year").value = "";
    document.querySelector("#fuel-type").value = "";
    document.querySelector("#transmission").value = "";
    document.querySelector("#body-type").value = "";
    fileInput.value = "";
  })
  .catch(function(error) {
    // Show error message
    console.error("Error adding car: ", error);
    alert("Error adding car: " + error);
  });
});  
// Reference to the car list tbody
const carList = document.querySelector("#car-list tbody");

// Reference to the Firebase Realtime Database
const database = firebase.database();

// Reference to the cars in the database
const carsRef = database.ref("cars");

// Listen for changes in the cars data
carsRef.on("value", function(snapshot) {
  carList.innerHTML = ""; // Clear the previous car list

  // Loop through the cars and add them to the car list
  snapshot.forEach(function(childSnapshot) {
    const car = childSnapshot.val();
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><img src="${car.image}" alt="${car.make} ${car.model}" width="100"></td>
      <td>${car.make}</td>
      <td>${car.model}</td>
      <td>${car.body_type}</td>
      <td>${car.transmission}</td>
      <td>${car.fuel_type}</td>
      <td>${car.year}</td>
      <td>${car.mileage}</td>
    `;
    carList.appendChild(row);
  });
});

