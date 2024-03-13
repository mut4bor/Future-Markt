export type ConsultationInputProps = {
  type: 'text' | 'tel';
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
