import { z } from "zod";

export const UserModel = z.object({
  id: z.string(),
  username: z.string().min(1, "Wajib Diisi!!!"),
  password: z.string().min(1, "Wajib Diisi!!!"),
  name: z.string(),
  image: z.string().nullish(),
  phone: z.string(),
  roleId: z.string(),
  active: z.boolean(),
});

export type TUserModel = z.infer<typeof UserModel>;

export type MenuList = {
  id: string;
  title: string;
  link: string;
  icon?: React.ReactNode;
  children?: MenuList[];
};
