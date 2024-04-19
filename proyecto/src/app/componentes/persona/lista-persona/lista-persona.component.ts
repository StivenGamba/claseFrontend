import { Component, OnInit } from '@angular/core';
import { persona } from '../../../interfaces/persona';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-persona',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-persona.component.html',
  styleUrl: './lista-persona.component.css'
})

export class ListaPersonaComponent implements OnInit {
  listaPersona: persona[] = [
    {
      idpersona: 1,
      idetificacion: 123456,
      primernombre: "Stiven",
      segundonombre: "Nicolás",
      primerapellido: "Gamba",
      segundoapellido: "Robayo"
    }
  ];
  ngOnInit(): void {

  }
}
