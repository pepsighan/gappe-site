import Head from "next/head";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import theme from "../configs/theme";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
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
