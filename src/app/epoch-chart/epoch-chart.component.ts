import { Observable } from 'rxjs/Rx';
import { AfterContentInit, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { EpochChartService } from './epoch-chart.service';

@Component({
    selector: 'epoch-chart',
    templateUrl: 'epoch-chart.component.html'
})

export class EpochChartComponent implements OnInit, OnDestroy {

    @Input() config: any;
    @Input() initdata: Array<any>;

    _chart: any;
    _initData: Array<any>;
    _tickData = Observable.interval(1000);
    _tickSub: any;

    constructor(
        private ecS: EpochChartService
    ) { }
    ngOnChanges(): void {

    }

    ngOnInit() {
        this._initData = this.initdata;
        this._generateChart();
        this._getRealtimeData();
    }

    private _generateChart(): void {
        setTimeout(() => {
            this._chart = $('#' + this.config.selector).epoch({
                type: this.config.type,
                data: this._initData,
                axes: this.config.axes,
                pixelRatio: this.config.pixelRatio
            });
        }, 10);
    }

    private _getRealtimeData(): void {
        this._tickSub = this._tickData.subscribe(t => {
            const dummyArray: Array<any> = [];
            this.ecS.getDummyData();

            dummyArray.push(this.ecS.getDummyData());
            dummyArray.push(this.ecS.getDummyData());

            this._chart.push(dummyArray);
        });
    }
    ngOnDestroy() {
        this._tickSub.unsubscibe();
    }
}
