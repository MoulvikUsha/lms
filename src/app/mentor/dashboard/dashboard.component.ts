import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  myChart: any;
  myChart1: any;
  myChart2: any;
  myChart3: any;

  constructor() { }

  ngOnInit(): void {
    this.graphPreview();
  }

  graphPreview() {
    Chart.register(...registerables);

    this.myChart = new Chart('gender', {
      type: 'doughnut',
      data: {
        labels: [
          'Female',
          'Male',
        ],
        datasets: [{
          data: [300, 500],
          backgroundColor: [
            '#ED9232',
            '#182C52',
          ],
          hoverOffset: 4
        }]
      },
      options: {
        cutout: '75%',
        plugins: {
          legend: {
            display: true,
            labels: {
              boxWidth: 200,
              pointStyle: 'circle',
              usePointStyle: true,
            }
          },
        },
      }
    });

    this.myChart1 = new Chart('passing', {
      type: 'bar',
      data: {
        labels: [
          '2016',
          '2017',
          '2018',
          '2019',
          '2020',
          '2021',
          '2022',
        ],
        datasets: [
          {
            label: '',
            // data: this.barChartData,
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
              '#02C5E9','#02C5E9','#02C5E9','#02C5E9','#02C5E9','#02C5E9','#02C5E9',
            ],
            borderWidth: 0,
            borderRadius: 13,
          },
        ],
      },
      options: {
        indexAxis: 'y',
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
              drawBorder: true,
            },
          },
          y: {
            display: true,
            beginAtZero: true,
            grid: {
              display: false,
              drawBorder: true,
            },
          },
        },
      },
    });

    this.myChart2 = new Chart('experience', {
      type: 'bar',
      data: {
        labels: [
          'Fresher',
          '1 Yr',
          '2 Yrs',
          '3 Yrs',
          '4 Yrs',
        ],
        datasets: [
          {
            label: '',
            // data: this.barChartData,
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
              '#02C5E9',
              '#02C5E9',
              '#02C5E9',
              '#02C5E9',
              '#02C5E9',
            ],
            borderWidth: 0,
            borderRadius: 13,
          },
        ],
      },
      options: {
        indexAxis: 'y',
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
              drawBorder: true,
            },
          },
          y: {
            display: true,
            beginAtZero: true,
            grid: {
              display: false,
              drawBorder: true,
            },
          },
        },
      },
    });

    this.myChart3 = new Chart('performance', {
      type: 'pie',
      data: {
        labels: [
          'Excellent',
          'Good',
          'Above Average',
          'Average',
          'Below Avearage',
        ],
        datasets: [
          {
            label: '',
            // data: this.barChartData,
            data: [65, 59, 80, 81, 56],
            backgroundColor: ['#39BB5C','#2DB5EE','#E4D402','#EA8604','#E40347'],
            borderWidth: 0,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: true,
            labels: {
              boxWidth: 200,
              pointStyle: 'circle',
              usePointStyle: true,
            }
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
          },
        },
      },
    });
  }
}
