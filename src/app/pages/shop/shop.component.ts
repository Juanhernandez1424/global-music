import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent {
  static cartasData = [
    {
      imagen: './assets/imagenes/guitars/bcrich.jpg',
      nombre: 'Guitarra',
      marca: 'Bc Rich',
      modelo: 'Beast Avenge',
      precio: 1000000,
      color: 'Negro',
      categoria: 'guitarra electrica',
      cantidad: '2',
      instrumento: 'cuerdas',
    },
    {
      imagen: './assets/imagenes/guitars/bcrichstealth.jpg',
      nombre: 'Guitarra',
      marca: 'Bc Rich',
      modelo: 'Stealth',
      precio: 1000000,
      color: 'Negro',
      categoria: 'guitarra electrica',
      cantidad: '2',
      instrumento: 'cuerdas',
    },
    {
      imagen: './assets/imagenes/guitars/jacksonjs32.jpg',
      nombre: 'Guitarra',
      marca: 'Jackson',
      modelo: 'JS32',
      precio: 1000000,
      color: 'Negro',
      categoria: 'guitarra electrica',
      cantidad: '2',
      instrumento: 'cuerdas',
    },
    {
      imagen: './assets/imagenes/guitars/jacksonsl2mg.jpg',
      nombre: 'Guitarra',
      marca: 'Jakcson',
      modelo: 'SL2MG',
      precio: 1000000,
      color: 'Naranja',
      categoria: 'guitarra electrica',
      cantidad: '2',
      instrumento: 'cuerdas',
    },
    {
      imagen: './assets/imagenes/guitars/deanrazor.jpg',
      nombre: 'Guitarra',
      marca: 'Dean',
      modelo: 'Razorback',
      precio: 1000000,
      color: 'Blanco',
      categoria: 'guitarra electrica',
      cantidad: '2',
      instrumento: 'cuerdas',
    },
    {
      imagen: './assets/imagenes/guitars/deanexile.jpg',
      nombre: 'Guitarra',
      marca: 'Dean',
      modelo: 'Exile',
      precio: 1000000,
      color: 'Negro',
      categoria: 'guitarra electrica',
      cantidad: '2',
      instrumento: 'cuerdas',
    },
    {
      imagen: './assets/imagenes/guitars/schecterdemon.jpg',
      nombre: 'Guitarra',
      marca: 'Schecter',
      modelo: 'Demon',
      precio: 1000000,
      color: 'Negro',
      categoria: 'guitarra electrica',
      cantidad: '2',
      instrumento: 'cuerdas',
    },
    {
      imagen: './assets/imagenes/guitars/schectersunset6.jpg',
      nombre: 'Guitarra',
      marca: 'Schecter',
      modelo: 'Sunset',
      precio: 1000000,
      color: 'Negro',
      categoria: 'guitarra electrica',
      cantidad: '2',
      instrumento: 'cuerdas',
    },
    {
      imagen: './assets/imagenes/bass/cort-element.jpg',
      nombre: 'Bajo',
      marca: 'Cort',
      modelo: 'B5 Element',
      precio: 1000000,
      color: 'Rojo',
      categoria: 'bajo electrico',
      cantidad: '2',
      instrumento: 'cuerdas',
    },
    {
      imagen: './assets/imagenes/bass/cort-dlx-v.jpg',
      nombre: 'Bajo',
      marca: 'Cort',
      modelo: 'DLX V Plus',
      precio: 1000000,
      color: 'Madera',
      categoria: 'bajo electrico',
      cantidad: '2',
      instrumento: 'cuerdas',
    },
    {
      imagen: './assets/imagenes/bass/fender-squier.jpg',
      nombre: 'Bajo',
      marca: 'Fender',
      modelo: 'Squier',
      precio: 1000000,
      color: 'Negro-Amarillo-Blanco',
      categoria: 'bajo electrico',
      cantidad: '2',
      instrumento: 'cuerdas',
    },
    {
      imagen: './assets/imagenes/drums/ludwing-accent-fuse.jpg',
      nombre: 'Bateria',
      marca: 'Ludwing',
      modelo: 'Accent Fuse',
      precio: 1000000,
      color: 'Negro',
      categoria: 'bateria',
      cantidad: '2',
      instrumento: 'percusion',
    },
    {
      imagen: './assets/imagenes/drums/medeli-dd638dx.jpg',
      nombre: 'Bateria Electónica',
      marca: 'Medeli',
      modelo: 'DD638DX',
      precio: 1000000,
      color: 'Negro',
      categoria: 'bateria electronica',
      cantidad: '2',
      instrumento: 'percusion',
    },
    {
      imagen: './assets/imagenes/vientos/conn-as651.jpg',
      nombre: 'Saxofón',
      marca: 'Conn',
      modelo: 'AS651',
      precio: 1000000,
      color: 'Dorado',
      categoria: 'safoxofon',
      cantidad: '2',
      instrumento: 'vientos',
    },
  ];

  cartasData = ShopComponent.cartasData;

  constructor(private router: Router) {}

  productSpecifications(index: number) {
    this.router.navigate(['/producto', index]);
  }
}
