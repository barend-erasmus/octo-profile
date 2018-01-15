import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtml } from '@angular/platform-browser/src/security/dom_sanitization_service';

@Pipe({
  name: 'lineBreak'
})
export class LineBreakPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  public transform(value: string, args?: any): SafeHtml {
    if (!args) {
      return this.sanitizer.bypassSecurityTrustHtml(value.split(',').join('<br />'));
    } else {
      return this.sanitizer.bypassSecurityTrustHtml(value.split(',').slice(0, args).join('<br />'));
    }
  }

}
