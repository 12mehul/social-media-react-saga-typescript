import axios from "axios";
import { ILogin } from "../types/ILogin";

async function loginService(data: ILogin): Promise<ILogin> {
  const response = await axios.post("http://localhost:4000/auth/login", data);
  return response.data;
}

export default loginService;
