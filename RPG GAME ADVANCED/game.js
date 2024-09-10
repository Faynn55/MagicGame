function Start() {
    let inventaire;
    inventaire = "Inventaire(0) :";
    document.getElementById("Inventaire").innerHTML = inventaire;
}
function allObject() {
    let Object1;
    Object1 = " ";
    document.getElementById("Object1").innerHTML = Object1;

    let Object2;
    Object1 = "";
    document.getElementById("Object2").innerHTML = Object2;
}

function ALL() {
    Start();
    allObject();
}

ALL()