import axios from "axios";
import { IRegistration } from "../types/IRegistration";

async function registrationService(
  data: IRegistration
): Promise<IRegistration> {
  const response = await axios.post(
    "http://localhost:4000/auth/register",
    data
  );
  return response.data;
}

export default registrationService;
