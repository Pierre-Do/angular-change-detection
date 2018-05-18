import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-line',
  templateUrl: './data-line.component.html',
  styleUrls: ['./data-line.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataLineComponent implements OnInit {
  @Input() line: { label: string };

  constructor() {}

  ngOnInit() {}
}
