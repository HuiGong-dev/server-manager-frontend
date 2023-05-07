import { Server } from './server';

export interface CustomResponse {
  timeStamp: Date;
  statusCode: number;
  status: string;
  message: string;
  data: { servers?: Server[]; server?: Server };
}
