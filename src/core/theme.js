export const setTheme = (theme) => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.style.setProperty('--primary-color', '#4a90e2');
      root.style.setProperty('--background-color', '#1a1a1a');
    } else {
      root.style.setProperty('--primary-color', '#2ecc71');
      root.style.setProperty('--background-color', '#f5f5f5');
    }
  };