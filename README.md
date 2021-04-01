# Site web ariège
lien : https://exyloss.github.io 
<br><br>
Sommaire :
1. Liste des APIs utilisées
2. Explication du code Javascript
3. Explication du code HTML
4. Explication du code CSS

## 1. Les APIs utilisées
### 1. [JQuery](https://jquery.com/)<br>
JQuery a été utilisé pour simplifier le code javascript. Par exemple `document.getElementById("id")` s'écrit `$("#id")` en JQuery.<br><br>
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

