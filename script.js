let personas = {

    vilma: {
        name: "Vilma",
        photo: "img/vilma.gif"
     
    },

    louis: {
        name: "Louis",
        photo: "img/louis.gif"
     
    } ,

    sonia: {
        name: "Sonia",
        photo: "img/sonia.gif"
     
    } 
}

//vilma
document.querySelector('.vilmaname').innerHTML = personas.vilma.name
document.querySelector(".vilma-image").setAttribute("src",personas.vilma.photo)

//louis
document.querySelector('.louisname').innerHTML = personas.louis.name
document.querySelector(".louis-image").setAttribute("src",personas.louis.photo)

//louis
document.querySelector('.sonianame').innerHTML = personas.sonia.name
document.querySelector(".sonia-image").setAttribute("src",personas.sonia.photo)


function displayText() {
    var text = document.getElementById("textField");
    text.style.display = "block";
  }

  function displayText2() {
    var text = document.getElementById("textField1");
    text.style.display = "block";
  }

  function displayText3() {
    var text = document.getElementById("textField2");
    text.style.display = "block";
  }