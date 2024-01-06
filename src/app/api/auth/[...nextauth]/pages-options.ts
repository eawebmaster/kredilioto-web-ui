import { PagesOptions } from "next-auth";
import route from "@/lib/route";
export const pagesOptions: Partial<PagesOptions> = {
  signIn: route.login,
  error: route.login,
};
