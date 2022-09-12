import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {
  public valor : boolean = true;
  public ngClass : string ="ngClass";
  public ngStyle : string ="ngStyle";
  public heightPx: string ="heighPx";
  public backgroundColor = "backgroundColor"
  public list: Array <{nome: string }> = [];
  public nome: string ="";
  constructor() { }

  ngOnInit(): void {

    setInterval( ()=>{
    if(this.valor){
      this.valor=false;
    }else{
        this.valor=true;

      }
      if(this.heightPx == "20px"){
        this.heightPx= "50px";
        this.backgroundColor="blue";
      }else {
        this.heightPx ="20px";
        this.backgroundColor="red";
      }

    },2000);
    
    
  }
  public salvar() {
    this.list.push({ nome: this.nome });
    this.nome ="";
    
  }

}
