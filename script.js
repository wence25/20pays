// restcountries
const urlAPI = 'https://restcountries.com/v3.1/all';

// conteneur HTML
const conteneurPays = document.getElementById('conteneur-pays');

// récupéreration des données
async function recupererPays() {
    try {
        const reponse = await fetch(urlAPI); // api
        const pays = await reponse.json(); // json

        // 20pays
        const premiersPays = pays.slice(11, 31);

        // pays
        premiersPays.forEach(pays => {
            const cartePays = document.createElement('div');
            cartePays.classList.add('carte-pays');

            const drapeauPays = document.createElement('img');
            drapeauPays.src = pays.flags.png;
            drapeauPays.alt = `Drapeau de ${pays.name.common}`;
            drapeauPays.classList.add('drapeau-pays');

            const nomPays = document.createElement('div');
            nomPays.textContent = pays.name.common;
            nomPays.classList.add('nom-pays');

            const capitalePays = document.createElement('div');
            capitalePays.textContent = `Capitale : ${pays.capital ? pays.capital[0] : 'Non disponible'}`;
            capitalePays.classList.add('info-pays');

            const devisePays = document.createElement('div');
            const devises = pays.currencies
                ? Object.values(pays.currencies).map(devise => devise.name).join(', ')
                : 'Non disponible';
            devisePays.textContent = `Devise : ${devises}`;
            devisePays.classList.add('info-pays');

            // constituants carte
            cartePays.appendChild(drapeauPays);
            cartePays.appendChild(nomPays);
            cartePays.appendChild(capitalePays);
            cartePays.appendChild(devisePays);

            // complément 
            conteneurPays.appendChild(cartePays);
        });
    } catch (erreur) {
        console.error('Erreur lors de la récupération des pays :', erreur);
    }
}

// Appelle fonction
recupererPays();
