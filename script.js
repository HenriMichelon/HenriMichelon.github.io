/**
 * Gestion du thème (Dark/Light)
 */
const btn = document.getElementById('theme-toggle');

// Initialisation : on vérifie d'abord le localStorage,
// sinon on regarde la préférence système.
const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme === 'dark';
    }
    // Si pas de sauvegarde, on suit le système
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

let isDark = getInitialTheme();

// Fonction pour appliquer le thème
const applyTheme = (dark) => {
    if (dark) {
        document.documentElement.classList.add('dark');
        btn.textContent = '☀ LIGHT';
    } else {
        document.documentElement.classList.remove('dark');
        btn.textContent = '☾ DARK';
    }
};

// Application immédiate au chargement
applyTheme(isDark);

// Listener sur le bouton
btn.addEventListener('click', () => {
    isDark = !document.documentElement.classList.contains('dark');
    applyTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Optionnel : Écouter les changements de thème du système en temps réel
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
        isDark = e.matches;
        applyTheme(isDark);
    }
});