import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
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

  ngOnInit(): void {}

  switchPositionsWithMutation(fromIndex: number, toIndex: number) {
    const item = this.data[fromIndex];
    this.data[fromIndex] = this.data[toIndex];
    this.data[toIndex] = item;
  }

  getRandomIndex(): number {
    return Math.floor(Math.random() * this.data.length);
  }

  shuffleArrayWithMutation() {
    const beforeRef = this.data;
    for (let i = 0; i < this.data.length; ++i) {
      this.switchPositionsWithMutation(this.getRandomIndex(), this.getRandomIndex());
    }
    console.log('Has the same ref?', beforeRef === this.data);
  }

  shuffleArrayWithoutMutation() {
    const beforeRef = this.data;
    for (let i = 0; i < this.data.length; ++i) {
      const index = this.getRandomIndex();
      this.data = [
        Object.assign({}, this.data[index]),
        ...this.data.slice(0, index),
        ...this.data.slice(index + 1, this.data.length),
      ];
    }
    console.log('Has the same ref?', beforeRef === this.data);
  }
}
