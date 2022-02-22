import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  titulo = 'Registro';
  estado = 'esperando';
  nombre: string = '';
  correo: string = '';
  contra: string = '';

  registrar() {
    if (
      this.nombre == null ||
      this.nombre == undefined ||
      this.nombre.trim() == ''
    ) {
      this.estado = 'nombre vacio';
      return;
    }
    if (this.correo == null || this.correo == undefined) {
      this.estado = 'correo vacio';
      return;
    }

    if (
      this.contra == null ||
      this.contra == undefined ||
      this.contra.trim() == ''
    ) {
      this.estado = 'contraseña vacia';
      return;
    }
    this.estado = 'registrado';
  }
}
