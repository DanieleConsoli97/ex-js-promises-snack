function getPostTitle(id) {
    const promise = new Promise((resolve, reject) => {

        fetch(`https://dummyjson.com/posts/${id}`)
        .then((response)=>response.json())
        .then(data =>{
            fetch(`https://dummyjson.com/users/${id}`)
            .then(response => response.json())
            .then(userData=>{
                const results={
                    ...data,
                    userData
                }
                resolve(results)
            })
        })
        .catch(reject)
    }
    )
    return promise;
}
getPostTitle(2)
.then(data=> console.log(data))
.catch(error=>console.log(error))