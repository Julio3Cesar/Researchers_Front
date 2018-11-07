import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ResearchesCreateComponent } from './researches/researches-create/researches-create.component';

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
  ],
})
export class PagesModule {
}
