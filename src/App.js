/**
 * @module App
 */
export default class App {
	static main() {
		document.getElementById("btnDessiner").addEventListener("click", e => {
			this.dessiner();
		});
		document.getElementById("formes").addEventListener("change", e => {
			this.dessiner();
		});
	}
	static dessiner() {
		this.supprimerTableaux();
		this.demanderInfos();
		this.rangee();
		this.colonne();
		this.carre();
		this.triangle();
		this.rangeeVide();
		this.colonneVide();
		this.carreVide();
		this.triangleVide();
	}
	static supprimerTableaux() {
		var tableaux = Array.from(document.querySelectorAll(".tableau"));
		for (let i = 0; i < tableaux.length; i += 1) {
			let tableau = tableaux[i];
			tableau.parentElement.removeChild(tableau);
		}
	}
	/**
	 * Méthode qui demande les infos à l'usager et les mets 
	 * dans leur propriété de classe correspondante.
	 */
	static demanderInfos() {
		// Récupérer le formulaire
		var formes = document.getElementById("formes");
		//===========================================================
		// Demander le caractère à l'usager
		//===========================================================
		this.caractere = formes.inCaractere.value;
		// Si le caractère est l'espace ou si la chaine est vide, on utilise "*"
		if (this.caractere === "" || this.caractere === " ") {
			this.caractere = "*"
		}

		//===========================================================
		// Demander la taille à l'usager
		//===========================================================
		this.taille = formes.inTaille.valueAsNumber;
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
	static rangeeVide() {
		//	<div class="tableau">
		//		<div>*   *</div>
		//	</div>
		var app = document.getElementById("app");
		var tableau = app.appendChild(document.createElement("div"));
		tableau.classList.add("tableau");
		var ligne = tableau.appendChild(document.createElement("div"));
		var html = "";
		html += this.caractere;
		for (let i = 1; i < this.taille - 1; i += 1) {
			html += " ";
		}
		html += this.caractere;
		ligne.innerHTML = html;
	}
	static colonneVide() {
		//	<div class="tableau">
		//		<div>*</div>
		//		<div> </div>
		//		<div> </div>
		//		<div> </div>
		//		<div>*</div>
		//	</div>
		var app = document.getElementById("app");
		var tableau = app.appendChild(document.createElement("div"));
		tableau.classList.add("tableau");
		var ligne = tableau.appendChild(document.createElement("div"));
		ligne.innerHTML = this.caractere;
		for (let i = 1; i < this.taille - 1; i += 1) {
			var ligne = tableau.appendChild(document.createElement("div"));
			ligne.innerHTML = " ";
		}
		ligne.innerHTML = this.caractere;

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
	/**
	 * Méthode qui permet d'attendre le chargement de la page avant d'éxécuter le script principal
	 * @returns undefined Ne retourne rien
	 */
	static init() {
		window.addEventListener("load", () => {
			this.main();
		});
	}
}
App.init();
