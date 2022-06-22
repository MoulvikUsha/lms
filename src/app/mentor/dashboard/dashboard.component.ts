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
  myChart4: any;

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
          'Male',
          'Female',
        ],
        datasets: [{
          data: [300, 500],
          backgroundColor: [
            '#182C52',
            '#ED9232',
          ],
          hoverOffset: 5,
        }]
      },
      options: {
        maintainAspectRatio: false,
        cutout: '75%',
        radius: 80,
        plugins: {
          legend: {
            position: 'right',
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
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
              '#02C5E9','#02C5E9','#02C5E9','#02C5E9','#02C5E9','#02C5E9','#02C5E9',
            ],
            borderWidth: 0,
            barThickness: 10,
            borderRadius: 4
          },
        ],
      },
      options: {
        indexAxis: 'y',
        plugins: {
          legend: {
            position: 'right',
            display: false,
            labels: {
              boxWidth: 15,
              usePointStyle: true,
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
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
              '#02C5E9',
              '#02C5E9',
              '#02C5E9',
              '#02C5E9',
              '#02C5E9',
            ],
            borderWidth: 0,
            barThickness: 10,
            borderRadius: 4,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        plugins: {
          legend: {
            position: 'right',
            display: false,
            labels: {
              boxWidth: 15,
              usePointStyle: true,
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

    this.myChart3 = new Chart('degree', {
      type: 'bar',
      data: {
        labels: [
          'BE (CSE)',
          'BE (Non-CSE)',
          'Post Graduates',
          'PhD',
        ],
        datasets: [
          {
            label: '',
            data: [15, 27, 5, 2],
            backgroundColor: [
              '#FF007C',
              '#FF007C',
              '#FF007C',
              '#FF007C',
            ],
            borderWidth: 0,
            barThickness: 15,
            borderRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            display: false,
            labels: {
              boxWidth: 15,
              usePointStyle: true,
            },
          },
        },
        scales: {
          x: {
            grid: {
              display: true,
              drawBorder: false,
              offset: false,
              tickWidth: 0,
              color: "#BCBCCB",
            },
          },
          y: {
            display: false,
            grid: {
              display: false,
              drawBorder: false,
            },
          },
        },
      },
    });

    this.myChart4 = new Chart('performance', {
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
            data: [65, 59, 80, 81, 56],
            backgroundColor: ['#39BB5C','#2DB5EE','#E4D402','#EA8604','#E40347'],
            borderWidth: 0,
            hoverOffset: 15,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            display: true,
            labels: {
              boxWidth: 9,
              pointStyle: 'circle',
              usePointStyle: true,
            }
          },
        },
      },
    });
  }
}
