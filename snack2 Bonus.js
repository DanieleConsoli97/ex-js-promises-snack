function creaLanciaDado() {
    let ultimoLancio = null;

    return () => { // Restituisce una funzione, quindi questo è un closure
        const promise = new Promise((resolve, reject) => {
            console.log("Lancio del dado in corso...");
            setTimeout(() => {
                const dadoError = Math.random() < 0.2; // 20% di probabilità di errore
                if (dadoError) {
                    ultimoLancio = null; // reset ultimo lancio in caso di errore
                    reject("il dado si è incastrato");
                } else {
                    const dado = Math.floor(Math.random() * 6) + 1;
                    if (ultimoLancio === dado) {
                        console.log("incredibile! hai fatto lo stesso numero di prima");
                    }
                    ultimoLancio = dado; //aggiorno ultimoLancio
                    resolve(dado);
                }
            }, 3000);
        });
        return promise; //la promise deve essere ritornata qui
    };
}

const lanciaDado = creaLanciaDado(); // Chiama la factory per ottenere la funzione lanciaDado

lanciaDado()
    .then(risultato => console.log("Il risultato del lancio è:", risultato))
    .catch(errore => console.error("Errore:", errore));

lanciaDado()
    .then(risultato => console.log("Il risultato del secondo lancio è:", risultato))
    .catch(errore => console.error("Errore:", errore));
