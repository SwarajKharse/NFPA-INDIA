import { Component, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { Chart , ChartType, registerables} from 'chart.js/auto';
Chart.register(...registerables);
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-clients-chart',
  standalone: true,
  imports: [],
  templateUrl: './clients-chart.component.html',
  styleUrl: './clients-chart.component.css'
})

export class ClientsChartComponent implements AfterViewInit{
  @ViewChild('clientChart') clientChart!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;
  legendFontSize: number = 11;

  constructor() {}

  // Below is the data for the chart which is rendered on the screen
  datalabels = ['Hospitality Groups', 'Industrial Sheds', 'Commercial Offices', 'IT Offices', 'Educational Institutes', 'Residential Premises', 'Hospitals'];
  dataSet = [30, 25, 20, 10, 5, 5, 5];

  chartDiscuss(){
    const context = this.clientChart.nativeElement.getContext('2d');
      if(context){

        this.chart = new Chart(context, {
          type: 'doughnut' as ChartType,
          data: {
            labels: this.datalabels,
            datasets: [{
              data: this.dataSet,
              backgroundColor: [
                'rgba(20, 82, 119, 0.8)',
                'rgba(38, 103, 133, 0.8)',
                'rgba(57, 124, 147, 0.8)',
                'rgba(76, 145, 161, 0.8)',
                'rgba(94, 166, 175, 0.8)',
                'rgba(113, 187, 189, 0.8)',
                'rgba(131, 208, 203, 0.8)'
              ],
              borderColor: [
                'rgba(20, 82, 119, 1)',
                'rgba(38, 103, 133, 1)',
                'rgba(57, 124, 147, 1)',
                'rgba(76, 145, 161, 1)',
                'rgba(94, 166, 175, 1)',
                'rgba(113, 187, 189, 1)',
                'rgba(131, 208, 203, 1)'
              ],
              borderWidth: 1, 
              hoverOffset: 15,
            }]
          },
          options: {
            responsive: true,
            layout: {
              padding: 20,
            },
            plugins: {
              legend: {
                position: 'bottom',
                align: 'center',
                labels: {
                  boxWidth: 15,
                  padding: 20,
                  usePointStyle: true,
                  color: 'rgba(255,255,255, 1)', // Set legend font color here
                  font: {
                    size: this.legendFontSize,
                    weight: 300
                  }
                }
              },
              tooltip: {
                enabled: true,
                callbacks: {
                  label: function(this: any, tooltipItem: any) {
                    // Accessing the chart instance via 'this.chart'
                    const chart = this.chart;
                    const dataIndex = tooltipItem.dataIndex;
                    const datasetIndex = tooltipItem.datasetIndex;
              
                    // Retrieving the label and data value using the indices
                    const label = chart.data.labels[dataIndex];
                    const value = chart.data.datasets[datasetIndex].data[dataIndex];
              
                    // Constructing the label string with a '%' sign
                    return `${label}: ${Math.round(value)}%`;
                  }
                }
              }
            },
            animation: {
              duration: 1500,
              easing: 'easeInOutExpo'
            }
          }
        });
      }else{
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

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.adjustLegendFontSize();
  }

  adjustLegendFontSize() {

    if (window.innerWidth < 430) {
      this.legendFontSize = 8;
    } else {
      this.legendFontSize = 11;
    }


    if (this.chart && this.chart.options.plugins && this.chart.options.plugins.legend) {
      this.chart.update();
    }
  }
}