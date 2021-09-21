import * as Styles from './styles';

export function Item({ title = 'Pelicula' }) {
    return (
        <Styles.ContainerItem>{title}</Styles.ContainerItem>
    );
}