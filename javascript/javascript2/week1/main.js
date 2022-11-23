console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);
// my codes goes here
const productContainer = document.getElementById("idMain");
const productUl = document.createElement("ul");

for (let obj of products) {
  const titleLi = document.createElement("li");
  const titleH1 = document.createElement("h1");
  titleH1.innerHTML = obj.name;
  titleLi.append(titleH1);
  productUl.appendChild(titleLi);
  const priceLi = document.createElement("li");
  priceLi.innerHTML = `price: ${obj.price}`;
  productUl.appendChild(priceLi);
  const ratingLi = document.createElement("li");
  ratingLi.innerHTML = `Rating: ${obj.rating}`;
  productUl.appendChild(ratingLi);
}
productContainer.appendChild(productUl);
