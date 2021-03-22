import axios, { AxiosRequestConfig } from 'axios';
import { message } from 'antd';
import { API_HOST } from '../constant';

interface PromiseProps {
  isSuccess: boolean;
  data: User[];
  resultCode: number;
  resultMessage: string;
}

export const ResultCode = {
  Success: 0
};

export function callApi({
  method = 'get',
  url,
  params
}: AxiosRequestConfig): Promise<PromiseProps> {
  return axios({
    url,
    method,
    baseURL: API_HOST,
    params,
    withCredentials: true
  }).then(response => {
    const { resultCode, resultMessage } = response.data;
    if (resultCode < 0) {
      message.error(resultMessage);
    }
    return {
      isSuccess: resultCode === ResultCode.Success,
      data: response.data.data,
      resultCode,
      resultMessage
    };
  });
}
