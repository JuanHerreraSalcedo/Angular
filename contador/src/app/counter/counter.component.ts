import { Component } from "@angular/core";


@Component({
    selector: 'app-contador',
    templateUrl: "./counter.component.html",
    styleUrls: ["./counter.component.css"],
})

export class CounterComponent {
    // Titulo = 'contador';
    // nombre: string = "Juan"
    contador: number = 0;

    handleCount( value: number){
        // console.log('value')
       this.contador = value++;
    }

    disCount( Value:number){
        this.contador = Value--;
    }
}