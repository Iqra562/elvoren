import { ApiService } from "@/lib/Api.service";

const authServiceUrl ={
    auth:'/auth'
}

export interface RegisterPayload {
    name:string,
    email:string,
    password:string
}

export interface RegisterResponse {
    id:string,
    name:string,
    email:string,
    
}


const registerUser = async(payload : RegisterPayload) : Promise<RegisterResponse>=>{
 const response = await  ApiService.post<RegisterResponse>(`${authServiceUrl.auth}/signup`,payload);
 return response.data;
}


export{
    registerUser
}