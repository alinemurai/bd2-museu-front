import { Component, Input, OnInit, ViewChild } from '@angular/core';

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
  selector: 'app-grafico-colecao',
  templateUrl: './grafico-colecao.component.html',
  styleUrls: ['./grafico-colecao.component.css']
})
export class GraficoColecaoComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent | null = null;
  @Input() dadosGraficoColecao: any = {data: [], categories: []};
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
      text: "Quantidade Total de Objetos de Arte"
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
          name: this.dadosGraficoColecao.name,
          data: this.dadosGraficoColecao.data
        }
      ],
      chart: {
        height: 350,
        type: this.dadosGraficoColecao.type
      },
      title: {
        text: "Quantidade Total de Objetos de Arte"
      },
      xaxis: {
        categories: this.dadosGraficoColecao.categories
      }
    };
  }
}
