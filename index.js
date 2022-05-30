const randomDogImage = document.getElementById("randomDogImage");

function getRandomImage(){
  const randomImageApiUrl = "https://dog.ceo/api/breeds/image/random";

  fetch(randomImageApiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      randomDogImage.src = data.message;
    })
}

getRandomImage();