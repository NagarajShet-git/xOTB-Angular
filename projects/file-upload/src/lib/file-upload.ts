import {
  Validator,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import {
  Component,
  ChangeDetectionStrategy,
  OnChanges,
  Input,
  TemplateRef,
  HostBinding,
  ElementRef,
  Renderer2,
  SimpleChanges
} from '@angular/core';
import { InputBoolean, InputNumber } from 'ng-xotb/utility';
import { uniqueId } from 'ng-xotb/utility';
import { isFileTypeAccepted } from './file-upload.util';

@Component({
  selector: 'xotb-file-upload',
  templateUrl: './file-upload.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: XotbFileUpload,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: XotbFileUpload,
      multi: true
    }
  ],
  styles: []
})
export class XotbFileUpload
  implements ControlValueAccessor, Validator, OnChanges {
  @Input() label: string | TemplateRef<any>;

  @Input() accept: string | string[] = null;

  @Input() @InputBoolean() disabled = false;

  @Input() @InputNumber() maxFiles = 1;

  @Input() @InputNumber() maxFilesize = 0;

  /**
   * Message to display when there is in an error state.
   */
  @HostBinding('class.xotb-has-error')
  @Input()
  error: string | TemplateRef<any> = null;

  /**
   * Text for button to open file selector.
   */
  @Input() uploadButtonLabel = 'Upload Files';

  /**
   * Text to display inside drop zone.
   */
  @Input() dropZoneLabel = 'or Drop Files';

  uid = uniqueId('file-upload');

  isDragOver = false;

  files: File[] = [];

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.element.nativeElement, 'xotb-form-element');
  }

  onChange: Function | null = null;

  onTouched = () => {};

  validatorChange = () => {};

  writeValue(value: File[]) {
    this.files = value;
  }

  registerOnChange(fn: (value: any) => any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => any): void {
    this.onTouched = fn;
  }

  registerOnValidatorChange(fn: () => void): void {
    this.validatorChange = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  validate(c: AbstractControl): ValidationErrors | null {
    const files = c.value as File[];

    if (!files || files.length === 0) {
      return null;
    }

    if (this.maxFiles > 0 && files.length > this.maxFiles) {
      return { xotbFileUpload: { maxFiles: files.length } };
    }

    for (let i = 0, n = files.length; i < n; i++) {
      const file = files[i];
      if (this.accept && !isFileTypeAccepted(this.accept, file)) {
        return { xotbFileUpload: { invalidType: file } };
      }
      if (this.maxFilesize && file.size > this.maxFilesize) {
        return { xotbFileUpload: { maxFilesize: file } };
      }
    }

    return null;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['maxFiles'] || changes['maxFilesize'] || changes['accept']) {
      this.validatorChange();
    }
  }

  onDropZone(evt: DragEvent) {
    // trapEvent(evt);
    // if (this.disabled) {
    //   return;
    // }

    this.isDragOver = evt.type === 'dragover';

    if (evt.type === 'drop' && evt.dataTransfer) {
      this.select(evt.dataTransfer.files);
    }
  }

  onInputChange(files: FileList) {
    this.select(files);
  }

  private select(files: FileList) {
    this.onChange(Array.from(files));
  }
}
