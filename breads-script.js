console.log("breads-script.js loaded"); // JavaScript 파일이 로드되었음을 확인하는 로그

let cart = [];

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

function changeQuantity(quantityId, delta) {
  const input = document.getElementById(quantityId);
  let value = parseInt(input.value);
  value += delta;
  if (value < 1) value = 1;
  input.value = value;
}
