import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.sass'],
  animations: [
    trigger('horizontalExpand', [
      transition(':enter', [
        style({ width: '0%', opacity: 0 }),
        animate('1s', style({ width: '80%', opacity: 1 })),
      ]),
      transition('* => *', [
        animate('0.5s', keyframes([
          style({
            backgroundImage: 'linear-gradient(to right, red , yellow)',
            mixBlendMode: 'difference',
          }),
          style({
            transform: 'translateX(10%)',
          }),
          style({
            opacity: 0,
            backgroundImage: 'none',
            mixBlendMode: 'normal',
            transform: 'none'
          })
        ]))
      ])
    ]),
  ]
})
export class MainSliderComponent implements OnInit {

  constructor() { }

  url:string = "../../../../../assets/img/slide/";
  top3:string[] = Array.from({length: 3}, (_v, k) => k + 4)
    .map(n => `url('${this.url + n}.jpg')`)
  currentSlideUrl:string = this.top3[0]

  changeSlideAnim = false

  ngOnInit(): void {
  }

  changeSlide(_event, img: string): void {
    this.currentSlideUrl = img
    this.changeSlideAnim = !this.changeSlideAnim
  }

}
