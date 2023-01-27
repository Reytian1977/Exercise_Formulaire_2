function Validation(){
    let nom = document.forms[0]["nom"].value;


    // Validation pour le nom
    if (nom.length <= 2 && nom.length >= 100)
    {
        return true
    }
    else
    {
        alert("Le nom n'est pas valide")
        return false
    }
}

function validatePhone() {
    var province = document.getElementById("province").value;
    var phone = document.getElementById("phone").value;
    if (province === "ontario" && !phone.startsWith("613")) {
        alert("Numéro de téléphone incorrect pour la province sélectionnée.");
    } else {
        alert("Numéro de téléphone valide pour la province sélectionnée.");
    }
}
