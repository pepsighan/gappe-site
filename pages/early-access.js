import { NextSeo } from "next-seo";
import { GlobalStyles } from "@mui/material";
import gappe from "assets/gappe.png";

export default function EarlyAccess() {
  return (
    <>
      <NextSeo
        title="Gappe - Want to get early access?"
        description="Gappe is a decentralized private messaging app and a wallet."
        openGraph={{
          images: [{ url: gappe.src, alt: "Gappe logo" }],
        }}
      />

      <GlobalStyles
        styles={`
          html {
            margin: 0; 
            height: 100%; 
            overflow: hidden;
          }
          
          iframe {
            position: absolute; 
            top: 0; 
            right: 0; 
            bottom: 0; 
            left: 0; 
            border: 0;
          }
        `}
      />

      <iframe
        src="https://tally.so/r/w8goo3?transparentBackground=1"
        width="100%"
        height="100%"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Want to get early access?"
      />
    </>
  );
}
