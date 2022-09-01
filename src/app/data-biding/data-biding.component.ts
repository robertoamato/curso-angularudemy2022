import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {
 public nome:string = "dener";
 public idade:number = 39;
 public maisUm:number = 1;

 public negar : boolean = false;
 public srcImage : string = "https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg";
 public imagem : string = "proprety blinding"
 public teste : string = "titulo"

 public position : {x: number, y: number } = { x: 0, y: 0 };

  constructor() { }

  ngOnInit(): void { }

public alertaInfo(valor : any){
  console.log(valor);

}
  public mouseMoveTeste(valor:any){
    
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;


  }


}
