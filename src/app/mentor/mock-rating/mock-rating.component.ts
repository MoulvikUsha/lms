import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-mock-rating',
  templateUrl: './mock-rating.component.html',
  styleUrls: ['./mock-rating.component.scss']
})
export class MockRatingComponent implements OnInit {

  myChart: any;
  constructor() { }

  ngOnInit(): void {
    this. graphPreview()
  }

  graphPreview() {
    Chart.register(...registerables);

    this.myChart = new Chart('demo', {
      type: 'line',
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
            borderColor: '#FAA81D',
            backgroundColor: "#FAA81D",
            pointRadius: 6,
            pointBackgroundColor: 'white',
            data: [6, 8, 5, 14, 5],
          }
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            display: true,
            stacked: false,
            grid: {
              borderColor: "black",
              display: false,
              tickLength: 5
            },
            title: {
              align: 'start',
            },
            ticks: {
              padding: 13,
              align: 'inner',
              // labelOffset: 30,
              color: 'black',
              font : {
                weight: '600'
              },
            }
          },
          y: {
            beginAtZero: true,
            stacked: false,
            grid: {
              borderColor: "black",
              display: false
            },
            ticks: {
              labelOffset: -25,
              showLabelBackdrop: true,
              color: 'black',
              font : {
                weight: '600'
              },
              callback: function (value:any, index: any) {                
                var x = ["Bad", "Average", "Good", "Very Good", "Excellent"];
                return x [index]
              }
            },
            display: true
          },
        },
      },
    });
  }
}
