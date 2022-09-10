import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <app-data-biding></app-data-biding>
  <router-outlet></router-outlet> 
  <app-diretivas-estruturais></app-diretivas-estruturais>
  <app-diretivas-atributos></app-diretivas-atributos>  
  `,
})
export class AppComponent implements OnInit {
  
 
  constructor() { }

  
 

  
  ngOnInit(): void { }


  


  


}
