document.addEventListener('DOMContentLoaded', () => {
    const darkModeButton = document.getElementById('darkModeButton');
    const userButton = document.getElementById('userButton');
    const body = document.body;
    const header = document.querySelector('header');

    darkModeButton.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark-mode')
    });

    userButton.addEventListener('click', () => {
        alert('Ação do Usuário');
    });
});