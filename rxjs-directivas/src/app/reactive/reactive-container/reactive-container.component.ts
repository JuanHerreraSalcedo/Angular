import { compileNgModule } from '@angular/compiler';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
// import { Observable, interval, filter, take, map, Subscription } from 'rxjs'; importaciones de RXJS
// import { take } from 'rxjs/operators';

@Component({
  selector: 'app-reactive-container',
  templateUrl: './reactive-container.component.html',
  styleUrls: ['./reactive-container.component.css']
})
export class ReactiveContainerComponent implements OnInit, OnDestroy{

  subscriptor: Subscription | null = null

  x:number =0
  y:number =0

  ngOnInit() {
    const obs = fromEvent<MouseEvent>(document.querySelector("#area")!, 'mousemove');

    this.subscriptor = obs.subscribe((ev)=>{



      console.log("evento");
      this.x = ev.clientX
      this.y = ev.clientY
    })

  }

  ngOnDestroy() {
  this.subscriptor?.unsubscribe();

  }
  // miIntervalo: Observable<number> = interval(1000).pipe(
  //   map(value =>value + 1 ),
  //   filter((value) => value%2 ===0),
  //   take(5)
  // );

  // // miSubscription: any 
  // miSubscription: Subscription | null = null
  // constructor() {

  //   // let numero = 0;

  //   // const miObservable = new Observable<number>((observer) => {
  //   //   setInterval(() => {
  //   //     console.log(numero);
  //   //     numero++;
  //   //     observer.next(numero);

  //   //     observer.complete();

  //   //     if( numero ==3){
  //   //       observer.error("Numero erroneo")

  //   //     }
  //   //   }, 1000);
  //   // });

  //   // // miObservable.subscribe(
  //   // //   (result) => {
  //   // //   console.log(result);
  //   // // },
  //   // //  (error) => {
  //   // //   console.error(error)
  //   // //  },
  //   // //  () => {
  //   // //   console.log('Observable completado')
  //   // //  }
    
  //   // // );

  //   // miObservable.subscribe({
  //   //   next: (result) => {
  //   //     console.log(result);
  //   //   },
  //   //   error: (error) => {
  //   //     console.error(error);
  //   //   },
  //   // })
  //  }

  // // ngOnInit(): void {

  // //   this.miIntervalo
  // //   .pipe(
  // //     take(4),
  // //     filter((value) =>  value %2 === 0)
  // //     )
  // //   .subscribe(value => console.log(value));
  // // }

  // ngOnInit(): void {
  //  this.miSubscription = this.miIntervalo.subscribe({
  //     next: (value) => console.log(value),
  //     complete: () => console.log("observable final"),
  //   });
  // }

  // ngOnDestroy(){

  //   this.miSubscription!.unsubscribe()

  //   console.log('Componente destruido');
  // }
}
