import { Component } from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  pokeList: Array<any> = [];

   page: number = 0;

  constructor(private pokeService: PokeService) {
    this.setData() 
    // pokeService.getList().subscribe((res:any)=>{

    //   this.pokeList = res.results;
    //   // console.log(res);
    // })
  }

  setData(){
    this.pokeService.getList(this.page).subscribe((res:any)=>{
      this.pokeList = res.results;
    })
  }

  nextPage(){
    this.page += 9

    this.setData()
  }

  prevPage(){
    this.page -= 9
    // this.pokeService.getList(this.page).subscribe((res:any)=>{
    //   this.pokeList = res.results;
    // })
    this.setData()
  }
}
