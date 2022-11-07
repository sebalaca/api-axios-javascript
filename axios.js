//PRACTICA

const obtenerPeliculas = async() => {

    try {
        const respuesta = await axios.get('https://api.themoviedb.org/3/movie/popular', {
            params: {
                api_key: 'fca25977057d559270328a62203c8f1f',
                language: 'es-ES'
            },
            // headers: {
            //     'Autrorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmY2EyNTk3NzA1N2Q1NTkyNzAzMjhhNjIyMDNjOGYxZiIsInN1YiI6IjYzNjdiMTA4Y2FhY2EyMDA4YTMxODhhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-QJhghBDGIwaVXpeea-dmlseV9lR3icTXyhdxFiapXg' 
            // }
        })

        console.log(respuesta)
    } catch (error) {
        console.log(error)
    }

}

obtenerPeliculas()