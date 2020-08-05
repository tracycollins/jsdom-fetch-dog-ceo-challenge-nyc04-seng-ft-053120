console.log('%c HI', 'color: firebrick')

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

const dogBreedsUl = document.querySelector("ul#dog-breeds")
const dogImageDiv = document.querySelector("div#dog-image-container")
const breedSelect = document.querySelector("#breed-dropdown")

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

let dogBreedArray = []

const fetchBreeds = () => {
  fetch(breedUrl)
    .then(res => res.json())
    .then(dogBreeds => {

      dogBreedArray = []

      Object.keys(dogBreeds.message).forEach((breed) => {
        dogBreedArray.push(breed)
      })

      addDogBreeds(dogBreedArray)
    })
}

fetchBreeds()


const CSS_COLOR_NAMES = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkGray",
  "DarkGrey",
  "DarkGreen",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkSlateGrey",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DimGrey",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fuchsia",
  "Gainsboro",
  "GhostWhite",
  "Gold",
  "GoldenRod",
  "Gray",
  "Grey",
  "Green",
  "GreenYellow",
  "HoneyDew",
  "HotPink",
  "IndianRed",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenRodYellow",
  "LightGray",
  "LightGrey",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSlateGrey",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",
  "Maroon",
  "MediumAquaMarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "NavajoWhite",
  "Navy",
  "OldLace",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "RebeccaPurple",
  "Red",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "SeaShell",
  "Sienna",
  "Silver",
  "SkyBlue",
  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "Snow",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "White",
  "WhiteSmoke",
  "Yellow",
  "YellowGreen",
];

const getRandomColor = () => {
  return randomColor = CSS_COLOR_NAMES[Math.floor(Math.random() * CSS_COLOR_NAMES.length)];
}

const addDogBreeds = (dogBreeds) => {
  // console.log(dogBreeds)
  dogBreeds.forEach(dogBreed => {
    const dogBreedLi = document.createElement("li")
    dogBreedLi.innerText = dogBreed
    dogBreedLi.style.color = "red"
    dogBreedsUl.append(dogBreedLi)

    dogBreedLi.addEventListener("click", (evt) => {
      dogBreedLi.style.color = getRandomColor()
    })
  });
}


fetch(imgUrl)
  .then(res => res.json())
  .then(dogs => {
    addDogImages(dogs.message)
  })

const addDogImages = (dogImageUrls) => {
  // console.log(dogImageUrls)
  dogImageUrls.forEach(dogImageUrl => {
    const dogImg = document.createElement("img")
    dogImg.src = dogImageUrl
    dogImageDiv.append(dogImg)
  });

}

const filterBreedList = (startingBreedChar) => {
  dogBreedsUl.innerHTML = ""

  const filteredDogBreedArray = []

  dogBreedArray.forEach(breed => {
    if (breed[0].toLowerCase() === startingBreedChar.toLowerCase()) {
      filteredDogBreedArray.push(breed)
    }
  });

  addDogBreeds(filteredDogBreedArray)
}

breedSelect.addEventListener("change", (evt) => {
  // console.log(evt.target.options[evt.target.options.selectedIndex].innerText)
  startingBreedChar = evt.target.options[evt.target.options.selectedIndex].innerText
  // console.log(startingBreedChar)
  filterBreedList(startingBreedChar)
})