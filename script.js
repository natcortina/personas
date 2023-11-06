let personas = {

    vilma: {
        name: "Vilma",
        photo: "img/vilma.gif"
     
    },

    louis: {
        name: "Louis",
        photo: "img/louis.gif"
     
    } 

}

//vilma
document.querySelector('.vilmaname').innerHTML = personas.vilma.name
document.querySelector(".vilma-image").setAttribute("src",personas.vilma.photo)

//louis
document.querySelector('.louisname').innerHTML = personas.louis.name
document.querySelector(".louis-image").setAttribute("src",personas.louis.photo)