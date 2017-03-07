import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {AbstractItem} from '../abstract-groups-items/abstract-item';
import {GeodesyEvent} from '../events-messages/Event';
import {FrequencyStandardViewModel} from './frequency-standard-view-model';
import {MiscUtils} from '../misc-utils';
import { DialogService } from '../services/dialog.service';
import { FormGroup, Validators, AbstractControl, FormControl, FormArray } from '@angular/forms';

/**
 * This class represents a single item of GNSS Antennas.
 */
@Component({
  moduleId: module.id,
  selector: 'frequency-standard-item',
  templateUrl: 'frequency-standard-item.component.html',
})
export class FrequencyStandardItemComponent extends AbstractItem implements OnInit {
  public miscUtils: any = MiscUtils;

    @Input('frequencyForm') public frequencyForm: FormGroup;
    // public frequencies: FormGroup;

    /**
   * Total number of Frequency Standards
   */
  @Input() total: number;

  /**
   * The index of this Frequency Standard (zero-based)
   */
  @Input() index: number;

  /**
   * The Frequency Standard in question.
   */
  @Input() frequencyStandard: FrequencyStandardViewModel;

  /**
   * This is to receive geodesyEvent from parent.
   */
  @Input() geodesyEvent: GeodesyEvent;

  /**
   * Events children components can send to their parent components. Usually these are then passed to all
   * child components.
   * @type {EventEmitter<boolean>}
   */
  @Output() returnEvents = new EventEmitter<GeodesyEvent>();

  constructor(protected dialogService: DialogService) {
    super(dialogService);
  }

    ngOnInit() {
      console.log('FrequencyStandardItemComponent - form init');
    this.setupForm();
    }

    private setupForm() {
        // let c1: AbstractControl = new FormControl({standardType: ['', [Validators.minLength(4)]]});
        // let c2: AbstractControl = new FormControl({inputFrequency: ['', [Validators.maxLength(100)]]});
        // let c3: AbstractControl = new FormControl({startDate: ['', []]});
        // let c4: AbstractControl = new FormControl({endDate: ['', []]});
        // let c5: AbstractControl = new FormControl({notes: ['', [Validators.maxLength(2000)]]}); // this.frequencyStandard.notes

        // this.frequencies.addControl('standardType', c1);
        // this.frequencies.addControl('inputFrequency', c2);
        // this.frequencies.addControl('startDate', c3);
        // this.frequencies.addControl('endDate', c4);
        // this.frequencies.addControl('notes', c5);
        // this.frequencies.push(c1);
        // this.frequencies.push(c2);
        // this.frequencies.push(c3);
        // this.frequencies.push(c4);
        // this.frequencies.push(c5);
        // this.frequencies = <FormGroup> this.siteInfoForm.get('frequencies');
    }

  getGeodesyEvent(): GeodesyEvent {
    return this.geodesyEvent;
  }

  getIndex(): number {
    return this.index;
  }

  getReturnEvents(): EventEmitter<GeodesyEvent> {
    return this.returnEvents;
  }

  getItemName(): string {
    return 'Frequency Standard';
  }
}
