import Logo from "components/Logo";
import {
  Box,
  Button,
  Chip,
  Container,
  GlobalStyles,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { FaEarlybirds, FaTwitter } from "react-icons/fa";
import { NextSeo } from "next-seo";
import gappe from "assets/gappe.png";

export default function Home() {
  return (
    <Container>
      <NextSeo
        title="Gappe - Decentralized Private Messaging App"
        description="Gappe is a decentralized private messaging app and a wallet."
        openGraph={{
          images: [{ url: gappe.src, alt: "Gappe logo" }],
        }}
      />

      <GlobalStyles
        styles={`
          body {
            background-color: #EAE5FE;
          }
        `}
      />
      <Stack alignItems="center" sx={{ mt: { md: 4 } }}>
        <Box sx={{ width: 400, ml: { md: -5 } }}>
          <Logo />
        </Box>
        <Typography variant="h6" textAlign="center" sx={{ mt: -16 }}>
          A decentralized private messaging app and a wallet
        </Typography>

        <Grid container spacing={1} justifyContent="center" sx={{ mt: 2 }}>
          <Grid item>
            <Chip label="Built on Solana" variant="outlined" color="default" />
          </Grid>{" "}
          <Grid item>
            <Chip
              label="End-to-end Encrypted"
              variant="outlined"
              color="default"
            />
          </Grid>
          <Grid item>
            <Chip label="Decentralized" variant="outlined" color="default" />
          </Grid>
          <Grid item>
            <Chip
              label="Censor-ship Resistant"
              variant="outlined"
              color="default"
            />
          </Grid>
          <Grid item>
            <Chip label="Emoji NFT" variant="outlined" color="default" />
          </Grid>
        </Grid>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems="center"
          spacing={2}
          sx={{ mt: 8 }}
        >
          <Button
            component="a"
            variant="outlined"
            disableElevation
            href="https://twitter.com/gappe_app"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              textTransform: "none",
              fontWeight: 700,
              width: {
                xs: "100%",
                sm: "auto",
              },
            }}
          >
            <Box component={FaTwitter} sx={{ mr: 1 }} /> Follow Progress on
            Twitter
          </Button>

          <Button
            variant="contained"
            disableElevation
            sx={{
              mt: 8,
              textTransform: "none",
              fontWeight: 700,
              width: {
                xs: "100%",
                sm: "auto",
              },
            }}
          >
            <Box component={FaEarlybirds} sx={{ mr: 1 }} />
            Get Early Access
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
