// Snack 1
// Ottieni il titolo di un post con una Promise.
// Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}

const getPostTitle = id => {
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error))
    })
}

getPostTitle(1)
    .then(data => console.log(data.title))
    .catch(error => console.error(error))

getPostTitle(2)
    .then(data => console.log(data.title))
    .catch(error => console.error(error))

//  Snack 2
// Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.

function lanciaDado() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Sto lanciando il dado');
            const lancio = Math.floor(Math.random() * 6) + 1
            const incastra = Math.random() < 0.2
            if (incastra) {
                reject('Il dado si è incastrato')
            } else {
                resolve(`Il numero uscito è: ${lancio}`)
            }
        }, 3000)
    })
}

lanciaDado()
    .then(messaggio => console.log(messaggio))
    .catch(error => console.error(error))