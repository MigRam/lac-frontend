import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatType'
})
export class FormatTypePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case "audio/x-wav":
        return (value = "Audio");
      case "application/pdf":
        return (value = "PDF");
      case "text/eaf+xml":
        return (value = "EAF");
      case "text/x-eaf+xml":
        return (value = "EAF");
      case "text/cmdi+xml":
        return (value = "Bundle");
      case "video/mp4":
        return (value = "Video");
      case "image/jpeg":
        return (value = "Image");
      case "text/plain":
        return (value = "Text");
      default:
        return value;
    }
  }

}
