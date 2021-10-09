function validateForm() {
    var email = document.forms["ptm"]["email"];
    atposition = email.value.indexOf("@");
    dotposition = email.value.lastIndexOf(".");

    function notify(){
        alert("Dengan Mengisi Formulir Maka Anda Setuju Untuk Mengikuti Perkuliahan Tatap Muka.");
    }

    if (document.forms["ptm"]["nama"].value == "") {
        alert("Nama Tidak Boleh Kosong");
        document.forms["ptm"]["nama"].focus();
        return false;
    }

    if (document.forms["ptm"]["nrp"].value == "") {
        alert("NRP Tidak Boleh Kosong");
        document.forms["ptm"]["nrp"].focus();
        return false;
    }

    if (document.forms["ptm"]["alamat"].value == "") {
        alert("Alamat Tidak Boleh Kosong");
        document.forms["ptm"]["alamat"].focus();
        return false;
    }

    if (email.value == "" && atposition < 1 || ( dotposition - atposition < 2 )) {
        alert("Masukkan email yang benar")
        email.focus() ;
        return false;
     }
 

    if (document.forms["ptm"]["fakultas"].selectedIndex < 1) {
        alert("Pilih Fakultas.");
        document.forms["ptm"]["fakultas"].focus();
        return false;
    }

    notify();

    return true;

}