export interface ILabeledInput {
  label: string;
  type: string;
  name: string;
  //eslint-disable-next-line
  handler: any;
  placeholder?: string;
  errMsg?:string;
  className?: string;
}

export interface ISingleOption {
  label: string;
  value: string;
}

export interface ISelectInput {
  label: string;
  name: string;
  //eslint-disable-next-line
  handler: any;
  options: Array<ISingleOption>;
  errMsg?:string,
}
