const randomDogImage = document.getElementById("randomDogImage");
const randomDogButton = document.getElementById('random-btn');
const dogBreedDropdown = document.getElementById('drop-btn');
const imageGrid = document.getElementById("img-container");

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

function imagesByBreeds(event){
  // console.log(event.target.options[event.target.selectedIndex].text)
  let specificBreed = event.target.options[event.target.selectedIndex].text
  const breedImages = `https://dog.ceo/api/breed/${specificBreed}/images`

  fetch(breedImages)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    dogImageGrid(data)
  })
}

function dogImageGrid(data){
  let imageList = data.message
  imageGrid.innerHTML = ""

  imageList.forEach(image => {
    let gridItem = document.createElement('img')
    gridItem.setAttribute('src', `${image}`)
    gridItem.setAttribute('class', "gridItem")
    // imageGrid.innerHTML += `<img class="gridItem" src="${image}"></img>`;
    imageGrid.append(gridItem)
    //const gridItem = document.querySelector('.gridItem')

    gridItem.addEventListener('dblclick', () => {
      gridItem.classList.toggle('large')
    })
  })
}

getBreedList()

randomDogButton.addEventListener('click', getRandomImage)
dogBreedDropdown.addEventListener('change', imagesByBreeds)