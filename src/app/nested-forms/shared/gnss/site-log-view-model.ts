import {FrequencyStandardViewModel} from './frequency-standard-view-model';

/**
 * View Model equivalent of ../data-model/SiteLogDataModel
 */
// TODO: Remove this extra level of nesting, if not needed.
export class SiteLogViewModel {
    siteLog: ViewSiteLog;
}

export class ViewSiteLog {
    siteIdentification: any;
    frequencyStandards: FrequencyStandardViewModel[];
}
