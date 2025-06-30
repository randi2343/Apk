
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("splash").style.display = "none";
    document.getElementById("app").classList.remove("hidden");
  }, 2000);
});

let isAdmin = false;

function beli(produk) {
  const url = `https://wa.me/6281234567890?text=Halo, saya ingin beli ${produk}`;
  window.open(url, "_blank");
}

function kirimKomentar() {
  const komentar = document.getElementById("komentarInput").value;
  if (komentar.trim()) {
    const div = document.createElement("div");
    div.textContent = `👤 Pengunjung: ${komentar}`;
    document.getElementById("daftar-komentar").appendChild(div);
    document.getElementById("komentarInput").value = "";
  }
}

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user === "Randi" && pass === "123456") {
    isAdmin = true;
    document.getElementById("balasanAdmin").classList.remove("hidden");
    document.getElementById("loginAdmin").classList.add("hidden");
    alert("Login berhasil sebagai Admin");
  } else {
    alert("Username atau Password salah!");
  }
}

function balasKomentar() {
  const balasan = document.getElementById("balasanInput").value;
  if (balasan.trim()) {
    const div = document.createElement("div");
    div.textContent = `🛠️ Admin: ${balasan}`;
    document.getElementById("daftar-komentar").appendChild(div);
    document.getElementById("balasanInput").value = "";
  }
}

function logout() {
  isAdmin = false;
  document.getElementById("balasanAdmin").classList.add("hidden");
  document.getElementById("loginAdmin").classList.remove("hidden");
  alert("Logout berhasil");
}
