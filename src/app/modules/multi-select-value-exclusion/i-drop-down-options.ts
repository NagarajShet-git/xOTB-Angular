export interface IDropDownOptions {
    mainKey : String,
    subKeys : Array<String>
}
export interface ISelectorOptions{
    dropdownValues:IDropDownOptions[],
    title:String,
    extraSelectorsRequired:boolean,
    styles:{
        containerStyle:String,
        headerStyle:String,
        mainSelectorStyle : String,
        mainOptionStyle : String,
        subSelectorStyle : String,
        subOptionStyle : String
    }
}