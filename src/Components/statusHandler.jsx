import React from 'react';
import { Typography, Box, CircularProgress, Alert, AlertTitle } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import InfoIcon from '@mui/icons-material/Info';

const StatusHandler = ({ isLoading, isError, errorMessage, isEmpty }) => {
  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <CircularProgress />
        <Typography variant="h6" align="center" sx={{ marginTop: 2 }}>
          Loading...
        </Typography>
      </Box>
    );
  }

  if (isError) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Alert severity="error" icon={<ErrorOutlineIcon fontSize="inherit" />}>
          <AlertTitle>Error</AlertTitle>
          {errorMessage || 'Error loading data'}
        </Alert>
      </Box>
    );
  }

  if (isEmpty) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Alert severity="info" icon={<InfoIcon fontSize="inherit" />}>
          <AlertTitle>No Data</AlertTitle>
          No data available
        </Alert>
      </Box>
    );
  }

  return null;
};

export default StatusHandler;