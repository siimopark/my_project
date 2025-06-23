// Fichier: commander.js

document.addEventListener('DOMContentLoaded', () => {
    const packSelect = document.getElementById('pack-select');
    const woodTypeSelect = document.getElementById('wood-type');
    const finishTypeSelect = document.getElementById('finish-type');
    const quantityInput = document.getElementById('quantity');
    const confirmOrderBtn = document.getElementById('confirm-order-btn');

    const summaryPack = document.getElementById('summary-pack');
    const summaryWood = document.getElementById('summary-wood');
    const summaryFinish = document.getElementById('summary-finish');
    const summaryQuantity = document.getElementById('summary-quantity');
    const estimatedPrice = document.getElementById('estimated-price');

    // Fonction pour mettre à jour le récapitulatif et le prix
    function updateOrderSummary() {
        // Récupérer les valeurs sélectionnées
        const selectedPackOption = packSelect.options[packSelect.selectedIndex];
        const selectedWoodOption = woodTypeSelect.options[woodTypeSelect.selectedIndex];
        const selectedFinishOption = finishTypeSelect.options[finishTypeSelect.selectedIndex];
        const quantity = parseInt(quantityInput.value, 10);

        // Récupérer les données (prix de base, modificateurs)
        const packPrice = parseFloat(selectedPackOption.dataset.price || 0); // Utilise 0 si pas de prix (pour "Choisissez un pack")
        const woodModifier = parseFloat(selectedWoodOption.dataset.priceModifier || 1);
        const finishModifier = parseFloat(selectedFinishOption.dataset.priceModifier || 1);

        // Mettre à jour le texte du récapitulatif
        summaryPack.textContent = selectedPackOption.textContent.split('(')[0].trim(); // Enlève le prix entre parenthèses
        summaryWood.textContent = selectedWoodOption.textContent;
        summaryFinish.textContent = selectedFinishOption.textContent;
        summaryQuantity.textContent = quantity;

        // Calcul du prix
        let currentPrice = packPrice * woodModifier * finishModifier * quantity;
        estimatedPrice.textContent = `${currentPrice.toFixed(2)}€`;

        // Désactiver le bouton si aucun pack n'est sélectionné
        if (selectedPackOption.value === 'none') {
            confirmOrderBtn.disabled = true;
            confirmOrderBtn.textContent = 'Choisissez un pack d\'abord';
            estimatedPrice.textContent = '0.00€';
            summaryPack.textContent = 'Aucun';
        } else {
            confirmOrderBtn.disabled = false;
            confirmOrderBtn.textContent = 'Confirmer la demande de devis';
        }
    }

    // Gestion de la pré-sélection via l'URL (si l'utilisateur vient de packs.html)
    const urlParams = new URLSearchParams(window.location.search);
    const preselectedPack = urlParams.get('pack');
    if (preselectedPack) {
        packSelect.value = preselectedPack;
    }

    // Écouteurs d'événements pour les changements
    packSelect.addEventListener('change', updateOrderSummary);
    woodTypeSelect.addEventListener('change', updateOrderSummary);
    finishTypeSelect.addEventListener('change', updateOrderSummary);
    quantityInput.addEventListener('input', updateOrderSummary); // 'input' pour chaque frappe, 'change' pour quand l'input perd le focus

    // Initialiser le récapitulatif au chargement de la page
    updateOrderSummary();

    // Gestion du clic sur le bouton Confirmer
    confirmOrderBtn.addEventListener('click', () => {
        if (packSelect.value === 'none') {
            alert("Veuillez sélectionner un pack avant de confirmer votre demande de devis.");
            return;
        }
        const selectedPack = packSelect.options[packSelect.selectedIndex].textContent.split('(')[0].trim();
        const selectedWood = woodTypeSelect.options[woodTypeSelect.selectedIndex].textContent;
        const selectedFinish = finishTypeSelect.options[finishTypeSelect.selectedIndex].textContent;
        const quantity = quantityInput.value;
        const price = estimatedPrice.textContent;

        alert(`Votre demande de devis a été enregistrée pour :
        - Pack: ${selectedPack}
        - Type de bois: ${selectedWood}
        - Finition: ${selectedFinish}
        - Quantité: ${quantity}
        - Prix estimé: ${price}

        Nous vous contacterons bientôt pour finaliser votre commande.`);
        // Ici, on pourrait envoyer les données à un serveur via fetch() ou XMLHttpRequest
        // Ou rediriger vers une page de succès avec les détails en paramètres d'URL
    });
});