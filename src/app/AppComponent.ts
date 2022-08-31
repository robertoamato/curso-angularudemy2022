import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  {{valor}}
  <button (click)="adicionar()">Adicionar</button>
  <router-outlet></router-outlet> 
    
  `
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked {
  public valor: number = 1;
 
 
  constructor() { }

  public adicionar(): number{
    return this.valor += 1;


  }
 

  ngAfterViewChecked(): void {
    console.log ("ngAfterViewChecked");
  }
  ngAfterContentChecked(): void {
    console.log("gAfterContentChecked");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngOnInit(): void {
    console.log("ngOnInit");

  }
}
