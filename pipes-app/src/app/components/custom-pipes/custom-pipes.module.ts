import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomContainerComponent } from './custom-container/custom-container.component';
import { DarkModePipe } from 'src/app/shared/pipes/dark-mode.pipe';



@NgModule({
  declarations: [
    CustomContainerComponent, DarkModePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [CustomContainerComponent]
})
export class CustomPipesModule { }
