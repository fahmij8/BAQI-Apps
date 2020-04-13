function sendMail() {
    var yourMessage = document.getElementById("Nama").value  + " - " + document.getElementById("NIM").value   + " - " + document.getElementById("HP").value  + " \n " + document.getElementById("Pesan").value ;
    var subject = "BAQI APPS - Keluhan/Bug Report/Saran";
    document.location.href = "mailto:fahmijabbar@upi.edu?subject="
        + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(yourMessage);
    window.location.replace("/index.html")
    }