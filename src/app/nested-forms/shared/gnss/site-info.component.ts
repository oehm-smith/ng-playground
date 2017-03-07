import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit, Component } from '@angular/core';
import { SiteLogViewModel, ViewSiteLog } from './site-log-view-model';
import { FrequencyStandardViewModel } from './frequency-standard/frequency-standard-view-model';
import * as _ from 'lodash';

@Component({
    moduleId: module.id,
    selector: 'sd-site-info',
    templateUrl: 'site-info.component.html'
})
export class SiteInfoComponent implements OnInit {
    public siteInfoForm: FormGroup;
    public siteLogModel: ViewSiteLog = new ViewSiteLog();
    public siteLogOrigin: ViewSiteLog;


    constructor(private formBuilder: FormBuilder) {
    }

    public ngOnInit() {
        this.setupData();
        this.setupForm();
    }

    private setupForm() {
        this.siteInfoForm = this.formBuilder.group({
            fourCharacterID: ['', [Validators.required, Validators.minLength(4)]],
        });
    }

    private setupData() {

        let frequencyStandard1: FrequencyStandardViewModel = new FrequencyStandardViewModel();
        frequencyStandard1.notes = "blah blah blah";
        this.siteLogModel.frequencyStandards = [frequencyStandard1];

        // ----
        this.siteLogOrigin = _.cloneDeep(this.siteLogModel);
    }

    public save(what: any) {
        console.log('save what: ', what);
    }

    public loadSiteInfoData() {
        console.log('loadSiteInfoData');
    }

    public goBack() {
        console.log('goBack');
    }
}
