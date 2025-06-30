
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("splash").style.display = "none";
    document.getElementById("app").classList.remove("hidden");
  }, 1500);
});

function tampilkan(id) {
  document.querySelectorAll(".section").forEach(sec => sec.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function beli(produk) {
  const url = `https://wa.me/6281234567890?text=Halo, saya tertarik beli ${produk}`;
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
    document.getElementById("loginAdmin").classList.add("hidden");
    document.getElementById("panelAdmin").classList.remove("hidden");
    alert("Berhasil login sebagai admin");
  } else {
    alert("Username atau password salah!");
  }
}

function logout() {
  document.getElementById("panelAdmin").classList.add("hidden");
  document.getElementById("loginAdmin").classList.remove("hidden");
  alert("Logout berhasil");
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
