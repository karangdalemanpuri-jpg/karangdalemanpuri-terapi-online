// URL API Apps Script
const API_URL = "https://script.google.com/macros/s/AKfycbxyQVMIeq3vDDPiou6-19dKxuf1xy_TphWsu_nfqtNcERihXuB0d0kvcrTNDCdxDrkx/exec";

// Ambil data dari Apps Script
fetch(API_URL)
  .then(response => response.json())
  .then(data => {

    document.getElementById("rabu").innerHTML =
      data.rabu + " / " + data.kuotaRabu;

    document.getElementById("sabtu").innerHTML =
      data.sabtu + " / " + data.kuotaSabtu;

    document.getElementById("total").innerHTML =
      data.total + " / " + (data.kuotaRabu + data.kuotaSabtu);

    document.getElementById("sisa").innerHTML =
      data.sisaTotal;

    // Simpan URL Google Form
    window.formURL = data.formUrl;

  })
  .catch(error => {
    console.log(error);
  });


// Tombol daftar
document.getElementById("btnDaftar").onclick = function () {

    window.location.href = window.formURL;

};