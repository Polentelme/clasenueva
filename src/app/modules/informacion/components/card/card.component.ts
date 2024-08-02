import { Component } from '@angular/core';
import { Card } from 'src/app/models/card';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
   // definimos propiedad publica como info del tipo ARRAY
  public info: Card[];

  constructor(){
    this.info = [ 
   {
    idcard: "1", 
    titulo: "mandarinas",
    descripcion: "son naranjas y de otoño",
    imagen: "https://www.frutality.es/wp-content/uploads/mandarina.png",
    alt: "imagen de una mandarina"
   },
   {
    idcard: "2",
    titulo: "manzana",
    descripcion: "son rojas o verdes",
    imagen: "https://www.recetasnestlecam.com/sites/default/files/2022-04/tipos-de-manzana-royal-gala.jpg",
    alt: "imagen de una manzana"
 
   },
   {
    idcard: "3",
    titulo: "banana",
    descripcion: "son amarillas",
    imagen: "https://as2.ftcdn.net/v2/jpg/00/83/65/69/1000_F_83656989_WwIOKn9UJNhMIByyojqarTfPypS4zUTM.jpg",
    alt: "imagen de una banana"
   }
    ]
  }
}





