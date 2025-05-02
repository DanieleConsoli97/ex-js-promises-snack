function getPost(id) {
    const handleError = (error) => {
        console.log("error", error)
    }
    const promise = new Promise((resolve, reject) => {

        const postFetch = fetch(`https://dummyjson.com/posts/${id}`);
     
        function handleresponse(response) {
            return response.json()
        }

        const postTransform = postFetch.then(handleresponse)
            .catch(handleError)

        postTransform
        .then((data) => {
            return  (data.title)
        })
        .catch(handleError)
        const userFetch = fetch(`https://dummyjson.com/users/${id}`);
        const userTransform = userFetch.then(handleresponse)
        .catch(handleError)
        userTransform.then((data)=>{
            return  (data)
        })
        .catch(handleError)
        

        return Promise.all([postTransform, userTransform])
        .then((data) => {
            const [postTitle, userData] = data;
            resolve({ postTitle, userData });
        }).catch((error) => {
            console.log("Error in Promise.all:", error);
            reject(error);
        })
     
    }   
    )
    return promise;
}


getPost(3)
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
