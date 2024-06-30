import { Component, ViewChild, ElementRef, AfterViewInit, QueryList, HostListener } from '@angular/core';
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
  legendFontSize: number = 11; // Initial font size for legend labels

  constructor() {}

  datalabels = ['Hospitality Groups', 
    'Industrial Sheds', 'Commercial Offices',
    'IT Offices', 'Educational Institutes', 
    'Residential Premises', 'Hospitals'];

  chartDiscuss(){
    const context = this.clientChart.nativeElement.getContext('2d');
      if(context){

        this.chart = new Chart(context, {
          type: 'doughnut' as ChartType,
          data: {
            labels: this.datalabels,
            datasets: [{
              data: [30, 25, 20, 10, 5, 5, 5],
              backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(201, 201, 201, 0.8)',
                'rgba(230, 25, 75, 0.8)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(201, 201, 201, 1)',
                'rgba(230, 25, 75, 1)'
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
                  font: {
                    size: this.legendFontSize,
                    weight: 'bold'
                  }
                }
              }
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
    // Adjust font size based on viewport width
    if (window.innerWidth < 430) {
      this.legendFontSize = 8;
    } else {
      this.legendFontSize = 11;
    }

    // Update chart legend options
    if (this.chart && this.chart.options.plugins && this.chart.options.plugins.legend) {
      // this.chart.options.plugins.legend.labels!.font!.size = this.legendFontSize;
      this.chart.update();
    }
  }

}
