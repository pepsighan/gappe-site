import Head from "next/head";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import theme from "../configs/theme";
import gappe from "../assets/gappe.png";
import { NextSeo } from "next-seo";

export default function MyApp({ Component, pageProps }) {
  const title = "Gappe - Decentralized Private Messaging App";
  const description =
    "Gappe is a decentralized private messaging app and a wallet.";
  const image = `https://www.gappe.app${gappe.src}`;
  const imageAlt = "Gappe logo";

  return (
    <ThemeProvider theme={theme}>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          images: [{ url: image, alt: imageAlt }],
        }}
        additionalMetaTags={[
          { name: "twitter:title", content: title },
          { name: "twitter:description", content: description },
          { name: "twitter:image", content: image },
          { name: "twitter:image:alt", content: imageAlt },
        ]}
        twitter={{
          cardType: "summary_large_image",
          site: "@gappe_app",
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
