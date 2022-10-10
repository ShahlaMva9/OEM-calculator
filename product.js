const name = document.getElementById("name");
const price = document.getElementById("price");
const form = document.getElementById("form");
const table = document.getElementById("table");
const addBtn = document.getElementById("add-btn");
const itemList = document.getElementById("item-list");
const updateBtn = document.querySelector(".updateBtn");
const deleteBtn = document.querySelector(".deleteBtn");
const cancelBtn = document.querySelector(".cancelBtn");

const productObj = {
  products: [],
  id: 0,
  selectedProduct: null,
  addProducts(name, price) {
    return this.products.push({
      id: this.id++,
      name,
      price,
    });
  },
  calculateTotal() {
    return this.products.reduce((prev, curr) => {
      return prev + curr.price;
    }, 0);
  },
  updateProducts(name, price) {
    let id = this.selectedProduct.id;
    this.products[id].name = name;
    this.products[id].price = price;
    return this.products[id];
  },
  deleteProducts() {
    let id = this.selectedProduct.id;
    return this.products.splice(id, 1);
  },
};

const listObj = {
  selectedElem: null,
  showProduct(index) {
    const product = productObj.products[index - 1];
    const html = `
                      <tr data="${product.id}">
                        <td>${product.id}</td>
                        <td class="name-value">${product.name}</td>
                        <td class="price-value">${product.price} $</td>
                        <td class="text-right">
                          <button
                            type="submit"
                            class="operation-btn btn btn-warning btn-sm"
                          >
                            <i class="far fa-edit"></i>
                          </button>
                        </td>
                      </tr>
              `;
    itemList.innerHTML += html;
  },
  clearInput() {
    name.value = "";
    price.value = "";
  },
  inputValues(currProduct) {
    name.value = currProduct.name;
    price.value = currProduct.price;
  },
  addingState() {
    this.clearInput();
    this.selectedElem?.classList.remove("bg-warning");
    addBtn.style.display = "inline";
    updateBtn.style.display = "none";
    deleteBtn.style.display = "none";
    cancelBtn.style.display = "none";
  },
  editingState() {
    for (let i = 0; i < itemList.children.length; i++) {
      itemList.children[i].classList.remove("bg-warning");
    }
    this.selectedElem.classList.add("bg-warning");
    addBtn.style.display = "none";
    updateBtn.style.display = "inline";
    deleteBtn.style.display = "inline";
    cancelBtn.style.display = "inline";
  },
  updateProduct(updatedProduct) {
    this.selectedElem.children[1].textContent = updatedProduct.name;
    this.selectedElem.children[2].textContent = updatedProduct.price;
  },
  deleteProduct() {
    this.selectedElem.parentElement.removeChild(this.selectedElem);
  },
};

function sendForm(e) {
  e.preventDefault();
  const index = productObj.addProducts(name.value, price.value);
  listObj.showProduct(index);
  listObj.clearInput();
}

function editProducts(e) {
  e.preventDefault();
  if (e.target.classList.contains("operation-btn")) {
    const element = e.target.parentElement.parentElement;
    const id = element.getAttribute("data");
    listObj.selectedElem = element;
    listObj.editingState();
    productObj.selectedProduct = productObj.products[id];
    listObj.inputValues(productObj.selectedProduct);
  }
}

function updateProducts(e) {
  e.preventDefault();
  if (name.value !== "" && price.value !== "") {
    const updatedProduct = productObj.updateProducts(name.value, price.value);
    listObj.updateProduct(updatedProduct);
  }
  listObj.addingState();
}

function cancelOperation(e) {
  e.preventDefault();
  listObj.addingState();
}

function deleteProduct(e) {
  e.preventDefault();
  productObj.deleteProducts();
  listObj.deleteProduct();
  listObj.addingState();
}

listObj.addingState();
addBtn.addEventListener("click", sendForm);
itemList.addEventListener("click", editProducts);
updateBtn.addEventListener("click", updateProducts);
cancelBtn.addEventListener("click", cancelOperation);
deleteBtn.addEventListener("click", deleteProduct);
