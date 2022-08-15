import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'vsf-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TermsAndConditionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
