import { useEffect, useState } from 'react';

export enum DeviceMode {
  Mobile = 'mobile',
  Desktop = 'desktop',
}

const useDeviceMode = (): DeviceMode | null => {
  const [deviceMode, setDeviceMode] = useState<DeviceMode | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768; // Define your breakpoint here

      setDeviceMode(isMobile ? DeviceMode.Mobile : DeviceMode.Desktop);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return deviceMode;
};

export default useDeviceMode;
