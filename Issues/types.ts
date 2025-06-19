export interface Issue {
  id: string;
  description: string;
  severity: 'High' | 'Medium' | 'Low';
  [key: string]: any;
}
export interface Filter {
  severity?: 'High' | 'Medium' | 'Low';
  type?: string;
  keyword?: string;
}