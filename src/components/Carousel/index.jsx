import * as Styles from './styles';
import { Item } from './Item';

export function Carousel({ peliculas = [], titulo }) {
    return (
        <>
            <Styles.Titulo>{titulo}</Styles.Titulo>
            <Styles.Conatiner>
                {
                    peliculas.map((pelicula) => <Item {...pelicula} />)
                }
            </Styles.Conatiner>
        </>
    );
}