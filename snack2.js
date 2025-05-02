function lanciaDado(){
    const promise = new Promise((resolve, reject) => {
        console.log("Lancio del dado in corso...")  
        setTimeout(()=>{
            const dadoError= Math.random() < 0.2 // 20% di probabilità di errore
            if(dadoError){
                reject("il dado si è incastrato")
            }else{
                const dado= Math.floor(Math.random() * 6) + 1
                resolve(dado)
            }
        },3000)
    })
    return promise
}

lanciaDado()
.then(data => console.log(`Il dado ha fatto ${data}`))
.catch(err => console.error(err))