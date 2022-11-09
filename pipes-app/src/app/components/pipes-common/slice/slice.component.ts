import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slice',
  templateUrl: './slice.component.html',
  styleUrls: ['./slice.component.css']
})
export class SliceComponent implements OnInit {

  frutas = ['manzana', 'pera', 'mango', 'sandia', 'guayaba'];

  letras = 'abcdefg'
  constructor() { }

  ngOnInit(): void {
  }

}
