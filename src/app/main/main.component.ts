import { Component, ViewEncapsulation } from '@angular/core';
import { CellType, GridPanel, CellRangeEventArgs } from '@grapecity/wijmo.grid';
import { MainComponentStore } from './main.component.store';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent {
  constructor(private store: MainComponentStore) { }
  gridData$ = this.store.gridData$;

  cellValueChanged(e: CellRangeEventArgs) {
    // 複数行にわたってセルが同時に変更されることもあるので、
    // 変更された行の範囲を取得する。
    const { row, row2 } = e.range;
    
    // 変更後の行のデータを取得する。
    const dirtyRows = e.panel.rows
      .filter(x => row <= x.index && x.index <= row2)
      .map(y => y.dataItem);

    console.log(dirtyRows);
  }

  // 見出しを中央揃えにする。
  itemFormatter = (panel: GridPanel, r: number, c: number, cell: HTMLElement) => {
    if (panel.cellType === CellType.ColumnHeader) {
      cell.style.textAlign = 'center';
    }
  }
}
