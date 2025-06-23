// Fichier: faq.js

document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling; // La réponse est l'élément frère suivant

            // Basculer la classe 'active' sur la question
            question.classList.toggle('active');

            // Basculer la hauteur de la réponse
            if (answer.style.maxHeight) {
                // Si la réponse est ouverte, la fermer
                answer.style.maxHeight = null; // Réinitialise la hauteur
            } else {
                // Si la réponse est fermée, l'ouvrir
                // On met scrollHeight pour que la hauteur soit juste celle du contenu
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
});