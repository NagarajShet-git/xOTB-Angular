import { Component } from '@angular/core';

import {ISelectorOptions} from './modules/multi-select-value-exclusion/i-drop-down-options';
import {IModalOptions} from './modules/modal-window/i-modal-window-options';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EDGE-xOTB';
  height: any = 0;
  isDemo: boolean = true;
  isDocumentation: boolean = false;
  isOthers: boolean = false;
  isMore: boolean = false;
  position:string='relative';
  isExpand:boolean = false;
  formJson:object;
  customFormJson:object;
  imagesData:object;

  selectorOptions:ISelectorOptions;
  selectorOptions1:ISelectorOptions;
  modalOptions:IModalOptions;

  constructor(private _http: HttpClient){}

  ngOnInit() {
    this.getFormInfo();
    this.getImages();
    this.getFormInfoCustom();
    this.height = window.innerHeight - 87;
    // this.height = window.outerHeight;
    // this.position = 'fixed';

    this.selectorOptions={
      dropdownValues:[
        { "mainKey": "Option A",
          "subKeys": ["AA", "AB", "AC", "AD"]
        },
        {
          "mainKey": "Option B",
          "subKeys": ["BA", "BB", "BC", "BD"]
        },
        {
          "mainKey": "Option C",
          "subKeys": ["CA", "CB", "CC", "CD"]
        },
        {
          "mainKey": "Option D",
          "subKeys": ["DA", "DB", "DC", "DD"]
        }],
        title:"Select category and sub-category",
        styles:{
          containerStyle:"containerStyle",
          headerStyle:"headerStyle",
          mainSelectorStyle : "",
          mainOptionStyle : "",
          subSelectorStyle : "",
          subOptionStyle : ""
        },
        extraSelectorsRequired:true
    };
    this.selectorOptions1={
      dropdownValues:[
        { "mainKey": "Option A",
          "subKeys": ["AA", "AB", "AC", "AD"]
        },
        {
          "mainKey": "Option B",
          "subKeys": ["BA", "BB", "BC", "BD"]
        },
        {
          "mainKey": "Option C",
          "subKeys": ["CA", "CB", "CC", "CD"]
        },
        {
          "mainKey": "Option D",
          "subKeys": ["DA", "DB", "DC", "DD"]
        }],
        title:"Select category and sub-category",
        styles:{
          containerStyle:"containerStyle",
          headerStyle:"headerStyle",
          mainSelectorStyle : "mainSelectorStyle",
          mainOptionStyle : "mainOptionStyle",
          subSelectorStyle : "subSelectorStyle",
          subOptionStyle : "subOptionStyle"
        },
        extraSelectorsRequired:false
    };
    this.modalOptions={
      title:"First Modal Window",
      isNextModalRequired:true,
      content:"Your Content Here",
      nextModalOptions:{
        title:"Second Modal Window",
        isNextModalRequired:true,
        content:"Your Content Here",
        nextModalOptions:{
          title:"Third Modal Window",
          isNextModalRequired:false,
          content:"Your Content Here",
          nextModalOptions:null
        }
      }
    }
  }

  onSpeedMeter(value){
    console.log('speed meter value '+value);
  }

getFormInfo() {

  this._http.get('/assets/formdata.json').subscribe((res: any) => {

    this.formJson = res;

  }, error => {

    console.log(error);

  });

}

getFormInfoCustom() {

  this._http.get('/assets/fromdata1.json').subscribe((res: any) => {

    this.customFormJson = res;

  }, error => {

    console.log(error);

  });

}


onDynamicFormButtonInfor(obj){
  console.log(obj);
}

onImageSelected(obj){
  console.log(obj);
}

getImages() {
  this._http.get('./assets/img.json').subscribe((res: any) => {

   this.imagesData = res;

  }, error => {

    console.log(error);

  });

}

onAppDynamicForm(obj){
  console.log(obj);
}

deleteControl(event:any){
  console.log("deleteControl",event);
}
addFormControl(event:any){
  console.log("addFormControl",event);
}
onChangeSubOption(event:any){
  console.log("onChangeSubOption",event);
}
onChange(event:any){
  console.log("onChange",event);
}

}

