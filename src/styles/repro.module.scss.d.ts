import globalClassNames, { ClassNames as GlobalClassNames } from "..style.d";
declare const classNames: typeof globalClassNames & {
  readonly reproClass: "reproClass";
};
export default classNames;
export type ClassNames = "reproClass" | GlobalClassNames;
