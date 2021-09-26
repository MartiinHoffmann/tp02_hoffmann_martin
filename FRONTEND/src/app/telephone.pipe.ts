import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telephone'
})
export class TelephonePipe implements PipeTransform {

  transform(telephone: string): string {
    return "+33 " + telephone.substring(1);  
  }

}
