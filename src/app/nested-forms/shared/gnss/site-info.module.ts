import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SiteInfoComponent } from './site-info.component';
// import { FrequencyStandardModule } from './frequency-standard/frequency-standard.module';
import { FrequencyStandardItemComponent } from './frequency-standard/frequency-standard-item.component';
import { FrequencyStandardGroupComponent } from './frequency-standard/frequency-standard-group.component';
import {TextInputComponent} from './custom/text-input.component';
import {DialogService} from './services/dialog.service';

@NgModule({
  // FrequencyStandardModule,
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
    // FrequencyStandardModule
  ],
  declarations: [SiteInfoComponent, TextInputComponent, FrequencyStandardItemComponent, FrequencyStandardGroupComponent],
  exports: [SiteInfoComponent, TextInputComponent, FrequencyStandardItemComponent, FrequencyStandardGroupComponent],
  providers: [DialogService]
})

export class SiteInfoModule { }
