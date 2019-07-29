import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from "@angular/core";
import { MatCheckbox } from '@angular/material';

@Component({
  selector: "app-form-generator",
  templateUrl: "./form-generator-tmp.component.html",
  styleUrls: ["./form-generator.component.css"]
})
export class FormGeneratorComponent implements OnInit {
  @Input() jsonFormData;
  @Input() formGeneratorName;
  // @Input() rowCount:number = 3;

  public fxPercent: number=100;

  @Output() btnEvent = new EventEmitter<object>();
  @Input() set rowCount(value: number) {
    switch (value) {
      case 1:
        this.fxPercent = 100;
        break;
      case 2:
        this.fxPercent = 48;
        break;

      case 3:
        this.fxPercent = 30;
        break;

      case 4:
        this.fxPercent = 22;
        break;

      // case 5:
      //   this.fxPercent = 8;
      //   break;
      default:
        this.fxPercent = 100;
    }
  }


  public selected: string;
@ViewChild('ngForm') ngForm: any;
constructor() { }

ngOnInit() {
  // this.fxPercent = 22;
}


chechType(data) {
  return (
    data.type == "text" ||
    data.type == "password" ||
    data.type == "number" ||
    data.type == "tel" ||
    data.type == "email" ||
    data.type == "date"
  );
}

onButtonClick(btnObj) {
  let obj = {
    name: btnObj.name,
    value: btnObj.value,
    updatedJsonFormData: this.jsonFormData
  };
  this.btnEvent.emit(obj);
}

calculate(w){
  let per;
  per = w / 3;
  // per =
}
}
