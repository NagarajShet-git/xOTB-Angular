import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from "@angular/core";
import { MatCheckbox } from '@angular/material';

@Component({
  selector: "app-form-generator",
  templateUrl: "./form-generator.component.html",
  styleUrls: ["./form-generator.component.css"]
})
export class FormGeneratorComponent implements OnInit {
  @Input() jsonFormData;
  @Input() formGeneratorName;

  @Output() btnEvent = new EventEmitter<object>();

  public selected: string;
  @ViewChild('ngForm') ngForm: any;
  constructor() { }

  ngOnInit() { }


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
}
