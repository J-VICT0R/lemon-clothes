import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  url:string = "../../../assets/img/clothes/man/";
  productsImg:string[] = Array.from({length: 6}, (_v, k) => k + 4)
    .map(n => `url('${this.url}man (${n}).jpg')`)

  constructor() { }

  ngOnInit(): void {
    console.log('HOME')
  }

}
