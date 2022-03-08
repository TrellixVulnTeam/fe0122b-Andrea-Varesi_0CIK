let bottone = document.querySelector(".bottone");


bottone.addEventListener("click", function (e) {
    e.preventDefault();

    let arr = document.querySelectorAll(".pippo");

    var pippo1 = document.getElementById("username").value;
    var pippo2 = document.getElementById("emailUno").value;
    var pippo3 = document.getElementById("pswUno").value;

    var emailDue = document.getElementById("emailDue").value;



    var controllo = true;



    arr.forEach(elemento => {
        let valore = elemento.value


        if (valore == "") {
            elemento.style.border = "1px solid red";
            controllo = false;

        }

        else {
            elemento.style.border = "";
        }


    });

    if (pippo2 != emailDue) {
        alert("le Email non corrispondono")
        controllo = false;
    }

    else {
        // elemento.style.border = "";
    }


    if (controllo) {
        var nuovoUtente = new User(pippo1, pippo2, pippo3); //blocco di sicurezza//
        memorizzaDati(nuovoUtente);
    };
});



class User {
    constructor(username, email, password) {

        this.username = username
        this.email = email
        this.password = password
    }
}

function memorizzaDati(newUser) {
    let elementiSalvati = localStorage.getItem("Utenti")
    let dataBase = elementiSalvati == null ? [] : JSON.parse(elementiSalvati)
    // qui inserisci il controllo per verificare se la mail inserita dall utente appartiene ad un utente gia registrato
    // preferibilmente utilizza il metodo find
    var target = dataBase.find(oldUser => oldUser.email == newUser.email)
    if (target == undefined) {
        dataBase.push(newUser);
        localStorage.setItem("Utenti", JSON.stringify(dataBase));

    }
}
                                                   //PER DOMATTINA//
// DA FARE LOGIN CHE RIMANDA IN UNA
// PAGINA CON TABELLA CON TUTTI UTENTI REGISRATI
// UNA COLONNA DELLA TABELLA DOVRA CONTENERE UN TASTO ELIMINA PER OGNI UTENTE
// AL CLICK L UTENTE VIENE ELIMINATO DAGLI UTENTI REGISTRATI //SPLICE//








