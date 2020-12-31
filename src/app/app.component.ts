import { Component, ViewChild } from "@angular/core";
import { Slide } from "./carousel/carousel.interface";
import { AnimationType } from "./carousel/carousel.animations";
import { CarouselComponent } from "./carousel/carousel.component";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  @ViewChild(CarouselComponent, { static: true }) carousel: CarouselComponent;

  
  slides: Slide[] = [
    {
      caption: "This is wonderful",
      imgSrc:
        "https://picsum.photos/600/800",
      captionLink:'https://google.com'
    },
    {
      caption: "This is wonderful and beautiful",
      imgSrc:
        "https://picsum.photos/800/900",
        captionLink:'https://github.com'
    },
    {
      caption: "In The Wilderness",
      imgSrc:
     "https://picsum.photos/1000/800",
     captionLink:'https://udemy.com'
    },
    {
      caption: "This thing is just awesome",
      imgSrc:
        "https://picsum.photos/1000/700",
        captionLink:'https://facebook.com'
    }
  ];

  constructor() {}
}
