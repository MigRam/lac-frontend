import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'lac-apidoc',
  templateUrl: './apidoc.component.html',
  styleUrls: ['./apidoc.component.css']
})
export class ApidocComponent implements OnInit {
  
  apiDocUrl: SafeResourceUrl;
  
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.apiDocUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://grails-dev.rrz.uni-koeln.de/ka3-doc/');
  }

}
