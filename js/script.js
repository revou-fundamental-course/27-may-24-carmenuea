// Ini JavaScript

// Fungsi untuk Replace Name
function replaceName() {
  let name = prompt("Siapakah Nama Anda?", "");
  document.getElementById("name").innerText = name;
}

replaceName();

// Deklarasi & Fungsi untuk Banner Slide Show
let indexSlide = 1;
showBanner(indexSlide);

function nextSlide(n) {
  showBanner((indexSlide += n));
}

function showBanner(indexBanner) {
  let listImage = document.getElementsByClassName("img-slideshow");
  if (indexBanner > listImage.length) indexSlide = 1;
  if (indexBanner < 1) indexSlide = listImage.length;

  for (let index = 0; index < listImage.length; index++) {
    listImage[index].style.display = "none";
  }

  listImage[indexSlide - 1].style.display = "block";
}

setInterval(() => nextSlide(1), 3000);

// Fungsi untuk Validasi Form dan Menampilkan Result
function validateForm() {
  // Mengambil Nilai dari Form
  const nama = document.getElementById("name-input").value;
  const tanggalLahir = document.getElementById("tanggal-lahir").value;
  const genderMale = document.getElementById("male").checked;
  const genderFemale = document.getElementById("female").checked;
  const pesan = document.getElementsByName("pesan")[0].value;

  // Validasi Form
  if (!nama || !tanggalLahir || !pesan) {
    document.getElementById("error-msg").innerHTML = "Semua field harus diisi!";
    return false;
  }

  if (!genderMale && !genderFemale) {
    document.getElementById("error-msg").innerHTML = "Semua field harus diisi!";
    return false;
  }

  // Panggil fungsi setSenderUI untuk menampilkan hasil
  setSenderUI(nama, tanggalLahir, genderMale ? "Male" : "Female", pesan);

  // Tampilkan alert pesan sudah tersubmit
  alert("Pesan sudah tersubmit!");

  // Reset pesan kesalahan
  document.getElementById("error-msg").innerHTML = "";

  // Mengembalikan nilai true agar formulir bisa dikirimkan
  return true;
}

// Fungsi untuk Menampilkan Result
function setSenderUI(nama, tanggalLahir, gender, pesan) {
  document.getElementById("sender-name").innerText = nama;
  document.getElementById("sender-tanggal-lahir").innerText = tanggalLahir;
  document.getElementById("sender-gender").innerText = gender;
  document.getElementById("sender-pesan").innerText = pesan;
}
