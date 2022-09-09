import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition : boolean = true;
  public conditionClick : boolean = true;
  public list: Array <{ nome: string, idade : number }> = [
    { nome: "roberto ", idade: 39},
    { nome: "bruno", idade: 24 },
    { nome: "sheila", idade: 45},
    ];
    public ngSwitch: string ="ngSwitch";
    public nome: string ='roberto';
    public ngFor: String ="ngFor";
    public ngClass : string ="ngClass";

  constructor() { }

  ngOnInit(): void {
    setInterval ( () => {
      if(this.condition){
      this.condition = false;}
      else{
        this.condition = true;

      }

    }, 2000)
  }

    

   
  public desaparecer (){ 
    if (this.conditionClick) {
    this.conditionClick = false;
  } else{
      this.conditionClick = true;
    }
     } 

    
     public onclickAddList() {
      this.list.push({nome:"roberto" ,  idade:39});
    }

public  onClickEventList (event:MouseEvent )  {
  console.log(event);
} 

  }
 
