import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';

const ConfirmDialog = ({open,setOpen, title, message, onConfirm}) => {



    return (
        <Dialog open={open} onClose={()=>setOpen(false)}>
        <DialogTitle>{title || "Confirm"}</DialogTitle>
        <DialogContent>{message || "Are you sure?"}</DialogContent>
        <DialogActions>
          <Button onClick={onConfirm}>Ok</Button>
          <Button onClick={()=>setOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    )
}

export default ConfirmDialog;