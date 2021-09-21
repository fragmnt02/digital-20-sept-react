export function getMovies(seccion) {
    switch (seccion) {
        case 'Ver mas adelante':
            return new Promise(async (resolve) => {
                await wait(4000);
                resolve({
                    titulo: 'Ver mas adelante',
                    peliculas: [
                        'Pelicula 1',
                        'Pelicula 2',
                        'Pelicula 3',
                        'Pelicula 4',
                        'Pelicula 5',
                        'Pelicula 6',
                    ]
                });
            });

        case 'Series':
            return new Promise(async (resolve) => {
                await wait(4000);
                resolve({
                    titulo: 'Series',
                    peliculas: [
                        'Pelicula 1',
                        'Pelicula 2',
                        'Pelicula 3',
                        'Pelicula 4',
                        'Pelicula 5',
                        'Pelicula 6',
                    ]
                });
            });
        case 'Peliculas':
            return new Promise(async (resolve) => {
                await wait(4000);
                resolve({
                    titulo: 'Peliculas',
                    peliculas: [
                        'Pelicula 1',
                        'Pelicula 2',
                        'Pelicula 3',
                        'Pelicula 4',
                        'Pelicula 5',
                        'Pelicula 6',
                    ]
                });
            });
        default:
            break;
    }
}

function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), ms);
    })
}
