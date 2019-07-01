export interface IModalOptions{
    title:String,
    isNextModalRequired:boolean,
    content:Object,
    nextModalOptions:IModalOptions
}