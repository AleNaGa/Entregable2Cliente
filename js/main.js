/*
Almacenando el elemento cuyo id es cardContainer en una variable constante llamada cardContainer, realizar las siguientes acciones:

1) Eliminar el primer elemento hijo desde el padre.
2) Eliminar, desde el propio elemento, el elemento cuya clase es "cards redClass".
3) Crear un elemento h1 con vuestro nombre.
4) Crear un elemento enlace con texto "Vedruna" y cuyo href sea la pagina del vedruna.
5) Crear un elemento boton cuyo id sea "botonJoker" y su texto sea "boton".
6) Crear un elemento div cuya clase sea "cards greenClass".
7) Añadir al elemento div creado anteriormente los h1, enlace y boton creados anteriormente.
8) Añadir a cardContainer el div del apartado anterior.
*/
const cardContainer = document.querySelector("#cardContainer");
//1 eliminar el primer elemento hijo desde el padre
cardContainer.firstElementChild.remove();
//2 eliminar el elemento cuya clase es "cards redClass"
cardContainer.querySelector(".cards.redClass").remove();
//3 crear un elemento h1 con nombre
const h1 = document.createElement("h1");
h1.textContent = "Alejandro";
h1.classList.add("h1-nombre");
h1.id="h1-nombre";
//4 crear un elemento enlace con texto "Vedruna" y cuyo href sea la pagina del vedruna
const link = document.createElement("a")
link.classList.add("link")
link.id="link";
link.href="https://vedrunasevilla.org";
link.textContent="Vedruna";
//5 crear un elemento boton cuyo id sea "botonJoker" y su texto sea "boton"
const button = document.createElement("button");
button.classList.add("boton-Joker");
button.id="botonJoker";
button.textContent="boton";
//6 crear un elemento div cuya clase sea "cards greenClass"
const div = document.createElement("div");
div.classList.add("cards-greenClass");
div.id="cards-greenClass";
div.classList.add("greenClass");
//7 anadir al elemento div creado anteriormente los h1, enlace y boton creados anteriormente
div.appendChild(h1);
div.appendChild(link);
div.appendChild(button)
cardContainer.appendChild(div);
console.log("Ejercicio FIN")

