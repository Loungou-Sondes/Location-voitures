import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  voitures = [
    {
      nom: 'Mahindra',
      image: 'voitures/mahindra.jpg',
      description: 'Une voiture confortable et pratique pour vos déplacements.'
    },
    {
      nom: 'Kia Picanto',
      image: 'voitures/kia-picanto.jpg',
      description: 'Une citadine économique, idéale pour la ville.'
    },
    {
      nom: 'Suzuki Dzire',
      image: 'voitures/suzuki-dzire.jpg',
      description: 'Une voiture fiable et confortable pour vos trajets.'
    },
    {
      nom: 'Hyundai i20',
      image: 'voitures/hyundai-i20.jpg',
      description: 'Une citadine moderne, confortable et agréable à conduire.'
    }
  ];

  voitureSelectionnee: any = null;

  afficherVoiture(voiture: any) {
    this.voitureSelectionnee = voiture;
  }

  fermerDetails() {
    this.voitureSelectionnee = null;
  }
}