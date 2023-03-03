import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = "";
  date:string = "";
  cardTitle:string = "";
  cardDescription:string = "";

  private id:string | null = "0"

  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = DataFake.filter(article => article.id == id)[0]

    this.photoCover = result.photoCover
    this.date = result.date
    this.cardTitle = result.title
    this.cardDescription = result.description
  }

}
