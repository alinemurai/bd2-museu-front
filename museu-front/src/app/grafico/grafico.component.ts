import { Component, Input, OnInit, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})


export class GraficoComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent | null = null;
  @Input() dadosGrafico: any = {data: [], categories: []};
  public chartOptions: Partial<ChartOptions> = {
    series: [
      {
        name: "My-series",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }
    ],
    chart: {
      height: 350,
      type: "line"
    },
    title: {
      text: "My First Angular Chart"
    },
    xaxis: {
      categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
    }
  };;
  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      series: [
        {
          name: this.dadosGrafico.name,
          data: this.dadosGrafico.data
        }
      ],
      chart: {
        height: 350,
        type: this.dadosGrafico.type
      },
      title: {
        text: "My First Angular Chart"
      },
      xaxis: {
        categories: this.dadosGrafico.categories
      }
    };
  }
}
