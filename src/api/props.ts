export interface FetchProps {
  endPoint?: string;
  body?: any;
}

export type FetchResult = {
  data?: any;
  error?: any;
};
