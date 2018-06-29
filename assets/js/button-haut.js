function nvxButton (){
	// selectionner la balise footer par l'id (getElementsByTagName ne fonctionne pas)
	var myfooter = document.getElementsByTagName('footer')[0];
	// crée un nouvel élément button
	var button = document.createElement('button');
	// ajoute une classe à l'attribut
	button.setAttribute('id', 'mybutton');
	button.setAttribute('name', 'remonter');
	// crée un nouvel élément i
    var icon = document.createElement('i');
    // ajoute l'attribut de la classe de fontawesome
    icon.setAttribute('class', 'far fa-arrow-alt-circle-up');
    // ajoute le noeud texte au nouveau div créé
    button.appendChild(icon);
	// crée un noeud à la fin de la liste des enfants d'un noeud parent spécifié (à l'élément id footer)
	myfooter.appendChild(button);
	};
$(document).on('click','#mybutton', function(){
	$('html, body').animate({scrollTop:0}, 500);
});
$(window).scroll(function() {
		// Sélectionne la page, quand tu scroll
		/* Act on the event */
		var montop = $(this).scrollTop();
		//montop est égale à cette élément, quand tu obtiens la position verticale actuelle de la barre de défilement quand tu scroll

			// console.log(montop);

			if(montop > 2){
			// Si myScrollTop est plus petit que montop
				$('.fa-arrow-alt-circle-up').show();
				// Sélectionne les paragraphes, prend leur css et change la couleur en rouge
			}else{
			// Ou autre
				$('.fa-arrow-alt-circle-up').hide();
				// Sélectionne les paragraphes, prend leur css et change la couleur en sinon
			}
			//myScrollTop = montop
			// J'indique myScrollTop est égale à la position verticale actuelle
	});



//Ne pas oublier d'appeler la fonction, sinon on la crée mais mais elle n'apparaitra pas.
nvxButton();


