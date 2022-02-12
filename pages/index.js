import Logo from "components/Logo";
import {
  Box,
  Button,
  Chip,
  GlobalStyles,
  Stack,
  Typography,
} from "@mui/material";
import { FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <GlobalStyles
        styles={`
          body {
            background-color: #EAE5FE;
          }
        `}
      />
      <Stack alignItems="center" sx={{ mt: 4 }}>
        <Box sx={{ width: 400, ml: -5 }}>
          <Logo />
        </Box>
        <Typography variant="h6" sx={{ mt: -16 }}>
          A decentralized private messaging app and a wallet
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <Chip label="Built on Solana" variant="outlined" color="primary" />
          <Chip
            label="End-to-end Encrypted"
            variant="outlined"
            color="primary"
          />
          <Chip label="Decentralized" variant="outlined" color="primary" />
          <Chip
            label="Censor-ship Resistant"
            variant="outlined"
            color="primary"
          />
          <Chip label="Emoji NFT" variant="outlined" color="primary" />
        </Stack>

        <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 8 }}>
          <Button
            component="a"
            variant="outlined"
            disableElevation
            href="https://twitter.com/gappe_app"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textTransform: "none" }}
          >
            <Box component={FaTwitter} sx={{ mr: 1 }} /> Follow Progress on
            Twitter
          </Button>

          <Button
            variant="contained"
            disableElevation
            sx={{ mt: 8, textTransform: "none" }}
          >
            Get Early Access
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
