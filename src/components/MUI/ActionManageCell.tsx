import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Popper from "@mui/material/Popper";
import Paper from "@mui/material/Paper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ListItemIcon from "@mui/material/ListItemIcon";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ListIcon from "@mui/icons-material/List";
import MenuItem from "@mui/material/MenuItem";

interface ActionManageCell {
  element: any;
}

export default function ActionManageCell(_props: ActionManageCell) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Avatar
        variant={"circular"}
        id="basic-button"
        aria-controls={open ? "basic-popper" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <ListIcon />
      </Avatar>
      <Popper
        id="basic-popper"
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={handleClose}>
            <Paper
              {...TransitionProps}
              sx={{
                mt: 1.5,
                p: 1,
                boxShadow: 1,
                borderRadius: 1,
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 30,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: -1,
                },
              }}
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <ZoomInIcon fontSize={"medium"} />
                </ListItemIcon>
                View
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <EditIcon fontSize={"medium"} />
                </ListItemIcon>
                Edit
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <DeleteIcon fontSize={"medium"} />
                </ListItemIcon>
                Delete
              </MenuItem>
            </Paper>
          </ClickAwayListener>
        )}
      </Popper>
    </div>
  );
}
