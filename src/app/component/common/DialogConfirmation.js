import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

function DialogConfirmation({handleClose, handleAccept, open, title, content}) {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {content}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleAccept}>Đồng ý</Button>
                <Button onClick={handleClose}>Không</Button>
            </DialogActions>
        </Dialog>
    );
}

export default DialogConfirmation;