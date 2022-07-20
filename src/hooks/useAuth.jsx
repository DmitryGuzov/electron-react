import React, { useEffect, useState, useMemo } from 'react';
import LocalStorageService from '../services/local-storage';

const useAuth = function () {
  const token = !!LocalStorageService.getAccessToken();

  const auth = useMemo(() => {
    if (!token) {
      return false;
    } else {
      return true;
    }
  }, [token]);

  return auth;
};

export default useAuth;
