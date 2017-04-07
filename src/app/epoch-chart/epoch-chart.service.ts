import { Injectable } from '@angular/core';

@Injectable()
export class EpochChartService {

    constructor() { }

    getDummyData(): any {
        const dummy = {
            time: ((new Date()).getTime() / 1000),
            y: Math.random() * 100 + 50
        };
        return dummy;
    }
};
