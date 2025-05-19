import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.less']
})
export class DonutChartComponent {
  @Input() value1 = 60;
  @Input() value2 = 40;

  gradientStyle = '';

  ngOnChanges(changes: SimpleChanges): void {
    const v1 = this.value1;
    const v2 = this.value2;
    this.gradientStyle = `conic-gradient(#594CBE 0% ${v1}%, #E22E6F ${v1}% ${v1 + v2}%)`;
  }
}
