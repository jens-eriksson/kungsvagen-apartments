import { Pipe, PipeTransform } from '@angular/core';
import { v } from '@angular/core/src/render3';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 25, completeWords = false, ellipsis = '...') {
    if (completeWords) {
      limit = value.substr(0, 13).lastIndexOf(' ');
    }
    if(value.length <= limit) {
      return value;
    }
    else {
      return `${value.substr(0, limit)}${ellipsis}`;
    }
    
  }
}
