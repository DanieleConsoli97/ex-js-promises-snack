async function fetchjson(url) {
    const promise = fetch(url)
    const response = await promise
    const object = await response.json()
    return object
}

async function getPostTitle(id) {
    const resultPromisePost = await fetchjson(`https://dummyjson.com/posts/${id}`)
    const resultPromiseUser = await fetchjson(`https://dummyjson.com/users/${id}`)
    return { ...resultPromisePost, resultPromiseUser }
}
// se io richiamo la funzione   getPostTitle(2) e poi getPostTitle(1) il secondo fetch non parte e da questo errore  Uncaught TypeError: getPostTitle(...).then(...).catch(...).finally(...) is not a function
 //   at provaawait.js:16:5
    // però se li inverto e richiamo prima getPostTitle(1) e poi getPostTitle(2) il secondo fetch parte e non da errore
getPostTitle(2).then(data => console.log(data)).catch(error => console.log(error)).finally(() => console.log('done'))

    (async () => {
        const result = await getPostTitle(1)
        console.log(result)
    })();


// getPostTitle(1).then(data => console.log(data)).catch(error => console.log(error))
