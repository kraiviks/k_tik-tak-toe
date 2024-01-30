import clsx from "clsx";
import { Inter } from "next/font/google";
import "../styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={clsx(inter.className, "text-slate-900")}>
      <Component {...pageProps} />
      <div id="modals"></div>
    </div>
  );
}
