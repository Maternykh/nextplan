export interface dayType {
  tascName: string;
  dayName: string;
  events: eventType[];
  monthAndYears: number;
  category: categoryType[];
  color: string;
  note: string;
  pattern: string;
  owner: string;
}
export interface dayTypeWithId {
  _id: string;
  tascName: string;
  dayName: string;
  events: eventType[];
  monthAndYears: number;
  category: categoryType[];
  color: string;
  note: string;
  pattern: string;
  owner: string;
}
export interface purpTypeWithId {
  _id: string;
  title: string;
  desc: string;
  value: string;
  isCompleted: boolean;
  owner: string | undefined;
}
export interface purpType {
  title: string;
  desc: string;
  value: string;
  isCompleted: boolean;
  owner: string | undefined;
}
export type categoryType = {
  id: number;
  categ: string;
};
export type monthsAndYears = {
  id: number;
  val: string;
};
export type colorType = {
  namecol: string;
  bordercol: string;
  backgroundcol: string;
};
export type eventType = {
  id: number;
  act: string;
  timeAct: string;
  isCompleted: boolean;
};
export type searchProps = {
  [key: string]: string | string[] | undefined;
};
