import { Input, Component } from "@angular/core";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.scss"],
})
export class NotificationComponent {
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
  videos: any[] = [
    { src: "path/to/video1.mp4" },
    { src: "path/to/video2.mp4" },
    { src: "path/to/video3.mp4" },
  ];
}

export interface IAlert {
  id: number;
  type: string;
  message: string;
  icon?: string;
}
