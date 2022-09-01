import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {
 public nome:string = "dener";
 public idade:number = 39;
 public maisUm:number = 39;

 public negar : boolean = false;
 public srcImage : string = "https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg";
 public imagem : string = "proprety blinding"
 public teste : string = "titulo"
  constructor() { }

  ngOnInit(): void {
  }

}
