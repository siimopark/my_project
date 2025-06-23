// Fichier: main.js

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Vérifier le thème sauvegardé au chargement de la page
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggleBtn.querySelector('img').src = 'assets/images/icon-sun.png'; // Changer l'icône en soleil
        themeToggleBtn.querySelector('img').alt = 'Mode Clair';
    } else {
        // Assurer que l'icône est la lune par défaut si pas de thème sombre sauvegardé
        themeToggleBtn.querySelector('img').src = 'assets/images/icon-moon.png';
        themeToggleBtn.querySelector('img').alt = 'Mode Sombre';
    }

    // Gérer le clic sur le bouton
    themeToggleBtn.addEventListener('click', () => {
        // Basculer la classe 'dark-mode' sur le body
        body.classList.toggle('dark-mode');

        // Mettre à jour l'icône et sauvegarder la préférence
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.querySelector('img').src = 'assets/images/icon-sun.png'; // Afficher le soleil
            themeToggleBtn.querySelector('img').alt = 'Mode Clair';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggleBtn.querySelector('img').src = 'assets/images/icon-moon.png'; // Afficher la lune
            themeToggleBtn.querySelector('img').alt = 'Mode Sombre';
        }
    });

    // Optionnel : Gérer le thème par défaut du système de l'utilisateur
    // if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !savedTheme) {
    //     // Si le système est en mode sombre et que l'utilisateur n'a pas encore choisi
    //     body.classList.add('dark-mode');
    //     themeToggleBtn.querySelector('img').src = 'assets/images/icon-sun.png';
    //     themeToggleBtn.querySelector('img').alt = 'Mode Clair';
    //     localStorage.setItem('theme', 'dark');
    // }
});