	var Liste2 = '{"Etudiant" :['+'{"numero":"FR451", "nom":"Talla","prenom":"Serigne", "note":"10","age":"22","sexe":"Mâle", "ville":"Thiès"},'+
	'{"numero":"RK321", "nom":"Diop","prenom":"Babacar", "note":"17","age":"20","sexe":"Mâle", "ville":"Dakar"},'+
	'{"numero":"RK321", "nom":"Diop","prenom":"Babacar", "note":"17","age":"20","sexe":"Mâle", "ville":"Dakar"},'+
	'{"numero":"VF568", "nom":"Mbengue","prenom":"Fama", "note":"12","age":"21","sexe":"Femelle", "ville":"Kaolack"},'+
	'{"numero":"P8985", "nom":"Ndiaye","prenom":"Aziz", "note":"05","age":"18","sexe":"Mâles", "ville":"Fatick"},'+
	'{"numero":"BX908", "nom":"Bèye","prenom":"Fatou", "note":"11","age":"25","sexe":"Femelle", "ville":"Dakar"},'+
	'{"numero":"DD120", "nom":"Koulibali","prenom":"Adama", "note":"19","age":"24","sexe":"Non précisé", "ville":"Thiès"}]}';

	var obj = JSON.parse(Liste2);

	var afficher = document.getElementById('On_aff');
	
	afficher.addEventListener('click', Affichage);
	function Affichage(){
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
	var appartient = false;
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
var supp = document.getElementById('On_Supp');
supp.addEventListener('click', supprimer);
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
var moyeAge = document.getElementById('On_MoyAge');
moyeAge.addEventListener('click',moyAge);
	function moyAge(e){
		var somme =0; moyenne = 0;

		for(var m = 0; m < obj.Etudiant.length; m++){
			somme += eval(obj.Etudiant[m].age);
		}
		moyenne = somme/obj.Etudiant.length;
		return alert('La moyenne d\'age des étudiant est  '+parseInt(moyenne)+' ans');
	}

// fonction => plus jeune étudiant de la liste
var plJ = document.getElementById('On_PlusJeune');

plJ.addEventListener('click',plusJeune)
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

// fonction => nomber d'occurence d'un étudiant connaissant son numéro de carte
var occu = document.getElementById('On_Occu');

occu.addEventListener('click', occurence);
function occurence(e){
var occ = window.prompt('Entrez le numéro de carte : ');
var nbre = 0;

	for(var b = 0; b <obj.Etudiant.length; b++){
		if( occ == obj.Etudiant[b].numero){
			nbre++;
		}
	}
	return alert("Le nombre d'occurence de l'étudiant est : "+nbre);
}

// fonction => Liste des etudiants nées dans une ville donnée
var ListVille = document.getElementById('On_TriefVille');

ListVille.addEventListener('click', listeNaissVille);
	function listeNaissVille(){
		// document.write('Liste des etudiants née à '+ ville+": ");
		var ville = window.prompt('Entrez une ville pour trier les étudiants qui sont nées :');
		for(var b = 0; b <=obj.Etudiant.length; b++){
			if( ville == obj.Etudiant[b].ville){
				alert(obj.Etudiant[b].prenom +" "+obj.Etudiant[b].nom+" née à "+obj.Etudiant[b].ville);
			}
		}
	}

// fonction => modifier une valeur
var modif = document.getElementById('On_Modif');

modif.addEventListener('click',modifier);
function modifier(){
	var numb = window.prompt('Entrez le numéro de l\'étudiant à modifier : ');
	// var test = recherch_etu(obj, numb);
	for(var b = 0; b <obj.Etudiant.length; b++){
		if( numb == obj.Etudiant[b].numero){
			document.getElementById('numbr').value = obj.Etudiant[b].numero;
			document.getElementById('prenom').value= obj.Etudiant[b].prenom;
			document.getElementById('nom').value= obj.Etudiant[b].nom;
			document.getElementById('note').value = obj.Etudiant[b].note;
			document.getElementById('age').value = obj.Etudiant[b].age;
			document.getElementById('sexe').options[0].label = obj.Etudiant[b].sexe;
			document.getElementById('villNaiss').value = obj.Etudiant[b].ville
	
			var boutton = document.getElementById('button');
			button.innerHTML = "Enregistrer les modifications";
		}
		else{
			continue;
			return;
		}
	}
	boutton.addEventListener('click', function(){alert('Modifications enregistrées ! ')});

	//ensuite on remplace les données par les précèdentes
}	
 //fonction => Trier les étudiants par ville de naissance
 var triParVille = document.getElementById('On_TrieParVilleNaiss');
 triParVille.addEventListener('click', function(){
 	alert('OK');
 });
 function trie(){
	//je commence par récupérer les villes d'abord, avec une fonction 
	var listeVilles = ["Dakar","Thiès","Fatick","Kaolack"];
	for (var i = 0; i < listeVilles.length; i++) {
		for(var k=0; k < obj.Etudiant.length; k++ ){
			if(listeVilles[i] == obj.Etudiant[k].ville){
				console.log(obj.Etudiant[k].ville);
			}
			else{
				continue;
			}
		}
		// var villeTempon = obj.Etudiant[i].ville;
	// var n = listeVilles.includes(villeTempon)

		// var variable = (listeVilles.includes(villeTempon,!i)) ? true : false ;
		// if (variable == true) {
		// 	alert(obj.Etudiant[i].ville);
		// }
		// else{
		// 	continue;
		// }

	}
}