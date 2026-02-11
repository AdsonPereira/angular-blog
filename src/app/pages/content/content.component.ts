import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = ""
  contentTitle:string = ""
  contentDescription:string = ""
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.id = value.get("id")
      this.setValuesToComponent(this.id)
    })
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.find(article => article.id === id)

    if (!result) {
      this.contentTitle = "Conteúdo não encontrado"
      this.contentDescription = "Não foi possível localizar esse artigo. Volte para a página inicial e escolha outro conteúdo."
      this.photoCover = ""
      return
    }

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
  }

}
