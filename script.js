function atnaujintiLaika() {

    var laikas = new Date();


    var valandos = laikas.getHours();
    var minutes = laikas.getMinutes();
    var sekundes = laikas.getSeconds();


    valandos = valandos < 10 ? "0" + valandos : valandos;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    sekundes = sekundes < 10 ? "0" + sekundes : sekundes;


    var laikoFormatas = valandos + ":" + minutes + ":" + sekundes;


    var laikrodzioElementas = document.getElementById("laikrodis");


    laikrodzioElementas.innerHTML = laikoFormatas;
}


setInterval(atnaujintiLaika, 1000);


atnaujintiLaika();


function saugotiDuomenis() {
    // Gauname reikiamus laukus iš formos
    var vardas = document.getElementById("vardas").value;
    var pavarde = document.getElementById('pavarde').value;
    var email = document.getElementById('email').value;
    var telefonas = document.getElementById('telefonas').value;
    var adresas = document.getElementById('adresas').value;
    var pozymiai1 = parseInt(document.getElementById('pozymiai1').value);
    var pozymiai2 = parseInt(document.getElementById('pozymiai2').value);
    var pozymiai3 = parseInt(document.getElementById('pozymiai3').value);
    var pozymiai4 = parseInt(document.getElementById('pozymiai4').value);
    var pozymiai5 = parseInt(document.getElementById('pozymiai5').value);

    // Sukuriame JavaScript objektą su surinkta informacija
    var kontaktai = {
        vardas: vardas,
        pavarde: pavarde,
        email: email,
        telefonas: telefonas,
        adresas: adresas,
        pozymiai: [pozymiai1, pozymiai2, pozymiai3, pozymiai4, pozymiai5]
    };

    // Išvedame objekto turinį į naršyklės konsolę
    console.log(kontaktai);
}


