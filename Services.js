document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        // Ferme tous les éléments actifs
        document.querySelectorAll('.faq-item.active').forEach(activeItem => {
            if (activeItem !== item.parentElement) {
                activeItem.classList.remove('active'); // Enlève la classe active
         }
        });

        // Ajoute ou enlève la classe active à l'élément cliqué
        const faqItem = item.parentElement;
        faqItem.classList.toggle('active');
    });
});