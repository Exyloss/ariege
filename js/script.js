$(".recette").hide();
$(".voir_plus").on("click",function() {
	if(this.innerHTML=="Voir plus") {
		$(this).html("Voir moins");
		$(this).prev().show(1000);
	} else if(this.innerHTML=="Voir moins") {
		$(this).html("Voir plus");
		$(this).prev().hide(1000);
		
	}
	
});

function darkTheme() {
	if($("#style").attr("href") == "style.css") {
		$("#style").attr("href","style2.css");
	} else {
		$("#style").attr("href","style.css");
	};
};


function formEnvoi() {
	const mail = $('#mail').val();
	const name = $('#name').val();
	const mdp = $("#password").val();
	const aniv = $('#birthday').val();
	const qualite = $("input[name='title']:checked").val();
	const nat = $("option:checked").val();
	alert("Pseudo : "+name+"\nCourriel : "+mail+"\nMot de passe : "+mdp+"\nQualité : "+qualite+"\nDate de naissance : "+aniv+"\nNationalité : "+nat);

};

function formEnvoi2() {
	let msg = $("#msg").val();
	alert("Votre message : \n"+msg);
};


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
