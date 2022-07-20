import React, { useMemo, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

export const useCurrentLocation = (path) => {
  const params = useParams();
  const location = useLocation();
  const isCurrentLocation = useMemo(() => {
    return (
      location.pathname === path ||
      location.pathname.endsWith(path) ||
      location.pathname.slice(
        0,
        location.pathname.indexOf(String(params.id)) - 1
      ) === path
    );
  }, [location.pathname, path, params.id]);
  return isCurrentLocation;
};
