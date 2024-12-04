import { ILogin } from "../types/ILogin";
import authFetch from "../../axiosbase/custom";

async function loginService(data: ILogin): Promise<ILogin> {
  const response = await authFetch.post("/auth/login", data);
  return response.data;
}

export default loginService;
