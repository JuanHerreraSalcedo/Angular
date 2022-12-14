import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"darkmode"
})
export class DarkModePipe implements PipeTransform {
    transform(value: boolean){

        if(value){

            return "bg-dark text-white"
        }else{
            return "bg-light text-dark"
        }
        return "Dark Mode desde Pipe";
    }
}