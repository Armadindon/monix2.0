import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import logo from "../assets/logos/logo-256_x_256.png";

const NixBar = () => {
  
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Monix
        </Typography>
        <Box sx={{marginLeft: "auto"}}>
          <img src={logo} width={64} height={64} alt="Logo du club Nix"></img>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NixBar;
