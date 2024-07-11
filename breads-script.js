console.log("breads-script.js loaded"); // JavaScript 파일이 로드되었음을 확인하는 로그

let cart = [];

// JSON 파일에서 제품 데이터를 불러오는 함수
async function loadProducts() {
  try {
    const response = await fetch("breads-products.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    console.error("Error loading products:", error);
  }
}

// 제품 목록을 화면에 표시하는 함수
function displayProducts(products) {
  const productContainer = document.getElementById("product-container");
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name} 이미지">
            <div class="product-details">
                <h2>${product.name}</h2>
                <p>가격: ${product.price}원</p>
                <p>${product.description}</p>
                <div class="quantity-container">
                    <label for="quantity-${product.name}">수량:</label>
                    <input type="number" id="quantity-${product.name}" min="1" value="1">
                    <button type="button" onclick="changeQuantity('quantity-${product.name}', -1)">-</button>
                    <button type="button" onclick="changeQuantity('quantity-${product.name}', 1)">+</button>
                </div>
                <button onclick="addToCart('${product.name}', 'quantity-${product.name}')">장바구니 담기</button>
            </div>
        `;
    productContainer.appendChild(productElement);
  });
}

// 장바구니에 제품을 추가하는 함수
function addToCart(productName, quantityId) {
  console.log(`Adding to cart: ${productName}`); // 디버깅을 위한 로그
  const quantity = document.getElementById(quantityId).value;
  const existingProduct = cart.find((item) => item.name === productName);
  if (existingProduct) {
    existingProduct.quantity =
      parseInt(existingProduct.quantity) + parseInt(quantity);
  } else {
    cart.push({ name: productName, quantity: parseInt(quantity) });
  }
  console.log("Cart:", cart); // 디버깅을 위한 콘솔 로그
  updateCartDisplay();
}

// 장바구니 내용을 업데이트하는 함수
function updateCartDisplay() {
  console.log("Updating cart display"); // 디버깅을 위한 로그
  const cartList = document.getElementById("cart");
  cartList.innerHTML = ""; // 기존 내용을 비움
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name}: ${item.quantity}개`;
    cartList.appendChild(li);
  });
  console.log("Cart Display Updated"); // 디버깅을 위한 콘솔 로그
}

// 클립보드에 장바구니 내용을 복사하는 함수
function copyCartToClipboard() {
  console.log("Copying cart to clipboard"); // 디버깅을 위한 로그
  let cartContent = cart
    .map((item) => `${item.name}: ${item.quantity}개`)
    .join("\n");
  navigator.clipboard
    .writeText(cartContent)
    .then(() => {
      alert("장바구니 내용이 클립보드에 복사되었습니다.");
    })
    .catch((err) => {
      console.error("클립보드 복사 실패: ", err);
    });
}

// 수량을 변경하는 함수
function changeQuantity(quantityId, delta) {
  const input = document.getElementById(quantityId);
  let value = parseInt(input.value);
  value += delta;
  if (value < 1) value = 1;
  input.value = value;
}

// 페이지가 로드되면 제품 데이터를 불러옴
document.addEventListener("DOMContentLoaded", loadProducts);
