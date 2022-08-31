import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <app-title *ngIf="destruir"></app-title>
  <br>
  <button (click)="DestruirComponent()">Destruir Componente</button>
  <router-outlet></router-outlet> 
    
  `
})
export class AppComponent implements OnInit {
  
 
  constructor() { }

  
 

  
  ngOnInit(): void { }


  public destruir: boolean  = true;

  public DestruirComponent(){
    this.destruir = false;


  }


}
