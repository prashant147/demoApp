import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsDashboardComponent } from './events-dashboard/events-dashboard.component';
import { SuperGridModule } from '@xeeva-npm-lib/ui-ang-lib/super-grid';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [EventsDashboardComponent],
  imports: [
    CommonModule,
    SuperGridModule,RouterModule.forChild([{
      path:'',component:EventsDashboardComponent
    }])
  ]
})
export class EventsModule { }
