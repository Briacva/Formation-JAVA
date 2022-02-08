// Récupération des données du formulaire contact dans la console

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

// Input texte avec de chiffres uniquement

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

// Dark mode

function toggleThemeAccueil() {
    // Obtains an array of all <link>
    // elements.
    // Select your element using indexing.
    var theme = document.getElementById("light");
  
    // Change the value of href attribute
    // to change the css sheet.
    if (theme.getAttribute("href") == "assets/css/cssaccueil-2.css") {
      theme.setAttribute("href", "assets/css/darkaccueil.css");
    } else {
      theme.setAttribute("href", "assets/css/cssaccueil-2.css");
    }
  }

  function toggleThemeContact() {
    // Obtains an array of all <link>
    // elements.
    // Select your element using indexing.
    var theme = document.getElementById("light");
  
    // Change the value of href attribute
    // to change the css sheet.
    if (theme.getAttribute("href") == "assets/css/csscontact-2.css") {
      theme.setAttribute("href", "assets/css/darkcontact.css");
    } else {
      theme.setAttribute("href", "assets/css/csscontact-2.css");
    }
  }

  function toggleThemeUnivers() {
    // Obtains an array of all <link>
    // elements.
    // Select your element using indexing.
    var theme = document.getElementById("light");
  
    // Change the value of href attribute
    // to change the css sheet.
    if (theme.getAttribute("href") == "assets/css/cssunivers-2.css") {
      theme.setAttribute("href", "assets/css/darkunivers.css");
    } else {
      theme.setAttribute("href", "assets/css/cssunivers-2.css");
    }
  }