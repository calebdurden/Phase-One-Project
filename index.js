const randomDogImage = document.getElementById("randomDogImage");
const randomDogButton = document.getElementById('random-btn');
const dogBreedDropdown = document.getElementById('drop-btn');

function getRandomImage(){
  const randomDog = "https://dog.ceo/api/breeds/image/random";

  fetch(randomDog)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      randomDogImage.src = data.message;
    })
}

function getBreedList(){
    const dogBreeds = 'https://dog.ceo/api/breeds/list/all'

    fetch(dogBreeds)
    .then(response => response.json())
    .then(data => {
        //console.log("breeds", data);
        dropDownList(data)
    })
}

function dropDownList(breeds){
  const breedListArray = Object.keys(breeds.message)

  //console.log(breedListArray)
  breedListArray.forEach(breed => {
    let eachBreed = document.createElement('option')
    eachBreed.text = breed

    dogBreedDropdown.add(eachBreed)
  })
}

getBreedList()

randomDogButton.addEventListener('click', getRandomImage)
dogBreedDropdown.addEventListener('onchange', getBreedList)