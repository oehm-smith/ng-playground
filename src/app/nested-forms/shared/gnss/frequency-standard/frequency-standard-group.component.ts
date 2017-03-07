import {Component, Input, OnInit} from '@angular/core';
import {MiscUtils} from '../misc-utils';
import {AbstractGroup} from '../abstract-groups-items/abstract-group';
import {FrequencyStandardViewModel} from './frequency-standard-view-model';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

/**
 * This class represents a collection of FrequencyStandard Component.
 */
@Component({
  moduleId: module.id,
  selector: 'frequency-standard-group',
  templateUrl: 'frequency-standard-group.component.html',
})
export class FrequencyStandardGroupComponent extends AbstractGroup<FrequencyStandardViewModel> implements OnInit {
  public miscUtils: any = MiscUtils;

    @Input('siteInfoForm') siteInfoForm: FormGroup;

    private freqGroupForm: FormGroup;

    @Input() frequencyStandards: any;

 @Input()
  set siteLogModel(siteLogModel: any) {
    this.setItemsCollection(siteLogModel.frequencyStandards);
  }

  @Input()
  set originalSiteLogModel(originalSiteLogModel: any) {
    this.setItemsOriginalCollection(originalSiteLogModel.frequencyStandards);
  }

  constructor(private formBuilder: FormBuilder) {
    super();
  }

    ngOnInit() {
        this.setupForm();
    }

    private setupForm() {
        this.freqGroupForm = this.formBuilder.group({
            notes: ['', [Validators.maxLength(2000)]]
        });
        this.siteInfoForm.addControl('frequencies', this.freqGroupForm);
    }

    getItemName(): string {
    return 'Frequency Standard';
  }

  compare(obj1: FrequencyStandardViewModel, obj2: FrequencyStandardViewModel): number {
    let date1: string = obj1.startDate;
    let date2: string = obj2.endDate;
    return AbstractGroup.compareDates(date1, date2);
  }

  newViewModelItem(): FrequencyStandardViewModel {
    return new FrequencyStandardViewModel();
  }
}
