//fonction  => affichage des étudiants 
function Affichage(liste){
	var obj = JSON.parse(liste);

	var table = document.getElementById('table');
	var firstTr = document.getElementById('firstTr');
	var firstTrParent = firstTr.parentNode;
	var myDiv = document.getElementsByTagName('divPrincipal');
	afficher.remove(); //supprime le boutton déclencheur
	
	for(var i = 0; i <= obj.Etudiant.length; i++){
		// je crée une balises <tr>
		var MyTr = document.createElement('tr');
		MyTr.id = 'myTr';
		//je crée des noeuds de texte qui contiennent chacun une information de l'étudiant
		var TextNode = [
			document.createTextNode(obj.Etudiant[i].numero),
			document.createTextNode(obj.Etudiant[i].prenom),
			document.createTextNode(obj.Etudiant[i].nom),
			document.createTextNode(obj.Etudiant[i].note),
			document.createTextNode(obj.Etudiant[i].age),
			document.createTextNode(obj.Etudiant[i].sexe),
			document.createTextNode(obj.Etudiant[i].ville),
		];
		//pour chaque information,je luis cré son propre <td>, à l'aide d'une boucle
		for(var c = 0; c <TextNode.length; c++){
			var MyTd = document.createElement('td');
			//dans <tr>, j'ajoute les <td> qui eux même contient chacun un noeud
			MyTd.appendChild(TextNode[c]);
			MyTr.appendChild(MyTd);
		}
		firstTr.insertBefore(MyTr, myDiv.lastChild);
	}
}

// fonction => rechercher un etudiant par son id
function recherch_etu(tab){
	var Mynum = window.prompt("Entrez un le numéro de carte de l'tudiant svp :");
	//parcourir le tableau pour rechercher si l'etudiant existe ou pas
	for(var j = 0; j <=obj.Etudiant.length; j++){
		if(obj.Etudiant[j].prenom == Mynum){
			var Etudiant_info = [
				obj.Etudiant[j].numero,
				obj.Etudiant[j].prenom,
				obj.Etudiant[j].nom,
				obj.Etudiant[j].note,
				obj.Etudiant[j].age,
				obj.Etudiant[j].ville
			];
		}
	}
	//je retourne le tableau contenant les informations de l'étudiant en question
	return Etudiant_info;
}

// fonction => supprimer un étudiant connaissant son numéro de carte
function supprimer(){
	var confirm = window.prompt('Entrez le numéro de l\'étudiant à supprimé');

	var confirmation = window.confirm("Etes vous sûre de bien vouloir supprimer l'étudiant dont le numéro est : "+confirm+" ?");
	if (confirmation == true){
		for(var m = 0; m < obj.Etudiant.length; m++){
			if(confirm == obj.Etudiant[m].numero){
				delete obj.Etudiant[m].numero;
				delete obj.Etudiant[m].prenom;
				delete obj.Etudiant[m].nom;
				delete obj.Etudiant[m].age;
				delete obj.Etudiant[m].note;
				delete obj.Etudiant[m].sexe;
				delete obj.Etudiant[m].villNaiss;
				alert('Etudiant supprimé avec succès !');	
			}
		}
		function Affichage(){
			for(var i = 0; i <= obj.Etudiant.length; i++){
				console.log(obj.Etudiant[i].prenom+' '+obj.Etudiant[i].nom);
			}
		}
		Affichage();
	}
}

// fonction => calcul de la moyenne d'age de tous les étudiants
function moyAge(e){
	var somme = 0; moyenne = 0;
	somme = parseInt(somme); moyenne = parseInt(moyenne);
	
	for(var m = 0; m <obj.Etudiant.length; m++){
		somme+=obj.Etudiant[m].age;
	}
	moyenne = somme/obj.Etudiant.length;
	return console.log('La moyenne d\'age des étudiant est  '+ parseInt(moyenne));
}

// fonction => plus jeune étudiant de la liste
function plusJeune(){
	var min = obj.Etudiant[0].age;

	for(var m = 0; m < obj.Etudiant.length; m++){
		
		if(obj.Etudiant[m].age <= min){
			min	= obj.Etudiant[m].age;
			var info = [
				obj.Etudiant[m].numero,
				obj.Etudiant[m].prenom,
				obj.Etudiant[m].nom,
				obj.Etudiant[m].age,
				obj.Etudiant[m].note,
				obj.Etudiant[m].sexe,
				obj.Etudiant[m].ville,
			];
		}	
	}
	alert('Le plus jeune étudiant est : \n\n'+info[1]+' '+info[2]+'\n'+
	    'Numéro : '+info[0]+'\n'+
	 	'Age : '+info[3]+' ans\n'+
	 	'Sexe : '+info[5]+'\n'+
	 	'Note : '+info[4]+'\n'+
	 	'Ville de naissance : '+info[6]);
}

//fonction => Trier les étudiants par ville de naissance
function trie(){
	//je commence par récupérer les villes d'abord
	var listeEtu = [];
	for (var i = 0; i < obj.Etudiant.length; i++) {
		var etu_ville = obj.Etudiant[i].ville;
		for(var j = 0; j < obj.Etudiant[i].length; j++){
			if (obj.Etudiant[j].ville == etu_ville) {
				listeEtu.push([
					obj.Etudiant[j].numéro,
					obj.Etudiant[j].prenom,
					obj.Etudiant[j].nom,
					obj.Etudiant[j].age,
					obj.Etudiant[j].sexe,
					obj.Etudiant[j].ville
				]);
			}
		}
	}
	console.log(listeEtu);
}

