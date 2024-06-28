import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart , ChartType, registerables} from 'chart.js/auto';
Chart.register(...registerables);

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-progress-chart',
  standalone: true,
  imports: [],
  templateUrl: './progress-chart.component.html',
  styleUrl: './progress-chart.component.css'
})

export class ProgressChartComponent  implements AfterViewInit {
  @ViewChild('clientChart') clientChart!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;

  constructor() {}

  financialYears = [
    'FY 2016 - 2017', 'FY 2017 - 2018', 'FY 2018 - 2019', 'FY 2019 - 2020',
    'FY 2020 - 2021', 'FY 2021 - 2022', 'FY 2022 - 2023', 'FY 2023 - 2024'
  ];

  turnoverData = [0.1, 2.0, 5, 5.5, 3.5, 4.5, 6.0, 8.5];
  employeesData = [2, 10, 18, 20, 15, 15, 35, 60];

  chartDiscuss() {
    const context = this.clientChart.nativeElement.getContext('2d');
    if (context) {
      this.chart = new Chart(context, {
        type: 'bar' as ChartType,
        data: {
          labels: this.financialYears,
          datasets: [
            {
              type: 'bar' as ChartType,
              label: 'Turnover (in Cr)',
              data: this.turnoverData,
              backgroundColor: 'rgba(193, 18, 31, 0.8)',
              borderColor: 'rgba(193, 18, 31, 1)',
              borderRadius: 10,
              borderWidth: 1,
              yAxisID: 'y',
              order: 2 // Set order to render below the line chart
            },
            {
              type: 'line' as ChartType,
              label: 'Number of Employees',
              data: this.employeesData,
              backgroundColor: 'rgba(218, 185, 0, 0.8)',
              borderColor: 'rgba(218, 185, 0, 1)',
              borderWidth: 2,
              fill: false,
              tension: 0.1, // For smooth curves
              yAxisID: 'y1',
              order: 1 // Set order to render above the line chart
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: 20,
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Turnover (in Cr)',
                color: '#000'
              },
              ticks: {
                color: '#000' // Color of the y-axis labels
              },
              grid: {
                color: '#E5E5EF', // Color of the grid lines
              },
              position: 'left',
            },
            y1: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Number of Employees',
                color: '#000'
              },
              ticks: {
                color: '#000' // Color of the y-axis labels
              },
              position: 'right',
              grid: {
                color: '#E5E5EF', // Color of the grid lines
                drawOnChartArea: false 
              }
            },
            x: {
              title: {
                display: true,
                text: 'Financial Year',
                color: '#000'
              },
              ticks: {
                color: '#000' // Color of the y-axis labels
              },
              grid: {
                color: '#E5E5EF', // Color of the grid lines
                drawOnChartArea: false 
              }
            }
          },
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                usePointStyle: true,
                boxWidth: 15,
                color: '#000',
                font: {
                  size: 13,
                  weight: 'bold'
                }
              }
            }
          }
        }
      });
    } else {
      console.error('Could not create chart context');
    }
  }

  ngAfterViewInit() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.clientChart.nativeElement,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        markers: false,
      }
    });

    tl.add(() => {
      this.chartDiscuss();
    });
  }

}
