import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState('system');
  useEffect(() => {
    AsyncStorage.getItem('themeMode').then((v) => v && setMode(v));
  }, []);
  const toggleMode = async () => {
    const next = mode === 'dark' ? 'light' : 'dark';
    setMode(next);
    await AsyncStorage.setItem('themeMode', next);
  };
  return <ThemeContext.Provider value={{ mode, toggleMode }}>{children}</ThemeContext.Provider>;
}

export const useThemeMode = () => useContext(ThemeContext);
