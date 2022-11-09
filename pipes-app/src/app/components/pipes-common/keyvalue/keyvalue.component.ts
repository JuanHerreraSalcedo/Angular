import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyvalue',
  templateUrl: './keyvalue.component.html',
  styleUrls: ['./keyvalue.component.css']
})
export class KeyvalueComponent implements OnInit {

  persona = {
    nombre: "Juan Camilo",
    edad: 22,
    ocupacion: "Aprendiz de desarrollo"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
