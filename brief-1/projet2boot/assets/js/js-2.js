function data() {

    var Prenom = document.getElementById("Prenom").value;
    console.log(Prenom);

    var Nom = document.getElementById("Nom").value;
    console.log(Nom);

    var Adressem = document.getElementById("Adresse-mail").value;
    console.log(Adressem);

    var NumeroTel = document.getElementById("NumeroTel").value;
    console.log(NumeroTel);

    var Adressep = document.getElementById("Adresse-postale").value;
    console.log(Adressep);

    var Codep = document.getElementById("Code-postal").value;
    console.log(Codep);

    var Ville = document.getElementById("Ville").value;
    console.log(Ville);

    var objetMessage = document.getElementById("objetMessage").value;
    console.log(objetMessage);

    var message = document.getElementById("message").value;
    console.log(message);
}

function digits(chiffres) {
    var Zevent = chiffres || window.event;

    // Handle paste
    if (Zevent.type === 'paste') {
        key = Event.clipboardData.getData('text/plain');
    } else {
        // Handle key press
        var key = Zevent.keyCode || Zevent.which;
        key = String.fromCharCode(key);
    }
    var regex = /^\d+$/;
    if (!regex.test(key)) {
        Zevent.returnValue = false;
        if (Zevent.preventDefault) Zevent.preventDefault();
    }
}

function toggleTheme() {
    // Obtains an array of all <link>
    // elements.
    // Select your element using indexing.
    var theme = document.getElementById("light");
  
    // Change the value of href attribute
    // to change the css sheet.
    if (theme.getAttribute("href") == "assets/css/cssaccueil-2.css") {
      theme.setAttribute("href", "assets/css/dark.css");
    } else {
      theme.setAttribute("href", "assets/css/cssaccueil-2.css");
    }
  }