/**
 * @module App
 */
export default class App {
	/**
	 * Méthode qui demande les infos à l'usager et les mets 
	 * dans leur propriété de classe correspondante.
	 */
	static demanderInfos() {
		//===========================================================
		// Demander le caractère à l'usager
		//===========================================================
		this.caractere = prompt("Donnez un caractère", "*");
		// Si le caractère est null (l'usager a fait annuler), on utilise "*"
		if (this.caractere === null) {
			this.caractere = "*"
		}
		// Si la chaine a plus de 1 caractère, on ne garde que le premier
		if (this.caractere.length > 1) {
			this.caractere = this.caractere[0];
		}
		// Si le caractère est l'espace ou si la chaine est vide, on utilise "*"
		if (this.caractere === "" || this.caractere === " ") {
			this.caractere = "*"
		}

		//===========================================================
		// Demander la taille à l'usager
		//===========================================================
		this.taille = prompt("Quelle taille?", 5);
		// Si la taille est null (l'usager a fait annuler), on utilise "5"
		if (this.taille === null) {
			this.taille = "5"
		}
		// La taille doit être transformée en entier
		this.taille = parseInt(this.taille);
		// Si la taille donnée n'était pas un nombre (NaN), on utilise 5 
		if (isNaN(this.taille)) {
			this.taille = 5;
		}
		// Si la taille est plus grande que 15, on utilise 15
		if (this.taille > 15) {
			this.taille = 15;
		}
		// Si la taille est plus petite que 3, on utilise 3
		if (this.taille < 3) {
			this.taille = 3;
		}
	}
	static rangee() {
		//	<div class="tableau">
		//		<div>*****</div>
		//	</div>
		var app = document.getElementById("app");
		var tableau = app.appendChild(document.createElement("div"));
		tableau.classList.add("tableau");
		var ligne = tableau.appendChild(document.createElement("div"));
		var html = "";
		for (let i = 0; i < this.taille; i += 1) {
			html += this.caractere;
		}
		ligne.innerHTML = html;
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
		for (let i = 0; i < this.taille; i += 1) {
			var ligne = tableau.appendChild(document.createElement("div"));
			var html = "";
			html += this.caractere;
			ligne.innerHTML = html;
		}
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
		for (let j = 0; j < this.taille; j += 1) {
			var ligne = tableau.appendChild(document.createElement("div"));
			var html = "";
			for (let i = 0; i < this.taille; i += 1) {
				html += this.caractere;
			}
			ligne.innerHTML = html;
		}
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
		for (let j = 0; j < this.taille; j += 1) {
			var ligne = tableau.appendChild(document.createElement("div"));
			var html = "";
			for (let i = 0; i <= j; i += 1) {
				html += this.caractere;
			}
			ligne.innerHTML = html;
		}
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
		var ligne = tableau.appendChild(document.createElement("div"));
		var html = "";
		for (let i = 0; i < this.taille; i += 1) {
			html += this.caractere;
		}
		ligne.innerHTML = html;
		for (let j = 0; j < this.taille - 2; j += 1) {
			var ligne = tableau.appendChild(document.createElement("div"));
			var html = "";
			html += this.caractere
			for (let i = 0; i < this.taille - 2; i += 1) {
				html += " ";
			}
			html += this.caractere
			ligne.innerHTML = html;
		}
		var ligne = tableau.appendChild(document.createElement("div"));
		var html = "";
		for (let i = 0; i < this.taille; i += 1) {
			html += this.caractere;
		}
		ligne.innerHTML = html;
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
		var ligne = tableau.appendChild(document.createElement("div"));
		var html = "";
		html += this.caractere;
		ligne.innerHTML = html;
		for (let j = 0; j < this.taille - 2; j += 1) {
			var ligne = tableau.appendChild(document.createElement("div"));
			var html = "";
			html += this.caractere
			for (let i = 0; i < j; i += 1) {
				html += " ";
			}
			html += this.caractere
			ligne.innerHTML = html;
		}
		var ligne = tableau.appendChild(document.createElement("div"));
		var html = "";
		for (let i = 0; i < this.taille; i += 1) {
			html += this.caractere;
		}
		ligne.innerHTML = html;
	}
	static main() {
		var app = document.getElementById("app");
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
