import axios, {AxiosRequestConfig, AxiosResponse} from "axios";


const api= axios.create({
    baseURL:process.env.NEXT_PUBLIC_API_URL,
    withCredentials:true,
})



const get= <T = any>(url:string,queryParams: AxiosRequestConfig): Promise<AxiosResponse<T>>=>{

    const response = api.get<T>(url,queryParams);
    return response;
}  
const post = <T = any>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  return api.post<T>(url, data, config);
};

 const put = <T = any>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  return api.put<T>(url, data, config);
};

 const patch = <T = any>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  return api.patch<T>(url, data, config);
};

 const deleteRequest = <T = any>(
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  return api.delete<T>(url, config);
};

export const ApiService = {
  get,
  post,
  put,
  patch,
  delete: deleteRequest,
};