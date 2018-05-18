import { Component, IterableDiffers, Provider } from '@angular/core';
import { CustomListDifferFactory } from './customListDiffer.factory';
import {DataLine, DataType} from './data.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  viewProviders: [IterableDiffers.extend([new CustomListDifferFactory()]) as Provider],
})
export class AppComponent {
  data: DataType = {
    items: [
      { key: '0', label: 'Label 0' },
      { key: '1', label: 'Label 1' },
      { key: '2', label: 'Label 2' },
      { key: '3', label: 'Label 3' },
      { key: '4', label: 'Label 4' },
      { key: '5', label: 'Label 5' },
      { key: '6', label: 'Label 6' },
      { key: '7', label: 'Label 7' },
      { key: '8', label: 'Label 8' },
      { key: '9', label: 'Label 9' },
      { key: '10', label: 'Label 10' },
    ],
  };

  switchPositionsWithMutation(fromIndex: number, toIndex: number) {
    const item = this.data.items[fromIndex];
    this.data.items[fromIndex] = this.data.items[toIndex];
    this.data.items[toIndex] = item;
  }

  getRandomIndex(): number {
    return Math.floor(Math.random() * this.data.items.length);
  }

  shuffleArrayWithMutation() {
    for (let i = 0; i < this.data.items.length; ++i) {
      this.switchPositionsWithMutation(this.getRandomIndex(), this.getRandomIndex());
    }
  }

  shuffleArrayWithoutMutation() {
    let items = JSON.parse(JSON.stringify(this.data.items));

    for (let i = 0; i < items.length; ++i) {
      const index = this.getRandomIndex();
      items = [items[index], ...items.slice(0, index), ...items.slice(index + 1, items.length)];
    }

    this.data.items = items;
  }
}
