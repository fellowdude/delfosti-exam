import { ILDVDetail } from "./ldv.interface";

export interface IUser{
  user_code: string;
  name: string;
  father_last_name: string;
  mother_last_name: string;
  is_admin: boolean;
  role: ILDVDetail;
  create_date: Date;
  update_date: Date;
}
