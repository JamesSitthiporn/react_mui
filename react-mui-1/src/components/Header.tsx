import * as React from 'react';
import {
  Grid,
  Box,
  Button,
  Modal,
  TextField,
  FormControl,
  Typography
} from "@mui/material"
// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
// eslint-disable-next-line no-empty-pattern
export default function Header({}: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
  <Grid container sx={{alignItems:"center"}}>
    <Grid xs={2}>
      <Box>
        <Typography variant="h6" sx={{alignSelf:"center"}}>
          React MUI
        </Typography>
      </Box>
    </Grid>
    <Grid xs={10}>
      <Button variant="outlined">
        Register
      </Button>
      <Button variant="contained">
        Register
      </Button>
      <Button onClick={handleOpen}>Open modal</Button>
    </Grid>


    
    <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </Box>
</Modal>
  </Grid>)
}
