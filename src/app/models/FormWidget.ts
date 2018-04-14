import { FormSection } from './FormSection';

export interface FormWidget {
  id: number;
  name: string;
  type: 'form';
  items: FormSection[];
}
