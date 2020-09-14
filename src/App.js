/**
 * @module App
 */
export default class App {
	/**
	 * Méthode qui demande les infos à l'usager et les mets 
	 * dans leur propriété de classe correspondante.
	 */
	static demanderInfos() {
		// CODE TEMPORAIRE ##########################################
		this.caractere = "*";
		this.taille = 5;
		//###########################################################

		//===========================================================
		// Demander le caractère à l'usager
		//===========================================================

		// Si le caractère est null (l'usager a fait annuler), on utilise "*"

		// Si la chaine a plus de 1 caractère, on ne garde que le premier

		// Si le caractère est l'espace ou si la chaine est vide, on utilise "*"

		
		//===========================================================
		// Demander la taille à l'usager
		//===========================================================

		// Si la taille est null (l'usager a fait annuler), on utilise "5"

		// La taille doit être transformée en entier

		// Si la taille donnée n'était pas un nombre (NaN), on utilise 5 

		// Si la taille est plus grande que 15, on utilise 15

		// Si la taille est plus petite que 3, on utilise 3

	}
	static rangee() {
		//	<div class="tableau">
		//		<div>*****</div>
		//	</div>
		var app = document.getElementById("app");
		var tableau = app.appendChild(document.createElement("div"));
		tableau.classList.add("tableau");
	}
	static colonne() {
		//	<div class="tableau">
		//		<div>*</div>
		//		<div>*</div>
		//		<div>*</div>
		//		<div>*</div>
		//		<div>*</div>
		//	</div>
		var app = document.getElementById("app");
		var tableau = app.appendChild(document.createElement("div"));
		tableau.classList.add("tableau");
	}
	static carre() {
		//	<div class="tableau">
		//		<div>*****</div>
		//		<div>*****</div>
		//		<div>*****</div>
		//		<div>*****</div>
		//		<div>*****</div>
		//	</div>
		var app = document.getElementById("app");
		var tableau = app.appendChild(document.createElement("div"));
		tableau.classList.add("tableau");
	}
	static triangle() {
		//	<div class="tableau">
		//		<div>*</div>
		//		<div>**</div>
		//		<div>***</div>
		//		<div>****</div>
		//		<div>*****</div>
		//	</div>
		var app = document.getElementById("app");
		var tableau = app.appendChild(document.createElement("div"));
		tableau.classList.add("tableau");
	}
	static carreVide() {
		//	<div class="tableau">
		//		<div>*****</div>
		//		<div>*   *</div>
		//		<div>*   *</div>
		//		<div>*   *</div>
		//		<div>*****</div>
		//	</div>
		var app = document.getElementById("app");
		var tableau = app.appendChild(document.createElement("div"));
		tableau.classList.add("tableau");
	}
	static triangleVide() {
		//	<div class="tableau">
		//		<div>*</div>
		//		<div>**</div>
		//		<div>* *</div>
		//		<div>*  *</div>
		//		<div>*****</div>
		//	</div>
		var app = document.getElementById("app");
		var tableau = app.appendChild(document.createElement("div"));
		tableau.classList.add("tableau");
	}
	/**
	 * Méthode qui permet d'attendre le chargement de la page avant d'éxécuter le script principal
	 * @returns undefined Ne retourne rien
	 */
	static init() {
		window.addEventListener("load", () => {
			this.demanderInfos();
			this.rangee();
			this.colonne();
			this.carre();
			this.triangle();
			this.carreVide();
			this.triangleVide();
		});
	}
}
App.init();
