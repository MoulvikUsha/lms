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
            base: -1,
            barThickness: 25,
            backgroundColor: "#FAA81D",
            borderRadius:3,
            inflateAmount:-3,
            data: [6, 8, 5, 14, 5],
          },
          {
            label: "Remock",
            base: -1,
            barThickness: 25,
            borderRadius:3,
            inflateAmount: -3,
            backgroundColor: "#086288",
            data: [7, 13, 10, 5, 7]
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            align : 'end',
            display: true,
            labels: {
              color: "black",
              boxWidth: 10,
              font: {
                // family: 'Open Sans',
                weight: "600"
              },
              usePointStyle: true,
            },
          },
        },
        scales: {
          x: {
            display: true,
            stacked: false,
            grid: {
              borderColor: "black",
              display: false,
            },
            ticks: {
              color: 'black',
              font : {
                // family: 'Open Sans',
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
                // family: 'Open Sans',
                weight: '600'
              },
              callback: function (value:any, index) {                
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
