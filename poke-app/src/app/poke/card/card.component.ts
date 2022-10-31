import { Component, Input, OnInit } from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  info:any;

  url: string = ""

  constructor(private pokeService: PokeService) {
    // console.log('this.info')
   }

  ngOnInit(): void {
    // console.log('this.info')
    this.pokeService.getPokeData(this.info.name).subscribe((res: any) =>{
      // console.log(res.sprites.front_shiny); <- para llamar las url de las imagenes en la consola
      this.url = res.sprites.front_shiny; //<- prepara la api para luego llamar desde la card
    })
  }

}
