const form = document.getElementById('generator')
const formName = document.getElementById('fullName')
const formNIM = document.getElementById('NIM')
const formFakultas = document.getElementById('fakultas')
// variable jurusan
const formJurusan1 = document.getElementById('jurusan1')
const formJurusan2 = document.getElementById('jurusan2')
const formJurusan3 = document.getElementById('jurusan3')
const formJurusan4 = document.getElementById('jurusan4')
const formJurusan5 = document.getElementById('jurusan5')
const formJurusan6 = document.getElementById('jurusan6')
const formJurusan7 = document.getElementById('jurusan7')
const formJurusan8 = document.getElementById('jurusan8')
// variable kelas
const formKelas1 = document.getElementById('kelas1')
const formKelas2 = document.getElementById('kelas2')
const formKelas3 = document.getElementById('kelas3')
const formKelas4 = document.getElementById('kelas4')
const formKelas5 = document.getElementById('kelas5')
const formKelas6 = document.getElementById('kelas6')
const formKelas7 = document.getElementById('kelas7')
const formKelas8 = document.getElementById('kelas8')
// variable kelompok
const formKelompok1 = document.getElementById('kelompok1')
const formKelompok2 = document.getElementById('kelompok2')
const formKelompok3 = document.getElementById('kelompok3')
const formKelompok4 = document.getElementById('kelompok4')
const formKelompok5 = document.getElementById('kelompok5')
const formKelompok6 = document.getElementById('kelompok6')
const formKelompok7 = document.getElementById('kelompok7')
const formKelompok8 = document.getElementById('kelompok8')

//variable kotak
const marginBingkai = document.getElementById('kotak')
const kotakBingkai = document.getElementById('kotak2')

let current = {}

const formError = document.getElementById('errorQR')
var error = 0;

function checkJurusan() {
  if (formJurusan1.value !== "kosong") {
    iniJurusan = formJurusan1.value;
    console.log("Jurusan = " + iniJurusan);
  } else if (formJurusan2.value !== "kosong") {
    iniJurusan = formJurusan2.value;
    console.log("Jurusan = " + iniJurusan);
  } else if (formJurusan3.value !== "kosong") {
    iniJurusan = formJurusan3.value;
    console.log("Jurusan = " + iniJurusan);
  } else if (formJurusan4.value !== "kosong") {
    iniJurusan = formJurusan4.value;
    console.log("Jurusan = " + iniJurusan);
  } else if (formJurusan5.value !== "kosong") {
    iniJurusan = formJurusan5.value;
    console.log("Jurusan = " + iniJurusan);
  } else if (formJurusan6.value !== "kosong") {
    iniJurusan = formJurusan6.value;
    console.log("Jurusan = " + iniJurusan);
  } else if (formJurusan7.value !== "kosong") {
    iniJurusan = formJurusan7.value;
    console.log("Jurusan = " + iniJurusan);
  } else if (formJurusan8.value !== "kosong") {
    iniJurusan = formJurusan8.value;
    console.log("Jurusan = " + iniJurusan);
  } else {
    console.log("You've got error! - Jurusan");
    error += 1;
  }
}

function checkKelas() {
  if (formKelas1.value) {
    iniKelas = formKelas1.value;
    console.log("Kelas = " + iniKelas);
  } else if (formKelas2.value) {
    iniKelas = formKelas2.value;
    console.log("Kelas = " + iniKelas);
  } else if (formKelas3.value) {
    iniKelas = formKelas3.value;
    console.log("Kelas = " + iniKelas);
  } else if (formKelas4.value) {
    iniKelas = formKelas4.value;
    console.log("Kelas = " + iniKelas);
  } else if (formKelas5.value) {
    iniKelas = formKelas5.value;
    console.log("Kelas = " + iniKelas);
  } else if (formKelas6.value) {
    iniKelas = formKelas6.value;
    console.log("Kelas = " + iniKelas);
  } else if (formKelas7.value) {
    iniKelas = formKelas7.value;
    console.log("Kelas = " + iniKelas);
  } else if (formKelas8.value) {
    iniKelas = formKelas8.value;
    console.log("Kelas = " + iniKelas);
  } else {
    console.log("You've got error! - Kelas");
    error += 1;
  }
}

function checkKelompok() {
  if (formKelompok1.value) {
    iniKelompok = formKelompok1.value;
    console.log("Kelompok = " + iniKelompok);
  } else if (formKelompok2.value) {
    iniKelompok = formKelompok2.value;
    console.log("Kelompok = " + iniKelompok);
  } else if (formKelompok3.value) {
    iniKelompok = formKelompok3.value;
    console.log("Kelompok = " + iniKelompok);
  } else if (formKelompok4.value) {
    iniKelompok = formKelompok4.value;
    console.log("Kelompok = " + iniKelompok);
  } else if (formKelompok5.value) {
    iniKelompok = formKelompok5.value;
    console.log("Kelompok = " + iniKelompok);
  } else if (formKelompok6.value) {
    iniKelompok = formKelompok6.value;
    console.log("Kelompok = " + iniKelompok);
  } else if (formKelompok7.value) {
    iniKelompok = formKelompok7.value;
    console.log("Kelompok = " + iniKelompok);
  } else if (formKelompok8.value) {
    iniKelompok = formKelompok8.value;
    console.log("Kelompok = " + iniKelompok);
  } else {
    console.log("You've got error! - Kelompok");
    error += 1;
  }
}

function callMe() {
  checkJurusan();
  checkKelas();
  checkKelompok();
}

function interceptError() {
  if (error == 3) {
    formError.style.display = 'block';
  } else if (error == 2) {
    formError.style.display = 'block';
  } else if (error == 1) {
    formError.style.display = 'block';
  } else {
    formError.style.display = 'none';
  }
}

var today = new Date();
var weekday = new Array();
weekday[0] = "Ahad";
weekday[1] = "Senin";
weekday[2] = "Selasa";
weekday[3] = "Rabu";
weekday[4] = "Kamis";
weekday[5] = "Jumat";
weekday[6] = "Sabtu";
var day =  today.getDate();
var monthx = new Array();
monthx[0] = "Januari";
monthx[1] = "Februari";
monthx[2] = "Maret";
monthx[3] = "April";
monthx[4] = "Mei";
monthx[5] = "Juni";
monthx[6] = "Juli";
monthx[7] = "Agustus";
monthx[8] = "September";
monthx[9] = "Oktober";
monthx[10] = "November";
monthx[11] = "Desember";
var month = monthx[today.getMonth()];
var year = today.getFullYear();
var hari = weekday[today.getDay()];
var kalender = day + " " + month + " " + + year;
var lengkap = hari + ", " + kalender;
var hh = ("0" + today.getHours()).slice(-2);
var mm = ("0" + today.getMinutes()).slice(-2);
var ss = ("0" + today.getSeconds()).slice(-2);
var lengkapw = hh + ":" + mm + ":" + ss;

form.addEventListener('submit', function(e) {
  e.preventDefault();
  callMe();
  interceptError();
  this.style.display = 'none';
  var myData   = JSON.stringify({
      Nama: formName.value,
      NIM: formNIM.value,
      Fakultas: formFakultas.value,
      Jurusan: iniJurusan + " - " +  iniKelas,
      kelompok: iniKelompok,
      Tanggal: lengkap,
      Waktu: lengkapw,
    });
  var secretword = "aA"
  var encrypted = CryptoJS.AES.encrypt(myData, secretword);
  new QRCode('code', {
    text: encrypted.toString(),
    width: 400,
    height: 400,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  })
}, false)