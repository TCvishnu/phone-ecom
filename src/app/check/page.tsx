"use client";
import { useState, forwardRef } from "react";
import {
  Dialog,
  Slide,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";

import { TransitionProps } from "@mui/material/transitions";

// Transition Component for sliding effect
const SlideTransition = forwardRef(function SlideTransition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="right" ref={ref} {...props} />;
});

const FullHeightModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Modal
      </Button>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={SlideTransition}
        PaperProps={{
          style: {
            width: "100%", // Modal width
            maxWidth: "400px", // Set maximum width
            marginLeft: "auto", // Slide in from the right
          },
        }}
      >
        <AppBar position="static" sx={{ bgcolor: "primary.main" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              x
            </IconButton>
            <Typography variant="h6" sx={{ flex: 1 }}>
              Full-Height Modal
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={{ padding: 20 }}>
          <Typography variant="body1">
            This modal slides in from the right and takes the full height. Add
            any content you need here!
          </Typography>
        </div>
      </Dialog>
    </div>
  );
};

export default FullHeightModal;
