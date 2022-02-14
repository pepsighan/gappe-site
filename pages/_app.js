import Head from "next/head";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import theme from "../configs/theme";
import gappe from "../assets/gappe.png";
import { NextSeo } from "next-seo";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <NextSeo
        title="Gappe - Decentralized Private Messaging App"
        description="Gappe is a decentralized private messaging app and a wallet."
        openGraph={{
          images: [
            { url: `https://www.gappe.app${gappe.src}`, alt: "Gappe logo" },
          ],
        }}
      />

      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline />
      <GlobalStyles
        styles={`
          @font-face {
            font-family: 'GlacialIndifference';
            src: url('/fonts/GlacialIndifference/GlacialIndifference-Regular.ttf');
            font-weight: 400;
            font-style: normal;
          }
        `}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
