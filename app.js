// URL API Apps Script const API_URL = "https://script.googleusercontent.com/macros/echo?user_content_key=AUkAhnRNoXRjQUHE0kgILFijVOdKnmcchscbCvhHGZ9teJIfUJNNvUTKWPxpXINdrlmoR2JhgZyn0QqxETsfjwlKq9Nd1WQ2Y1MLbS2kHJS7cWvqjWQPx1mEMf4w2Py7KRmB1_1B1agxnxbPWBxKj7l2B1OJcGIYn1DhnLeuVv9_ZpBkKgEIW8uZqVSfFS90xgwtqr7mT3CHGhHFtzdA0EV7WdUVSmoHoeaTJ6_yUviC_sp6ihbKPebMZvBVmeCIN4AWEi3QDXlSZb3uEx9-vkFo9NN715HbTg&lib=M5dYG2LfjgPNFHm0Ckf0u3LznOzLTcAVA";

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