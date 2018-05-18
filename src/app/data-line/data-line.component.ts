import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-data-line',
  templateUrl: './data-line.component.html',
  styleUrls: ['./data-line.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DataLineComponent implements OnInit, OnChanges {
  @Input() line: { label: string };

  constructor(private ref: ChangeDetectorRef) {
    this.ref.detach();
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(
      'changed',
      changes['line'].firstChange,
      changes['line'].previousValue,
      changes['line'].currentValue
    );
    this.ref.detectChanges();
  }
}
