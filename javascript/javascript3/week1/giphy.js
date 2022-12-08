//35jNtGWDxwmuaOlAotfLRXM2RHo9Vwh2
//https://api.giphy.com/v1/gifs/search?api_key=35jNtGWDxwmuaOlAotfLRXM2RHo9Vwh2&q=smile&limit=5&rating=g

const displayImages = document.getElementById("displayImages");
const numberOfGiphy = document.getElementById("numberOfGiphy");
const btnSearch = document.getElementById("btnSearch");

function getGifImages(limit) {
  const searchText = document.getElementById("searchGiphy");
  if (!/^\s*$/.test(searchText.value)) {
    fetch(
      "https://api.giphy.com/v1/gifs/search?api_key=35jNtGWDxwmuaOlAotfLRXM2RHo9Vwh2&q=" +
        searchText.value +
        "&limit=" +
        limit +
        "&rating=g"
    )
      .then((response) => response.json())
      .then((gifImages) => {
        console.log(gifImages);
        gifImages.data.forEach((element) => {
          img = document.createElement("img");
          img.src = element.images.original.url;
          displayImages.appendChild(img);
        });
      });
  }
}
const defaultLimit = 5;
function forButton() {
  while (displayImages.children.length != 0) {
    displayImages.removeChild(displayImages.childNodes[0]);
  }
  if (numberOfGiphy.value) getGifImages(numberOfGiphy.value);
  else getGifImages(defaultLimit);
}

function forNumberOfGiphy() {
  if (numberOfGiphy.value) {
    while (displayImages.children.length != 0) {
      displayImages.removeChild(displayImages.childNodes[0]);
    }
    getGifImages(numberOfGiphy.value);
  }
}
// Add of event listner
btnSearch.addEventListener("click", forButton);
numberOfGiphy.addEventListener("input", forNumberOfGiphy);
