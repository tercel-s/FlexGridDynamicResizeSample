import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { Observable } from "rxjs";

type Record = { id: number, product: string, date: string, amount: number };

export interface MainComponentState {
  gridData: Record[];
}

@Injectable({ providedIn: 'root' })
export class MainComponentStore extends ComponentStore<MainComponentState> {

  constructor() {
    super({
      gridData: [
        { id: 15, product: 'ピュアデミグラスソース', date: '2017/01/10', amount: 6000 },
        { id: 17, product: 'だしこんぶ', date: '2017/01/08', amount: 14500 },
        { id: 18, product: 'ピリカラタバスコ', date: '2017/01/12', amount: 4000 },
        { id: 84, product: 'なまわさび', date: '2017/01/21', amount: 8000 },

        { id: 15, product: 'ピュアデミグラスソース', date: '2017/01/10', amount: 6000 },
        { id: 17, product: 'だしこんぶ', date: '2017/01/08', amount: 14500 },
        { id: 18, product: 'ピリカラタバスコ', date: '2017/01/12', amount: 4000 },
        { id: 84, product: 'なまわさび', date: '2017/01/21', amount: 8000 },

        { id: 15, product: 'ピュアデミグラスソース', date: '2017/01/10', amount: 6000 },
        { id: 17, product: 'だしこんぶ', date: '2017/01/08', amount: 14500 },
        { id: 18, product: 'ピリカラタバスコ', date: '2017/01/12', amount: 4000 },
        { id: 84, product: 'なまわさび', date: '2017/01/21', amount: 8000 },

        { id: 15, product: 'ピュアデミグラスソース', date: '2017/01/10', amount: 6000 },
        { id: 17, product: 'だしこんぶ', date: '2017/01/08', amount: 14500 },
        { id: 18, product: 'ピリカラタバスコ', date: '2017/01/12', amount: 4000 },
        { id: 84, product: 'なまわさび', date: '2017/01/21', amount: 8000 },

        { id: 15, product: 'ピュアデミグラスソース', date: '2017/01/10', amount: 6000 },
        { id: 17, product: 'だしこんぶ', date: '2017/01/08', amount: 14500 },
        { id: 18, product: 'ピリカラタバスコ', date: '2017/01/12', amount: 4000 },
        { id: 84, product: 'なまわさび', date: '2017/01/21', amount: 8000 },

        { id: 15, product: 'ピュアデミグラスソース', date: '2017/01/10', amount: 6000 },
        { id: 17, product: 'だしこんぶ', date: '2017/01/08', amount: 14500 },
        { id: 18, product: 'ピリカラタバスコ', date: '2017/01/12', amount: 4000 },
        { id: 84, product: 'なまわさび', date: '2017/01/21', amount: 8000 },
      ]
    });
  }

  readonly gridData$: Observable<Record[]> = this.select(state => state.gridData);

}