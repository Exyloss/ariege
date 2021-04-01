# Site web sur l'Ariège (Projet de NSI)
lien : https://exyloss.github.io 
<br><br>
Sommaire :
1. Liste des APIs utilisées
2. Explication du code Javascript
3. Explication du code CSS

## 1. Les APIs utilisées
### 1. [JQuery](https://jquery.com/)<br>
JQuery a été utilisé pour simplifier le code javascript. Par exemple `document.getElementById("id")` s'écrit `$("#id")` en JQuery.<br>
### 2. [Vegas JS](https://github.com/jaysalvat/vegas)<br>
Voici le code permettant de créer un diaporama :<br>
```javascript
$('#slides').vegas({
  delay: 5000,
  timer: false,
  firstTransition: 'fade',
  firstTransitionDuration: 5000,
  transition: 'slideDown2',
  transitionDuration: 2000,
  slides: [
      { src: 'img/montagne.jfif' },
      { src: 'img/mirepoix.jfif' },
      { src: 'img/chateau.jfif' }
  ]
});
```
### 3. [Leaflet](https://leafletjs.com/)<br>
```javascript
var villes = {
	"Château de Foix": { "lat": 42.9657002, "lon": 1.6047597 },
	"Château de Montségur": { "lat": 42.8757262, "lon": 1.8325002 },
	"Château de Roquefixade": { "lat": 42.9386805, "lon": 1.7531815 },
	"Château d'Usson": { "lat": 42.7355493, "lon": 2.0874808 }
};

function initMap() {
	macarte = L.map('map').setView([42.9638998, 1.6053807], 8);
	L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
		attribution: 'OpenStreetMap',
		minZoom: 4,
		maxZoom: 19
	}).addTo(macarte);
	for (ville in villes) {
		var marker = L.marker([villes[ville].lat, villes[ville].lon]).addTo(macarte);
		marker.bindPopup(ville);
	}               	
}

window.onload = function(){
	initMap(); 
}
```
Tout d'abord, le dictionnaire au début du programme permet de lier un nom de château à des coordonnées.<br>
Puis, la fonction `initMap()` est définie. Celle-ci est lancée au début grâce à `window.onload`.<br>
La première ligne de cette fonction permet de créer l'objet carte et de l'insérer dans le conteneur "map".<br>
La deuxième ligne précise à l'API où se situe le serveur hébergeant la carte, puis donne la source de la carte, en l'ocurence OpenStreetMap.<br>
Enfin, la boucle présente à la fin de la fonction place les marqueurs sur la carte et leur attribue un popup grâce aux clefs du dictionnaire définit plus tôt.
<br><br>

## 2. Explication du code JavaScript
Le code JavaScript est divisé en 4 fonctions :
 - La première permet d'afficher la classe `.recette` lors du clic sur le bouton. les fonctions `show` et `hide` permettent d'animer l'apparition du texte.
 - La fonction `darkTheme()` permet de changer la valeur de l'attribut `href` de la balise `link` pour utiliser la feuille de style `style2.css` afin d'avoir un fond sombre pour les conteneurs.
 - Les deux dernières fonctions attribuent les valeurs des entrées des formulaires à des constantes puis affiche ces valeurs dans un popup `alert`.<br><br>

## 3. Explication du code CSS
 - Dans le code HTML du site, la barre de navigation est faite avec des balises `<li>`. Cette barre de navigation possède cette forme grâce aux [flexbox](https://developer.mozilla.org/fr/docs/Learn/CSS/CSS_layout/Flexbox), c'est un attribut beaucoup plus simple à utiliser que les tableaux.
 - Le webkit scrollbar permet de modifier la barre de défilement, celle-ci est cachée, malheureusement, cette modification fonctionne uniquement sur le navigateur google chrome.
