export interface IModalOptions {
  title: String;
  isNextModalRequired: boolean;
  content: Object;
  nextModalOptions: IModalOptions;
  customComponent: any;
  headerStyle:String,
  footerStyle:String,
  bodyStyle:String,
  btnStyle:String
}
