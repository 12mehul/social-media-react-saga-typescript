import { IRegistration } from "../types/IRegistration";
import authFetch from "../../axiosbase/custom";

async function registrationService(
  data: IRegistration
): Promise<IRegistration> {
  const response = await authFetch.post("/auth/register", data);
  return response.data;
}

export default registrationService;
