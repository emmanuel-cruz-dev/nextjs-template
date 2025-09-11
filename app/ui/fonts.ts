import { Lusitana, Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});
