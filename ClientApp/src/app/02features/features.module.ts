import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayComponent } from './play/play.component';
import { FeaturesRoutingModule } from './features-routing.module';


@NgModule({
  declarations: [
    PlayComponent,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
    //RouterModule
  ],
  exports:[]
})
export class FeaturesModule { }
