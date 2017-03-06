import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormGroup, FormControl, AbstractControl, Validators, FormBuilder} from '@angular/forms';

import {ExtraData} from '../interfaces';

@Component({
  selector: 'extra-data',
  templateUrl: './extra-data.component.html',
  styleUrls: ['./extra-data.component.css']
})
export class ExtraDataComponent implements OnInit {
  @Input('parentForm')
  public parentForm: FormGroup;

  @Input('extraData')
  public extraData: ExtraData;

  public extraDataForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    console.log('Initializing extraData', this.extraData);
    this.extraDataForm = this.toFormGroup(this.extraData);
    this.parentForm.addControl('extraData', this.extraDataForm);
  }

  private toFormGroup(data: ExtraData) {
    const formGroup = this.fb.group({
      name: [data.name, Validators.required],
      level: [data.level, Validators.required],
      role: [data.role, Validators.required],
    });

    return formGroup;
  }
}
