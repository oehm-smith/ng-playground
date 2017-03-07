import {Component, Input, Output, EventEmitter, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from "@angular/forms";

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextInputComponent),
  multi: true
};


@Component({
  moduleId: module.id,
  selector: 'text-input',
  templateUrl: 'text-input.component.html',
  styleUrls: ['form-input.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class TextInputComponent implements ControlValueAccessor {
  @Input('model') _model: string = '';
  @Input() index: string = '0';
  @Input() name: string = '';
  @Input() public label: string = '';
  @Input() public required: boolean = false;
  @Input() public minlength: string = '';
  @Input() public maxlength: string = '';

  // configurationObject: any = null;
  //
  // /* Output an event when the value in the field changes */
  @Output() modelChange = new EventEmitter();
  change(newValue:string) {
    this.model = newValue;
    this.modelChange.emit(newValue);
  }

  //Placeholders for the callbacks which are later providesd
  //by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  //get accessor
  get model(): any {
    return this._model;
  };

  //set accessor including call the onchange callback
  set model(v: any) {
    if (v !== this._model) {
      this._model = v;
      this.onChangeCallback(v);
    }
  }

  //Set touched on blur
  onBlur() {
    this.onTouchedCallback();
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
    if (value !== this._model) {
      this._model = value;
    }
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
