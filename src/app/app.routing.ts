import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { ComponentsComponent } from "./components/components.component";
import { ProfileComponent } from "./examples/profile/profile.component";
import { SignupComponent } from "./examples/signup/signup.component";
import { LandingComponent } from "./examples/landing/landing.component";
import { NucleoiconsComponent } from "./components/nucleoicons/nucleoicons.component";
import { SpringSeasonComponent } from "./components/trek-by-season/spring-season/spring-season.component";
import { SummerSeasonComponent } from "./components/trek-by-season/summer-season/summer-season.component";
import { MonsoonSeasonComponent } from "./components/trek-by-season/monsoon-season/monsoon-season.component";
import { AutumSeasonComponent } from "./components/trek-by-season/autum-season/autum-season.component";
import { WinterSeasonComponent } from "./components/trek-by-season/winter-season/winter-season.component";
import { EasymoderatetrekComponent } from "./components/trek-by-difficulty/easymoderatetrek/easymoderatetrek.component";
import { ModeratetrekComponent } from "./components/trek-by-difficulty/moderatetrek/moderatetrek.component";
import { ModerateDifficultTrekComponent } from "./components/trek-by-difficulty/moderate-difficult-trek/moderate-difficult-trek.component";
import { DifficultTrekComponent } from "./components/trek-by-difficulty/difficult-trek/difficult-trek.component";
import { JanuaryTrekComponent } from "./components/trek-by-month/january-trek/january-trek.component";
import { FebTrekComponent } from "./components/trek-by-month/feb-trek/feb-trek.component";
import { MarchTrekComponent } from "./components/trek-by-month/march-trek/march-trek.component";
import { AprilTrekComponent } from "./components/trek-by-month/april-trek/april-trek.component";
import { MayTrekComponent } from "./components/trek-by-month/may-trek/may-trek.component";
import { JunTrekComponent } from "./components/trek-by-month/jun-trek/jun-trek.component";
import { JulTrekComponent } from "./components/trek-by-month/jul-trek/jul-trek.component";
import { AugTrekComponent } from "./components/trek-by-month/aug-trek/aug-trek.component";
import { SepTrekComponent } from "./components/trek-by-month/sep-trek/sep-trek.component";
import { OctTrekComponent } from "./components/trek-by-month/oct-trek/oct-trek.component";
import { NovTrekComponent } from "./components/trek-by-month/nov-trek/nov-trek.component";
import { DecTrekComponent } from "./components/trek-by-month/dec-trek/dec-trek.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: ComponentsComponent,
  },
  {
    path: "user-profile",
    component: ProfileComponent,
  },
  {
    path: "signup",
    component: SignupComponent,
  },
  {
    path: "landing",
    component: LandingComponent,
  },
  {
    path: "nucleoicons",
    component: NucleoiconsComponent,
  },
  {
    path: "spring-season",
    component: SpringSeasonComponent,
  },
  {
    path: "summer-season",
    component: SummerSeasonComponent,
  },
  {
    path: "monsoon-season",
    component: MonsoonSeasonComponent,
  },
  {
    path: "autumn-season",
    component: AutumSeasonComponent,
  },
  {
    path: "winter-season",
    component: WinterSeasonComponent,
  },
  {
    path: "easy-moderate-trek",
    component: EasymoderatetrekComponent,
  },
  {
    path: "moderate-trek",
    component: ModeratetrekComponent,
  },
  {
    path: "moderate-difficult-trek",
    component: ModerateDifficultTrekComponent,
  },
  {
    path: "difficult-trek",
    component: DifficultTrekComponent,
  },
  {
    path: "jan-trek",
    component: JanuaryTrekComponent,
  },
  {
    path: "feb-trek",
    component: FebTrekComponent,
  },
  {
    path: "mar-trek",
    component: MarchTrekComponent,
  },
  {
    path: "apr-trek",
    component: AprilTrekComponent,
  },
  {
    path: "may-trek",
    component: MayTrekComponent,
  },
  {
    path: "jun-trek",
    component: JunTrekComponent,
  },
  {
    path: "jul-trek",
    component: JulTrekComponent,
  },
  {
    path: "aug-trek",
    component: AugTrekComponent,
  },
  {
    path: "sep-trek",
    component: SepTrekComponent,
  },
  {
    path: "oct-trek",
    component: OctTrekComponent,
  },
  {
    path: "nov-trek",
    component: NovTrekComponent,
  },
  {
    path: "dec-trek",
    component: DecTrekComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
