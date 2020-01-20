export class LeaveModel {
    constructor(
      public id: string,
      public fromDate:String,
      public toDate:String,
      public firstname: string,
      public lastname: string,
      public empid: string,
      public gender: string,
      public email: string,
      public moblieNo: string,
      public reason:String
    ){}
}