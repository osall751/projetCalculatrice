import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tabBoutons = [
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["+/-", "0", ",", "="],
    ["/", "C", "", ""]
  ]
  operande = ""
  operateur = ""
  resultat = ""
  resulatOperation = 0

  calculer(value: any) {
    if (!isNaN(value)) {
      this.operande += value
      this.resultat = this.operande
    } else {
      if (value === '+' || value === '-' || value === '*' || value === '/') {
        this.gestionOperateurCalcul(value)
      }
      if (value === "=") {
        if (this.operateur === "+") {
          this.resulatOperation += Number.parseInt(this.operande)
        }
        if (this.operateur === "*") {
          this.resulatOperation *= Number.parseInt(this.operande)
        }
        if (this.operateur === "-") {
          this.resulatOperation -= Number.parseInt(this.operande)
        }
        if (this.operateur === "/") {
          this.resulatOperation /= Number.parseInt(this.operande)
        }
        this.resultat = this.resulatOperation + ""
      }
      if (value === "C") {
        this.operateur = ""
        this.resulatOperation = 0
        this.operande = ""
        this.resultat = ""
      }
    }
  }

  gestionOperateurCalcul(op: any) {
    this.operateur = op
    this.resulatOperation = Number.parseInt(this.operande)
    this.operande = ""
  }
}
