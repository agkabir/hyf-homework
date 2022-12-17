console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

// my codes goes here
const productContainer = document.getElementById("productDiv");
const searchProduct = document.getElementById("searchProduct");
const maxPrice = document.getElementById("maxPrice");
const productUl = document.createElement("ul");
productContainer.appendChild(productUl);

function displaySearchedProduct(searchedProducts) {
  while (productUl.children.length != 0) {
    productUl.removeChild(productUl.childNodes[0]);
  }
  searchedProducts.forEach((obj) => {
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
  });
  productContainer.appendChild(productUl);
}

function searchByProductName() {
  const searchText = document.getElementById("searchProduct").value;
  const pattern = new RegExp(searchText, "gim");
  const searchedProducts = products.filter((product) =>
    pattern.test(product.name)
  );
  displaySearchedProduct(searchedProducts);
}

function searchByProductPrice() {
  const searchPrice = document.getElementById("maxPrice").value;
  const searchedProducts = products.filter(
    (product) => product.price <= searchPrice
  );
  displaySearchedProduct(searchedProducts);
}

searchProduct.addEventListener("input", searchByProductName);
maxPrice.addEventListener("input", searchByProductPrice);
