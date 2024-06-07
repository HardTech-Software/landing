import { Exo_2 } from "@next/font/google";

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["400", "700"], // Puedes especificar los pesos que necesites
});

import { ComponentType } from "react";

export default function MyApp({
  Component,
  pageProps,
}: {
  Component: ComponentType<any>;
  pageProps: any;
}) {
  return (
    <div className={exo2.className}>
      <Component {...pageProps} />
    </div>
  );
}
