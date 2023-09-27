import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationComponent } from './views/presentation/presentation.component';
import { CompetencesComponent } from './views/competences/competences.component';
import { ExperienceComponent } from './views/experience/experience.component';
import { ContactComponent } from './views/contact/contact.component';
import { SkillDetailsComponent } from './views/skill-details/skill-details.component';
import { ExperienceDetailsComponent } from './views/experience-details/experience-details.component';
import { Error404Component } from './views/error404/error404.component';
import { MentionLegalComponent } from './views/mention-legal/mention-legal.component';

const routes: Routes = [
  { path: 'presentation', component: PresentationComponent },
  { path: 'competence', component: CompetencesComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'skill-details/:skillId', component: SkillDetailsComponent },
  { path: 'experience-details/:experienceId', component: ExperienceDetailsComponent },
  { path: 'mention-legal', component: MentionLegalComponent },

  { path: '', redirectTo: 'presentation', pathMatch: 'full' },
  { path: '**', component: Error404Component } // Route de secours pour gérer les erreurs 404


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
