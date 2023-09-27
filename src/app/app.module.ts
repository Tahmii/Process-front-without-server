import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CompetencesComponent } from './views/competences/competences.component';
import { PresentationComponent } from './views/presentation/presentation.component';
import { ExperienceComponent } from './views/experience/experience.component';
import { ContactComponent } from './views/contact/contact.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { ExperienceCardComponent } from './components/cards/experience-card/experience-card.component';
import { SkillCardComponent } from './components/cards/skill-card/skill-card.component';
import { ContainerCardComponent } from './components/container-card/container-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillDetailsComponent } from './views/skill-details/skill-details.component';
import { SkillCardDetailComponent } from './components/cards/skill-card-detail/skill-card-detail.component';
import { SvgComponent } from './components/svg/svg.component';
import { ContainerCardExperienceComponent } from './components/container-card-experience/container-card-experience.component';
import { ExperienceCardDetailsComponent } from './components/experience-card-details/experience-card-details.component';
import { ExperienceDetailsComponent } from './views/experience-details/experience-details.component';
import { SkillForExperienceContainerComponent } from './components/skill-for-experience-container/skill-for-experience-container.component';
import { CardContainerExperienceComponent } from './components/card-container-experience/card-container-experience.component';
import { ContactCardComponent } from './components/cards/contact-card/contact-card.component';
import { PresentationCardComponent } from './components/cards/presentation-card/presentation-card.component';
import { Error404Component } from './views/error404/error404.component';
import { MentionLegalComponent } from './views/mention-legal/mention-legal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CompetencesComponent,
    PresentationComponent,
    ExperienceComponent,
    ContactComponent,
    SearchBarComponent,
    ExperienceCardComponent,
    SkillCardComponent,
    ContainerCardComponent,
    SkillDetailsComponent,
    SkillCardDetailComponent,
    SvgComponent,
    ContainerCardExperienceComponent,
    ExperienceCardDetailsComponent,
    ExperienceDetailsComponent,
    SkillForExperienceContainerComponent,
    CardContainerExperienceComponent,
    ContactCardComponent,
    PresentationCardComponent,
    Error404Component,
    MentionLegalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
