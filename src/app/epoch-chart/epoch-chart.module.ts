import { NgModule } from '@angular/core';
import { EpochChartComponent } from './epoch-chart.component';
import { EpochChartService } from './epoch-chart.service';


@NgModule({
    imports: [],
    exports: [EpochChartComponent],
    declarations: [EpochChartComponent],
    providers: [EpochChartService],
})
export class EpochChartModule { }
