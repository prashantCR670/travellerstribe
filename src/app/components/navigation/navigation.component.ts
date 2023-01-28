import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit {
  showParagraph1: boolean = false;
  showParagraph2: boolean = false;
  showParagraph3: boolean = false;
  showParagraph4: boolean = false;
  constructor() {}

  ngOnInit() {}

  showAnswer(question: string) {
    switch (question) {
      case "question1":
        this.showParagraph1 = !this.showParagraph1;
        break;
      case "question2":
        this.showParagraph2 = !this.showParagraph2;
        break;
      case "question3":
        this.showParagraph3 = !this.showParagraph3;
        break;
      case "question4":
        this.showParagraph4 = !this.showParagraph4;
        break;
    }
  }
}
