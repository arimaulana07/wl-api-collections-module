export interface ApiCallPayload {
  action: string;
  data?: object | null | undefined;
  params?: object | null | any;
}