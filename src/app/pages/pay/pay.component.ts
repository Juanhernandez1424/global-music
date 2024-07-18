import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrl: './pay.component.css',
})
export class PayComponent {
  // Trar nombre del cliente a la tarjeta en tiempo real
  @ViewChild('nameCardBefore') nameCardBefore!: ElementRef;
  @ViewChild('nameCardAfter') nameCardAfter!: ElementRef;

  inputNameCard() {
    let nombre = this.nameCardBefore.nativeElement.value.toUpperCase();

    if (this.nameCardBefore.nativeElement.value !== '') {
      this.nameCardAfter.nativeElement.value = nombre;
    }
  }

  // Traer número de tarjeta en tiempo real
  @ViewChild('numberCardBefore') numberCardBefore!: ElementRef;
  @ViewChild('numberCardAfter') numberCarAfter!: ElementRef;
  @ViewChild('visaLogo') visaLogo!: ElementRef;
  @ViewChild('masterCardLogo') masterCardLogo!: ElementRef;

  inputNumberCard() {
    if (this.numberCardBefore.nativeElement.value !== '') {
      this.numberCarAfter.nativeElement.value =
        this.numberCardBefore.nativeElement.value;

      let primerDigito = this.numberCardBefore.nativeElement.value.substring(
        0,
        1
      );

      if (primerDigito == '4') {
        this.visaLogo.nativeElement.style.display = 'block';
        this.masterCardLogo.nativeElement.style.display = 'none';
      } else if (primerDigito == '5') {
        this.masterCardLogo.nativeElement.style.display = 'block';
        this.visaLogo.nativeElement.style.display = 'none';
      } else {
        this.visaLogo.nativeElement.style.display = 'none';
        this.masterCardLogo.nativeElement.style.display = 'none';
      }
    }
  }

  @ViewChild('dateBefore') dateBefore!: ElementRef;
  @ViewChild('dateAfter') dateAfter!: ElementRef;

  mostrarFecha() {
    if (this.dateBefore.nativeElement.value !== '') {
      this.dateAfter.nativeElement.value = this.dateBefore.nativeElement.value;
    }
  }

  @ViewChild('inputCvv') inputCvv!: ElementRef;
  @ViewChild('cardFront') cardFront!: ElementRef;
  @ViewChild('cardBack') cardBack!: ElementRef;

  backCard() {
    this.cardFront.nativeElement.parentElement.classList.add('flipped');
  }

  frontCard() {
    this.cardBack.nativeElement.parentElement.classList.remove('flipped');
  }
}
