import globalClassNames, { ClassNames as GlobalClassNames } from "./style.d";
declare const classNames: typeof globalClassNames & {
  readonly green: "green";
  readonly header1: "header1";
  readonly active: "active";
  readonly input: "input";
};
export default classNames;
export type ClassNames =
  | "green"
  | "header1"
  | "active"
  | "input"
  | GlobalClassNames;
