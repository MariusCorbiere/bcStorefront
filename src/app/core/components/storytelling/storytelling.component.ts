import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'vsf-storytelling',
  templateUrl: './storytelling.component.html',
  styleUrls: ['./storytelling.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StorytellingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
