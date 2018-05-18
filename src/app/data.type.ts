export interface DataType {
  items: {[key: number]: DataLine};
}

export interface DataLine {
  key: string;
  label: string;
}
