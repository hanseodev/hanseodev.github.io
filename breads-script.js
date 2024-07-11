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
                <h2>${product.name} <button class="toggle-btn" onclick="toggleDescription(event)">정보</button></h2>
                <p>${product.description}</p>
                <p>가격: ${product.price}원</p>
                <div class="quantity-container">
                    <label for="quantity-${product.name}">수량:</label>
                    <button type="button" onclick="changeQuantity('quantity-${product.name}', -1, '${product.name}')">-</button>
                    <input type="number" id="quantity-${product.name}" min="0" value="0" onchange="updateCart('${product.name}', 'quantity-${product.name}')">
                    <button type="button" onclick="changeQuantity('quantity-${product.name}', 1, '${product.name}')">+</button>
                </div>
            </div>
        `;
    productContainer.appendChild(productElement);
  });
}

// 설명을 토글하는 함수
function toggleDescription(event) {
  const button = event.target;
  const description = button.parentElement.nextElementSibling;
  if (
    description.style.display === "none" ||
    description.style.display === ""
  ) {
    description.style.display = "block";
  } else {
    description.style.display = "none";
  }
}

// 장바구니에 제품을 업데이트하는 함수
function updateCart(productName, quantityId) {
  const quantity = parseInt(document.getElementById(quantityId).value);
  const existingProduct = cart.find((item) => item.name === productName);
  if (existingProduct) {
    existingProduct.quantity = quantity;
  } else {
    cart.push({ name: productName, quantity: quantity });
  }
  // 수량이 0인 항목은 장바구니에서 제거
  cart = cart.filter((item) => item.quantity > 0);
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
function changeQuantity(quantityId, delta, productName) {
  const input = document.getElementById(quantityId);
  let value = parseInt(input.value);
  value += delta;
  if (value < 0) value = 0;
  input.value = value;
  updateCart(productName, quantityId);
}

// 페이지가 로드되면 제품 데이터를 불러옴
document.addEventListener("DOMContentLoaded", loadProducts);
