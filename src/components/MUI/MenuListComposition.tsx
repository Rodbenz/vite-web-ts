import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { Fade, Typography } from '@mui/material';

export default function MenuListComposition() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event | React.SyntheticEvent) => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                onClick={handleToggle}
            >
                Open Menu
            </Button>
            <Popper
                open={open}
                anchorEl={anchorEl}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
                sx={{ zIndex: 1200 }}
            >
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <div>
                                   
                                </div>
                            </ClickAwayListener>
                        </Paper>
                    </Fade>
                )}
            </Popper>
        </div>
    );
}
