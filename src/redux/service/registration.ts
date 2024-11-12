import axios from "axios";
import { IRegistration } from "../types/IRegistration";

async function registrationData(data: IRegistration): Promise<IRegistration> {
  return axios.post("http://localhost:4000/auth/register", data);
}

export default registrationData;
