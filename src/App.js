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
	/**
	 * Retourne un élément div contenant le bon nombre de caracteres
	 * La ligne peut également être vide
	 * @param {string} caractere Le caractere à utiliser
	 * @param {number} taille La taille finale de la ligne
	 * @param {HTMLElement} vide Un élément div
	 */
	static ligne(caractere, taille, vide) {
		var resultat = document.createElement("div");

		if (taille === 1) {
			resultat.innerHTML = caractere;
			return resultat;
		}
		let html = "";
		if (vide === true) {
			html += caractere;
			for (let i = 0; i < taille - 2; i += 1) {
				html += " "
			}
			html += caractere;
		} else {
			for (let i = 0; i < taille; i += 1) {
				html += caractere;
			}
		}
		resultat.innerHTML = html;
		return resultat;
	}
	static rangee() {
		//	<div class="tableau">
		//		<div>*****</div>
		//	</div>
		var app = document.getElementById("app");
		var tableau = app.appendChild(document.createElement("div"));
		tableau.classList.add("tableau");
		var ligne = tableau.appendChild(this.ligne(this.caractere, this.taille, false));
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
			var ligne = tableau.appendChild(this.ligne(this.caractere, this.taille, false));
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
			var ligne = tableau.appendChild(this.ligne(this.caractere, j+1, false));
		}
	}
	static rangeeVide() {
		//	<div class="tableau">
		//		<div>*   *</div>
		//	</div>
		var app = document.getElementById("app");
		var tableau = app.appendChild(document.createElement("div"));
		tableau.classList.add("tableau");
		tableau.appendChild(this.ligne(this.caractere, this.taille, true));
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
		tableau.appendChild(this.ligne(this.caractere, 1));
		for (let i = 1; i < this.taille - 1; i += 1) {
			var ligne = tableau.appendChild(this.ligne(" ", 1));
		}
		tableau.appendChild(this.ligne(this.caractere, 1));
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
		tableau.appendChild(this.ligne(this.caractere, this.taille, false));
		for (let j = 0; j < this.taille - 2; j += 1) {
			tableau.appendChild(this.ligne(this.caractere, this.taille, true));
		}
		tableau.appendChild(this.ligne(this.caractere, this.taille, false));
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
		tableau.appendChild(this.ligne(this.caractere, 1));
		for (let j = 1; j < this.taille - 1; j += 1) {
			tableau.appendChild(this.ligne(this.caractere, j + 1, true));
		}
		tableau.appendChild(this.ligne(this.caractere, this.taille));
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
