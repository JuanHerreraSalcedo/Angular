import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JSONComponent implements OnInit {

  persona = {
    nombre: "Juan Camilo",
    edad: 22,
    ocupacion: "Aprendiz de desarrollo"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
