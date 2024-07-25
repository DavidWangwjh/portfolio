import { useState, useEffect } from 'react';

const useThemeSwitcher = () => {
    const [mode, setMode] = useState<string | null>(null);

    useEffect(() => {
        const preferDarkQuery = '(prefers-color-scheme: dark)';
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPref = window.localStorage.getItem('theme');

        const handleChange = () => {
            let check = '';
            if (userPref) {
                check = userPref;
            } else {
                check = mediaQuery.matches ? 'dark' : 'light';
            }
            setMode(check);
            if (check === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        };

        handleChange();
        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    useEffect(() => {
        if (mode !== null) {
            window.localStorage.setItem('theme', mode);
            if (mode === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    }, [mode]);

    return [mode, setMode] as const;
};

export default useThemeSwitcher;
