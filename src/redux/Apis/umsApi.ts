import { AxiosError, AxiosResponse } from "axios";
import { axiosInstance } from "../store";
import * as getURL from "../URLs";

export const reqVisit = async (): Promise<string> => {
  const response = await axiosInstance.get(getURL.getUserManageSystemUrl());
  const { data } = response;

  return data;
};
