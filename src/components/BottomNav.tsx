'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

// Import your icons
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';

import { useRouter } from 'next/navigation';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0); // State to track the selected icon
  const router = useRouter(); // Next.js router for navigation

  const handleNavigation = (newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        router.push('/');  // Navigate to Home
        break;
      case 1:
        router.push('/profil');  // Navigate to Profile
        break;
      case 2:
        router.push('/prispevok');  // Navigate to Uploads
        break;
      case 3:
        router.push('/auth/registracia');  // Navigate to Registration
        break;
      case 4:
        router.push('/auth/prihlasenie');  // Navigate to 
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => handleNavigation(newValue)}
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#ffffff',  // Background color for better visibility
          zIndex: 1000,  // Ensure it's above other elements
          borderTop: '1px solid #e0e0e0',  // Add a border for separation
        }}
      >
        <BottomNavigationAction label="Domov" icon={<HomeIcon sx={{ fontSize: 30 }} />} />
        <BottomNavigationAction label="Profil" icon={<PersonIcon sx={{ fontSize: 30 }} />} />
        <BottomNavigationAction label="Prispevky" icon={<FileUploadIcon sx={{ fontSize: 30 }} />} />
        <BottomNavigationAction label="Registracia" icon={<AppRegistrationIcon sx={{ fontSize: 30 }} />} />
        <BottomNavigationAction label="Prihlasenie" icon={<LoginIcon sx={{ fontSize: 30 }} />} />
      </BottomNavigation>
    </Box>
  );
}
