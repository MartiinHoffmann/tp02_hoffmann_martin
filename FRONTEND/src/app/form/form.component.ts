import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  utilisateur:Utilisateur = new Utilisateur();

  confirmPassword : string = "";
  valid : boolean = false;

click () {
  this.valid = true;
  console.log("click déclenché");
}

  ngOnInit(): void {
  }

}
