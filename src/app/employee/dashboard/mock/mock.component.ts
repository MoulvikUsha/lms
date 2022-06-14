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
            label: '',
            // data: this.barChartData,
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],

            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: true,
            labels: {
              boxWidth: 0,
            },
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
              drawBorder: false,
            },
          },
          y: {
            display: false,
            beginAtZero: true,
            grid: {
              display: false,
              drawBorder: false,
            },
          },
        },
      },
    });
  }
}
