import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'app works!';
  initialData: Array<any>;
  config: any;

  constructor( ) { }

  ngOnInit() {
    this._setConfig();
    this._setInitData();
  }

  private _setConfig(): void {
    this.config = {
      type: 'time.bar',
      axes: ['left', 'right', 'bottom'],
      pixelRatio: 1,
      ticks: { time: 10, right: 5, left: 5 },
      selector: 'realtime-bar'
    };
  }

  private _setInitData(): void {
    this.initialData = [
      // First series
        {
          label: 'Series 1',
          values: [
            {time: 1370044800, y: 25}, {time: 1370044801, y: 60},
          ]
        },
        {
          label: 'Series 1',
          values: [
            {time: 1370044800, y: 60}, {time: 1370044801, y: 120},
          ]
        }
    ];
  }

  ngOnDestroy() { }
}
