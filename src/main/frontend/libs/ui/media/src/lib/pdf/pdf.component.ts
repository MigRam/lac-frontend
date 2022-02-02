import { Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'ui-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PdfComponent implements OnInit {

  @Input() pdfSource;
  constructor() { }

  ngOnInit() {
  }

}
