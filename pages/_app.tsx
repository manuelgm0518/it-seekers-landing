import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html,
        .roboto {
          font-family: "Roboto";
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        .rubik {
          font-family: "Rubik";
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
