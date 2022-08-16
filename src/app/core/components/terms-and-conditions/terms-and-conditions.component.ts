import { ChangeDetectionStrategy, Component, OnInit, LOCALE_ID, Inject } from '@angular/core';

@Component({
  selector: 'vsf-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TermsAndConditionsComponent implements OnInit {
  constructor(@Inject(LOCALE_ID) public locale: string) { }

  ngOnInit(): void {
  }

}
