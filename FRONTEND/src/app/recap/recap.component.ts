import { Component, OnInit, Input } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})

export class RecapComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

  @Input() utilisateur : Utilisateur = new Utilisateur();
}
