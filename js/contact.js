// Fichier: contact.js

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Empêche le rechargement de la page par défaut

        // Simule l'envoi du formulaire
        // Dans un vrai projet, ici vous utiliseriez fetch() ou XMLHttpRequest pour envoyer les données à un serveur
        // Exemple:
        // fetch('votre_endpoint_serveur.php', {
        //     method: 'POST',
        //     body: new FormData(contactForm)
        // })
        // .then(response => response.json())
        // .then(data => {
        //     // Gérer la réponse du serveur
        //     if (data.success) {
        //         formMessage.textContent = 'Votre message a été envoyé avec succès ! Nous vous répondrons bientôt.';
        //         formMessage.style.display = 'block';
        //         contactForm.reset(); // Vide le formulaire
        //     } else {
        //         formMessage.textContent = 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.';
        //         formMessage.style.backgroundColor = '#f8d7da'; // Rouge clair pour erreur
        //         formMessage.style.color = '#721c24'; // Rouge foncé
        //         formMessage.style.borderColor = '#f5c6cb';
        //         formMessage.style.display = 'block';
        //     }
        // })
        // .catch(error => {
        //     console.error('Erreur:', error);
        //     formMessage.textContent = 'Erreur réseau ou technique. Veuillez vérifier votre connexion.';
        //     formMessage.style.backgroundColor = '#f8d7da';
        //     formMessage.style.color = '#721c24';
        //     formMessage.style.borderColor = '#f5c6cb';
        //     formMessage.style.display = 'block';
        // });


        // --- Simulation côté client uniquement (pour l'instant) ---
        formMessage.textContent = 'Votre message a été envoyé avec succès ! Nous vous répondrons bientôt.';
        formMessage.style.backgroundColor = '#d4edda'; // Vert clair
        formMessage.style.color = '#155724'; // Vert foncé
        formMessage.style.borderColor = '#c3e6cb';
        formMessage.style.display = 'block';

        // Gérer le mode sombre pour le message de succès
        if (document.body.classList.contains('dark-mode')) {
            formMessage.classList.add('dark-mode');
        } else {
            formMessage.classList.remove('dark-mode');
        }

        // Vider le formulaire après un court délai
        setTimeout(() => {
            contactForm.reset();
            formMessage.style.display = 'none'; // Cacher le message après quelques secondes
        }, 5000); // Message visible pendant 5 secondes
    });
});