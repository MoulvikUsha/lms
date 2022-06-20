import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.scss']
})
export class MockComponent implements OnInit {

  myChart: any;

  constructor() { }

  ngOnInit(): void {
    this.graphPreview();
  }


  graphPreview() {
    Chart.register(...registerables);

    this.myChart = new Chart('demo', {
      type: 'bar',
      data: {
        labels: [
          'Mock 1',
          'Mock 2',
          'Mock 3',
          'Mock 4',
          'Mock 5',
        ],
        datasets: [
          {
            label: "Mock",
            barThickness: 25,
            backgroundColor: "#FAA81D",
            inflateAmount:-3,
            data: [3, 7, 5, 14, 5],
          },
          {
            label: "Remock",
            base: 0,
            barThickness: 25,
            inflateAmount: -3,
            backgroundColor: "#086288",
            data: [4, 3, 11, 12, 7]
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: 'bottom',
            display: true,
            labels: {
              boxWidth: 15,
              usePointStyle: true,
            },
          },
        },
        scales: {
          x: {
            display: true,
            stacked: false,
            grid: {
              display: false,
            }
          },
          y: {
            display: true,
            stacked: true,
            grid: {
              display: false,
            }
          },
        },
      },
    });
  }
}
