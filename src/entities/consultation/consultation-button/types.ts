export type ConsultationButtonProps = {
  text: {
    mobile: string;
    desktop: string;
  };
  type: 'contained' | 'outlined';
  disabled?: boolean;
};
