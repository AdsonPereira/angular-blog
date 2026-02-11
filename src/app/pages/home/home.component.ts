import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles = dataFake;
  mainArticle = this.articles[0];
  otherArticles = this.articles.slice(1);
 

  ngOnInit(): void {
  }

}
