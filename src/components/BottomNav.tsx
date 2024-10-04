"use client"

import * as React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Home, AccountCircle, CloudUpload, HowToReg, ExitToApp } from '@mui/icons-material';
import { useState } from 'react';
import { useRouter } from 'next/router';

const BottomNav = () => {
  const [value, setValue] = useState(0);  // Track the selected icon
  const router = useRouter();

  const handleNavigation = (newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        router.push('/home');  // Navigate to Home
        break;
      case 1:
        router.push('/profil');  // Navigate to Profile
        break;
      case 2:
        router.push('/uploads');  // Navigate to Uploads
        break;
      case 3:
        router.push('/registracia');  // Navigate to Registration
        break;
      case 4:
        router.push('/auth/odhlasenie');  // Navigate to Log Out
        break;
      default:
        break;
    }
  };

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => handleNavigation(newValue)}
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}  // Make it stick to the bottom
    >
      <BottomNavigationAction label="Home" icon={<Home />} />
      <BottomNavigationAction label="Profile" icon={<AccountCircle />} />
      <BottomNavigationAction label="Uploads" icon={<CloudUpload />} />
      <BottomNavigationAction label="Register" icon={<HowToReg />} />
      <BottomNavigationAction label="Log Out" icon={<ExitToApp />} />
    </BottomNavigation>
  );
};

export default BottomNav;
