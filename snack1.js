function getPostTitle(id) {
    const handleError = (error) => {
        console.log("error", error)
    }
    const promise = new Promise((resolve, reject) => {

        const postFetch = fetch(`https://dummyjson.com/posts/${id}`);
        console.log(postFetch);
        function handleresponse(response) {
            return response.json()
        }

        const jsonTransform = postFetch.then(handleresponse)
            .catch(handleError)

        jsonTransform.then((data) => {
            resolve(data.title)
        }
        )
        .catch(reject)

      
    }
    )
    return promise;
}


getPostTitle(3)
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
