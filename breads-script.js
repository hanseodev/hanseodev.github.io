let cart = [];

function addToCart(productName, quantityId) {
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
