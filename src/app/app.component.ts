import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data = [
    { label: 'Label 0' },
    { label: 'Label 1' },
    { label: 'Label 2' },
    { label: 'Label 3' },
    { label: 'Label 4' },
    { label: 'Label 5' },
    { label: 'Label 6' },
    { label: 'Label 7' },
    { label: 'Label 8' },
    { label: 'Label 9' },
    { label: 'Label 10' },
  ];

  switchPositionsWithMutation(fromIndex: number, toIndex: number) {
    const item = this.data[fromIndex];
    this.data[fromIndex] = this.data[toIndex];
    this.data[toIndex] = item;
  }

  getRandomIndex(): number {
    return Math.floor(Math.random() * this.data.length);
  }

  shuffleArrayWithMutation() {
    for (let i = 0; i < this.data.length; ++i) {
      this.switchPositionsWithMutation(this.getRandomIndex(), this.getRandomIndex());
    }
  }

  shuffleArrayWithoutMutation() {
    let dataCopy = JSON.parse(JSON.stringify(this.data));

    for (let i = 0; i < dataCopy.length; ++i) {
      const index = this.getRandomIndex();
      dataCopy = [
        dataCopy[index],
        ...dataCopy.slice(0, index),
        ...dataCopy.slice(index + 1, dataCopy.length),
      ];
    }

    this.data = dataCopy;
  }

  trackByFn(index: number, line) {
    return line.label;
  }
}
