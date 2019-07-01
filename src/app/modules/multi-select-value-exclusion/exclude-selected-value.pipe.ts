import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excludeSelectedValue'
})
export class ExcludeSelectedValuePipe implements PipeTransform {

  transform(fullArray, allSelected, currentSelection) {
    let newOptionsList = []; 
    fullArray.forEach(function (model) {
      let addToArray=true;
      allSelected.forEach(function (key) {
        if(key.mainKeyChosen===model.mainKey){
          addToArray=false;
        }
      });
      if(addToArray || model.mainKey === currentSelection){
        newOptionsList.push(model);
      }
    });
    return newOptionsList;
  }

}
