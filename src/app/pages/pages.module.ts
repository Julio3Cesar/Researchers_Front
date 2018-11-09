import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ResearchesCreateComponent } from './researches/researches-create/researches-create.component';
import { ResearchesShowComponent } from './researches/researches-show/researches-show.component';
import { ResearchesReplyComponent } from './researches/researches-reply/researches-reply.component';
import { ResearchersShowComponent } from './researchers/researchers-show/researchers-show.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    FormsModule,
    PagesRoutingModule,
    ThemeModule,
    MiscellaneousModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    ResearchesCreateComponent,
    ResearchesShowComponent,
    ResearchesReplyComponent,
    ResearchersShowComponent,
  ],
})
export class PagesModule {
}
