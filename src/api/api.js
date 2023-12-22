export const fetchAccommodations = async () => {
    try {
        // Execution de la requete HTTP
        const r = await fetch('/api/logements.json', {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });
  
        // Gestion des erreurs HTTP
        if (!r.ok) {
            throw new Error(`HTTP error! Status: ${r.status}`);      
        }
  
        // Retourne la reponse
        return r.json();
  
    } catch (e) {
        // Gestion des erreurs de la fonction fetch()
        console.error(e);
        throw e;
    }
};
