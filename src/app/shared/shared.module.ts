import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';



@NgModule({
  declarations: [NewcomponentComponent],
  imports: [CommonModule],
  exports:[NewcomponentComponent]
})
export class SharedModule { }
