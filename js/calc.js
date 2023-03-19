function jumlah() {
    let frm = document.getElementById("formCalc");
    let bil1 = frm.bilangan1.value;
    let bil2 = frm.bilangan2.value;

    if(!isNaN(bil1) || !isNaN(bil2)) {
        var hasil = parseInt(bil1) + parseInt(bil2);
        frm.hasil.value = hasil;
    }else{
        alert("Maaf Yang Anda Input Bukan Angka");
    }
}

function kurang() {
    let frm = document.getElementById("formCalc");
    let bil1 = frm.bilangan1.value;
    let bil2 = frm.bilangan2.value;

    if(!isNaN(bil1) || !isNaN(bil2)) {
        var hasil = parseInt(bil1) - parseInt(bil2);
        frm.hasil.value = hasil;
    }else{
        alert("Maaf Yang Anda Input Bukan Angka");
    }
}

function kali() {
    let frm = document.getElementById("formCalc");
    let bil1 = frm.bilangan1.value;
    let bil2 = frm.bilangan2.value;

    if(!isNaN(bil1) || !isNaN(bil2)) {
        var hasil = parseInt(bil1) * parseInt(bil2);
        frm.hasil.value = hasil;
    }else{
        alert("Maaf Yang Anda Input Bukan Angka");
    }
}

function bagi() {
    let frm = document.getElementById("formCalc");
    let bil1 = frm.bilangan1.value;
    let bil2 = frm.bilangan2.value;

    if(!isNaN(bil1) || !isNaN(bil2)) {
        var hasil = parseInt(bil1) / parseInt(bil2);
        frm.hasil.value = hasil;
    }else{
        alert("Maaf Yang Anda Input Bukan Angka");
    }
}

function pangkat() {
    let frm = document.getElementById("formCalc");
    let bil1 = frm.bilangan1.value;
    let bil2 = frm.bilangan2.value;

    if(!isNaN(bil1) || !isNaN(bil2)) {
        var hasil = parseInt(bil1) ** parseInt(bil2);
        frm.hasil.value = hasil;
    }else{
        alert("Maaf Yang Anda Input Bukan Angka");
    }
}

function tambah() {
    let angka1 = parseFloat(document.getElementById("angka1").value);
    let angka2 = parseFloat(document.getElementById("angka2").value);
    if (isNaN(angka1)) {
        alert('Maaf pada bagian Angka Pertama yang anda diinput bukan angka');
    } else if (isNaN(angka2)) {
        alert('Maaf pada bagian Angka Kedua yang anda diinput bukan angka');
    }
    let result = angka1 + angka2;
    document.getElementById("result").value = result;
}

function kurang() {
    let angka1 = parseFloat(document.getElementById("angka1").value);
    let angka2 = parseFloat(document.getElementById("angka2").value);
    if (isNaN(angka1)) {
        alert('Maaf pada bagian Angka Pertama yang anda diinput bukan angka');
    } else if (isNaN(angka2)) {
        alert('Maaf pada bagian Angka Kedua yang anda diinput bukan angka');
    }
    let result = angka1 - angka2;
    document.getElementById("result").value = result;
}

function kali() {
    let angka1 = parseFloat(document.getElementById("angka1").value);
    let angka2 = parseFloat(document.getElementById("angka2").value);
    if (isNaN(angka1)) {
        alert('Maaf pada bagian Angka Pertama yang anda diinput bukan angka');
    } else if (isNaN(angka2)) {
        alert('Maaf pada bagian Angka Kedua yang anda diinput bukan angka');
    }
    let result = angka1 * angka2;
    document.getElementById("result").value = result;
}

function bagi() {
    let angka1 = parseFloat(document.getElementById("angka1").value);
    let angka2 = parseFloat(document.getElementById("angka2").value);
    if (isNaN(angka1)) {
        alert('Maaf pada bagian Angka Pertama yang anda diinput bukan angka');
    } else if (isNaN(angka2)) {
        alert('Maaf pada bagian Angka Kedua yang anda diinput bukan angka');
    }
    let result = angka1 / angka2;
    document.getElementById("result").value = result;
}

function pangkat() {
    var angka1 = parseFloat(document.getElementById("angka1").value);
    var angka2 = parseFloat(document.getElementById("angka2").value);
    if (isNaN(angka1)) {
        alert('Maaf pada bagian Angka Pertama yang anda diinput bukan angka');
    } else if (isNaN(angka2)) {
        alert('Maaf pada bagian Angka Kedua yang anda diinput bukan angka');
    }
    let result = Math.pow(angka1, angka2);
    document.getElementById("result").value = result;
}