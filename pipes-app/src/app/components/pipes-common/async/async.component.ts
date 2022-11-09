import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {

  img = new Promise((resolve, reject)=>{
    resolve("https://static1-es.millenium.gg/articles/4/50/60/4/@/278910-dva-overwatch-2-article_m-1.jpg")
  })
  constructor() { }

  ngOnInit(): void {
  }

}
