import { Component } from '@angular/core';
import { DataType } from './data.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data: DataType = {
    items: {
      0: { key: '0', label: 'Label 0' },
      1: { key: '1', label: 'Label 1' },
      2: { key: '2', label: 'Label 2' },
      3: { key: '3', label: 'Label 3' },
      4: { key: '4', label: 'Label 4' },
      5: { key: '5', label: 'Label 5' },
      6: { key: '6', label: 'Label 6' },
      7: { key: '7', label: 'Label 7' },
      8: { key: '8', label: 'Label 8' },
      9: { key: '9', label: 'Label 9' },
      10: { key: '10', label: 'Label 10' },
    },
  };

  keys = Object.keys(this.data.items);

  getRandomIndex(): number {
    return Math.floor(Math.random() * this.keys.length);
  }

  shuffleArray() {
    let items = JSON.parse(JSON.stringify(this.keys));

    for (let i = 0; i < items.length; ++i) {
      const index = this.getRandomIndex();
      items = [items[index], ...items.slice(0, index), ...items.slice(index + 1, items.length)];
    }

    this.keys = items;
    this.data = JSON.parse(JSON.stringify(this.data));
  }
}
