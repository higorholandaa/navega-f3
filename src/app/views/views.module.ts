import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewsRoutingModule } from './views-routing.module';
import {MatIconModule} from '@angular/material/icon';
import { Sharedmodule } from '../shared/shared.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, ViewsRoutingModule, MatIconModule, Sharedmodule] 
})
export class ViewsModule { }
