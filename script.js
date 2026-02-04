// ===== BÀI 1 =====
const products = [
  "Laptop", "Chuột", "Bàn phím", "Tai nghe", "Màn hình"
];

const productDiv = document.getElementById("products");
const searchInput = document.getElementById("search");
const error = document.getElementById("error");

function render(list) {
  productDiv.innerHTML = "";
  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.textContent = p;
    productDiv.appendChild(div);
  });
}

if (productDiv) {
  render(products);

  searchInput.addEventListener("input", () => {
    const key = searchInput.value.trim().toLowerCase();
    const result = products.filter(p =>
      p.toLowerCase().includes(key)
    );
    error.textContent = result.length ? "" : "Không tìm thấy sản phẩm";
    render(result);
  });
}

// ===== BÀI 2 =====
const form = document.getElementById("registerForm");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const agree = document.getElementById("agree").checked;

    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    if (!regex.test(pass) || !agree) {
      message.textContent = "Dữ liệu không hợp lệ";
      return;
    }
    localStorage.setItem("user", JSON.stringify({ email }));
    message.textContent = "Đăng ký thành công";
  });
}

// ===== BÀI 3 =====
let time = 600;
const timerEl = document.getElementById("timer");

if (timerEl) {
  const interval = setInterval(() => {
    let m = Math.floor(time / 60);
    let s = time % 60;
    timerEl.textContent =
      `${m}:${s < 10 ? "0" : ""}${s}`;

    if (time <= 60) timerEl.classList.add("warning");
    if (time === 0) {
      clearInterval(interval);
      alert("Hết giờ!");
    }
    time--;
  }, 1000);
}
