import { AxiosError, AxiosResponse } from "axios";
import { axiosInstance } from "../store";
import { getUserManageSystemUrl } from "../URLs";

export const reqVisit = async (): Promise<string> => {
  const headers = {
    Accept: "*/*",
    "Content-type": "application/json; charset=UTF-8",
  };

  const { data } = await axiosInstance.get(getUserManageSystemUrl(), {
    headers,
  });

  return data;
};
