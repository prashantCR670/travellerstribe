import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModalDismissReasons, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { NouisliderModule } from "ng2-nouislider";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
import { RouterModule } from "@angular/router";

import { BasicelementsComponent } from "./basicelements/basicelements.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { TypographyComponent } from "./typography/typography.component";
import { NucleoiconsComponent } from "./nucleoicons/nucleoicons.component";
import { ComponentsComponent } from "./components.component";
import { NotificationComponent } from "./notification/notification.component";
import { NgbdModalComponent } from "./modal/modal.component";
import { NgbdModalContent } from "./modal/modal.component";
import { SpringSeasonComponent } from "./trek-by-season/spring-season/spring-season.component";
import { SummerSeasonComponent } from "./trek-by-season/summer-season/summer-season.component";
import { MonsoonSeasonComponent } from "./trek-by-season/monsoon-season/monsoon-season.component";
import { AutumSeasonComponent } from "./trek-by-season/autum-season/autum-season.component";
import { WinterSeasonComponent } from "./trek-by-season/winter-season/winter-season.component";
import { EasymoderatetrekComponent } from "./trek-by-difficulty/easymoderatetrek/easymoderatetrek.component";
import { ModeratetrekComponent } from "./trek-by-difficulty/moderatetrek/moderatetrek.component";
import { ModerateDifficultTrekComponent } from "./trek-by-difficulty/moderate-difficult-trek/moderate-difficult-trek.component";
import { DifficultTrekComponent } from "./trek-by-difficulty/difficult-trek/difficult-trek.component";
import { JanuaryTrekComponent } from "./trek-by-month/january-trek/january-trek.component";
import { FebTrekComponent } from "./trek-by-month/feb-trek/feb-trek.component";
import { MarchTrekComponent } from "./trek-by-month/march-trek/march-trek.component";
import { AprilTrekComponent } from "./trek-by-month/april-trek/april-trek.component";
import { MayTrekComponent } from "./trek-by-month/may-trek/may-trek.component";
import { JunTrekComponent } from "./trek-by-month/jun-trek/jun-trek.component";
import { JulTrekComponent } from "./trek-by-month/jul-trek/jul-trek.component";
import { AugTrekComponent } from "./trek-by-month/aug-trek/aug-trek.component";
import { SepTrekComponent } from "./trek-by-month/sep-trek/sep-trek.component";
import { OctTrekComponent } from "./trek-by-month/oct-trek/oct-trek.component";
import { NovTrekComponent } from "./trek-by-month/nov-trek/nov-trek.component";
import { DecTrekComponent } from "./trek-by-month/dec-trek/dec-trek.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NouisliderModule,
    RouterModule,
    JwBootstrapSwitchNg2Module,
  ],
  declarations: [
    ComponentsComponent,
    BasicelementsComponent,
    NavigationComponent,
    TypographyComponent,
    NucleoiconsComponent,
    NotificationComponent,
    NgbdModalComponent,
    NgbdModalContent,
    SpringSeasonComponent,
    SummerSeasonComponent,
    MonsoonSeasonComponent,
    AutumSeasonComponent,
    WinterSeasonComponent,
    EasymoderatetrekComponent,
    ModeratetrekComponent,
    ModerateDifficultTrekComponent,
    DifficultTrekComponent,
    JanuaryTrekComponent,
    FebTrekComponent,
    MarchTrekComponent,
    AprilTrekComponent,
    MayTrekComponent,
    JunTrekComponent,
    JulTrekComponent,
    AugTrekComponent,
    SepTrekComponent,
    OctTrekComponent,
    NovTrekComponent,
    DecTrekComponent,
  ],
  entryComponents: [NgbdModalContent],
  exports: [ComponentsComponent],
})
export class ComponentsModule {}
