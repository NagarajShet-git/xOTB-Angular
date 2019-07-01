# exclude-selected-values-dropdown-angular-reactive-forms-groups

There are cases in which, there can be list of dropdowns whose selected value is not supposed to be listed in the rest of the dropdowns of the same FormArray. In such cases, excluding the already selected value of the dropdowns from the other dropdowns of the same FormArray can be achieved using Angular Custom Pipes.

FormGroup usually helps us to group FormControl elements, whereas FormArray helps us to create a list/collection of FormGroups. FormArray enables the addition and deletion of FormGroup having similar or variety of FormControls in a Angular Reactive Form.

The main advantage of this component lies in exclusion of already selcted values from rest of the dropdowns. When a dropdown is selected with an option, the same option will not be available in the other dropdowns of the same form group. This mechanism is achieved using Angular Custom Pipes. The pipe here is named as "ExcludeSelectedValuePipe", which helps in the removal of already selected values. This component includes basic validation for adding and removing the Controls to the Form.

Usage:  Copy and Paste the code from the files into your application and make the best use of it. All the Best !!!

Click https://stackblitz.com/edit/exclude-selected-values-dropdown-angular-reactive-forms-groups for demo
