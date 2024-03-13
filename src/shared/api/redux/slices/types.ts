export interface CurrencyData {
  Date: string;
  PreviousDate: string;
  PreviousURL: string;
  Timestamp: string;
  Valute: {
    [valuteCode: string]: {
      ID: string;
      NumCode: string;
      CharCode: string;
      Nominal: number;
      Name: string;
      Value: number;
      Previous: number;
    };
  };
}
