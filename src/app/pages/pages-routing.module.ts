import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { ResearchesCreateComponent } from './researches/researches-create/researches-create.component';
import { ResearchesShowComponent } from './researches/researches-show/researches-show.component';
import { ResearchesReplyComponent } from './researches/researches-reply/researches-reply.component';
import { ResearchersShowComponent } from './researchers/researchers-show/researchers-show.component';
import { ResearchesComponent } from './records/researches/researches.component';
import { RecordsShowComponent } from './records/records-show/records-show.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
  {
    path: 'records/show/:id',
    component: RecordsShowComponent,
  }, {
    path: 'records/researches',
    component: ResearchesComponent,
  }, {
    path: 'researchers/show',
    component: ResearchersShowComponent,
  }, {
    path: 'researches/reply/:id',
    component: ResearchesReplyComponent,
  }, {
    path: 'researches/show',
    component: ResearchesShowComponent,
  }, {
    path: 'researches/show/:id',
    component: ResearchesShowComponent,
  }, {
    path: 'researches/create',
    component: ResearchesCreateComponent,
  }, {
    path: 'miscellaneous',
    loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
  }, {
    path: '',
    redirectTo: 'researches/show',
    pathMatch: 'full',
  }, {
    path: '**',
    component: NotFoundComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
