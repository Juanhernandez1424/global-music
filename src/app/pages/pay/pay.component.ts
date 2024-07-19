import { Component, ElementRef, ViewChild } from '@angular/core';
import { error } from 'node:console';

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
  @ViewChild('numberCardAfter') numberCardAfter!: ElementRef;
  @ViewChild('visaLogo') visaLogo!: ElementRef;
  @ViewChild('masterCardLogo') masterCardLogo!: ElementRef;

  inputNumberCard() {
    if (this.numberCardBefore.nativeElement.value !== '') {
      this.numberCardAfter.nativeElement.value =
        this.numberCardBefore.nativeElement.value;

      let cardNumber: string = '';
      const cardValue = this.numberCardAfter.nativeElement.value.replace(
        /\s+/g,
        ''
      );

      for (let i = 0; i < cardValue.length; i++) {
        if (i > 0 && i % 4 == 0) {
          cardNumber += '   ';
        }

        cardNumber += cardValue[i];
      }

      this.numberCardAfter.nativeElement.value = cardNumber;

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

  // Traer mes de tarjeta en tiempo real
  @ViewChild('dateMonthBefore') dateMonthBefore!: ElementRef;
  @ViewChild('dateYearBefore') dateYearBefore!: ElementRef;
  @ViewChild('dateMonthAfter') dateMonthAfter!: ElementRef;
  @ViewChild('dateYearAfter') dateYearAfter!: ElementRef;

  inputDateMonth() {
    if (this.dateMonthBefore.nativeElement.value !== '') {
      this.dateMonthAfter.nativeElement.value =
        this.dateMonthBefore.nativeElement.value;
    }
  }

  inputDateYear() {
    if (this.dateYearBefore.nativeElement.value !== '') {
      this.dateYearAfter.nativeElement.value =
        this.dateYearBefore.nativeElement.value;
    }
  }

  // Traer año de tarjeta en tiempo real
  @ViewChild('inputCvv') inputCvv!: ElementRef;
  @ViewChild('cardFront') cardFront!: ElementRef;
  @ViewChild('cardBack') cardBack!: ElementRef;

  backCard() {
    this.cardFront.nativeElement.parentElement.classList.add('flipped');
  }

  frontCard() {
    this.cardBack.nativeElement.parentElement.classList.remove('flipped');
  }

  //Validación de datos

  date: Date = new Date();

  mes = this.date.getMonth() + 1;
  año = this.date.getFullYear();
  añoCard = this.año.toString().slice(-2);

  pay() {
    if (
      this.validarNombre() &&
      this.validarNumeroTarjeta() &&
      this.validarFecha() &&
      this.validarCvv()
    ) {
      alert('Pago exitoso');
    }
  }

  validarNombre(): boolean {
    if (
      this.nameCardBefore.nativeElement.value == '' &&
      this.nameCardAfter.nativeElement.value == ''
    ) {
      alert('Complete el nombre');
      return false;
    }
    return true;
  }

  validarNumeroTarjeta(): boolean {
    if (this.numberCardBefore.nativeElement.value < 16) {
      alert('Número de tarjeta incompleta');
      return false;
    }
    return true;
  }

  validarFecha(): boolean {
    if (
      this.dateYearBefore.nativeElement.value !== '' ||
      this.dateYearBefore.nativeElement.value !== ''
    ) {
      if (
        this.dateYearAfter.nativeElement.value < this.añoCard &&
        this.dateYearAfter.nativeElement.value < this.añoCard
      ) {
        alert('Año ya vencido');
        return false;
      } else {
        if (
          this.dateYearBefore.nativeElement.value < this.mes &&
          this.dateYearAfter.nativeElement.value < this.mes
        ) {
          alert('Mes vencido');
          return false;
        }
      }
    } else {
      alert('Fecha de vencimiento incompleta');
      return false;
    }
    return true;
  }

  validarCvv(): boolean {
    if (this.inputCvv.nativeElement.value < 3) {
      alert('Código de seguridad incompleto');
      return false;
    }
    return true;
  }
}
