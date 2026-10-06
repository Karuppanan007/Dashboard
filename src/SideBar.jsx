import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import DashboardCustomizeSharpIcon from '@mui/icons-material/DashboardCustomizeSharp'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import WorkspacesIcon from '@mui/icons-material/Workspaces'
import SportsCricketIcon from '@mui/icons-material/SportsCricket'

const SideBar = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <IconButton onClick={() => setOpen(true)}
        sx={{
          position: 'fixed',
          top: 15,
          left: 15,
        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer open={open}  onClose={() => setOpen(false)} anchor="left" hideBackdrop disableScrollLock
        sx={{
          '& .MuiDrawer-paper': {
            width: 230,
            boxSizing: 'border-box'
          }
        }}
      >
        <List>
          <ListItem sx={{ borderBottom: '1px solid' }}>
            <ListItemIcon>
              <SportsCricketIcon sx={{ color: 'black' }} />
            </ListItemIcon>
            <Typography variant="h6"> Cricket</Typography>
            <IconButton onClick={() => setOpen(false)} sx={{ ml: 'auto' }}>
              <CloseIcon />
            </IconButton>
          </ListItem>

          <ListItem disablePadding sx={{ mt: 3 }}>
            <ListItemButton onClick={() => {setOpen(false)}}>
              <ListItemIcon>
                <DashboardCustomizeSharpIcon sx={{ color: 'black' }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => setOpen(false)}>
              <ListItemIcon>
                <HowToRegIcon sx={{ color: 'black' }} />
              </ListItemIcon>
              <ListItemText primary="Teams" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => setOpen(false)}>
              <ListItemIcon>
                <WorkspacesIcon sx={{ color: 'black' }} />
              </ListItemIcon>
              <ListItemText primary="Players" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}

export default SideBar;
