import React from 'react';
import {
  Box,
  Button,
  Modal,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

const style = (isMobile) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: isMobile ? '90%' : 400,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
});


const RaiseRequestModal = ({
  isOpen,
  onClose,
  formFields,
  handleFormChange,
  handleFormSubmit,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Paper sx={style(isMobile)}>
        <Typography id="modal-title" variant="h6" component="h2">
          Raise a New Request
        </Typography>
        <Box
          component="form"
          onSubmit={handleFormSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            marginTop: '20px',
          }}
        >
          <TextField
            label="Title"
            variant="outlined"
            name="title"
            value={formFields.title}
            onChange={handleFormChange}
            fullWidth
            required
          />
          <TextField
            label="DOI Number"
            variant="outlined"
            name="doi"
            value={formFields.doi}
            onChange={handleFormChange}
            fullWidth
            required
          />
          <TextField
            label="Author"
            variant="outlined"
            name="author"
            value={formFields.author}
            onChange={handleFormChange}
            fullWidth
            required
          />
          <TextField
            label="Document Type"
            variant="outlined"
            name="documentType"
            value={formFields.documentType}
            onChange={handleFormChange}
            fullWidth
            required
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              borderRadius: 2,
              fontWeight: 'bold',
              fontSize: '1rem',
            }}
          >
            Submit Request
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
};

export default RaiseRequestModal;