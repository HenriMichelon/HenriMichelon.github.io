const btn = document.getElementById('theme-toggle');

const applyTheme = (dark) => {
    if (dark) {
        document.documentElement.classList.add('dark');
        btn.textContent = '☀ LIGHT';
    } else {
        document.documentElement.classList.remove('dark');
        btn.textContent = '☾ DARK';
    }
};

let isDark = false
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    isDark = savedTheme === 'dark';
}
applyTheme(isDark);

btn.addEventListener('click', () => {
    isDark = !document.documentElement.classList.contains('dark');
    applyTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
        isDark = e.matches;
        applyTheme(isDark);
    }
});
