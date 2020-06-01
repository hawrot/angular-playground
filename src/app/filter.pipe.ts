import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string) {
  if(value.length === 0){
    return value;
  }
  for(const item of value){
    const resultArray = [];
    if(item.status === filterString){
      resultArray.push(item);
    }
    return resultArray;
  }
  }

}
