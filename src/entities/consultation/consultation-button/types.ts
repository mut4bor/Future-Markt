export type ConsultationButtonProps = {
  onClick: () => void;
  text: {
    mobile: string;
    desktop: string;
  };
  type: 'contained' | 'outlined';
};
