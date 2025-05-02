function getPostTitle(id) {
    const promise = new Promise((resolve, reject) => {

        fetch(`https://dummyjson.com/posts/${id}`)
        .then((response)=>response.json())
        .then((data=> resolve(data.title)))
        .catch(reject)
    }
    )
    return promise;
}
getPostTitle(2)
.then(data=> console.log(data))
.catch(error=>console.log(error))