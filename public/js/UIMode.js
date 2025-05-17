const change_Theme = (setModeUI) => {
    document.documentElement.classList.add('animate-out');

    setTimeout(() => {
      setModeUI((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }, 1000);

    setTimeout(() => {
      document.documentElement.classList.remove('animate-out');
    }, 3000);
}

export { change_Theme }