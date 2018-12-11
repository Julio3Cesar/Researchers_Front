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
import { MyResearchesComponent } from './to-manage/my-researches/my-researches.component';
import { MyAccountComponent } from './to-manage/my-account/my-account.component';
import { DeleteMyAccountComponent } from './to-manage/delete-my-account/delete-my-account.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
  {
    path: 'to-manage/my-researches',
    component: MyResearchesComponent,
  }, {
    path: 'to-manage/my-account',
    component: MyAccountComponent,
  }, {
    path: 'to-manage/delete-my-account',
    component: DeleteMyAccountComponent,
  }, {
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
    path: 'researches/create/:id',
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
