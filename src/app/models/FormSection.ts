import { FormItem } from './FormItem';

export interface FormSection {
  type: 'section';
  header: string;
  columns: number;
  items: FormItem[];
}
