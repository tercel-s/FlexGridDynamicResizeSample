import { Component, OnInit } from '@angular/core';
import { CellType, GridPanel } from '@grapecity/wijmo.grid';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  gridData = [
    { id: 15, product: 'ピュアデミグラスソース', date: '2017/01/10', amount: 6000 },
    { id: 17, product: 'だしこんぶ', date: '2017/01/08', amount: 14500 },
    { id: 18, product: 'ピリカラタバスコ', date: '2017/01/12', amount: 4000 },
    { id: 84, product: 'なまわさび', date: '2017/01/21', amount: 8000 }
  ];

  itemFormatter = (panel: GridPanel, r: number, c: number, cell: HTMLElement) => {
    if (panel.cellType === CellType.ColumnHeader) {
      cell.style.textAlign = 'center';
    }
  }
}
