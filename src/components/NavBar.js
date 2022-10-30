import GitHubIcon from '@mui/icons-material/GitHub';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TeaCode Task
          </Typography>
          <a href="https://github.com/rdmochih/TeaCode-Test-Contacts" target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}>
            <Box sx={{display: 'flex', alignItems: 'center', color: 'white'}}>
              <GitHubIcon sx={{mr:1}}/>GitHub
            </Box>
          </a>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
