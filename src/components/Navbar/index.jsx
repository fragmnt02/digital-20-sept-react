import { Container, ContainerLeft, ContainerRight, Logo, ContainerBotones, Link } from './styles';

export function Navbar() { // Componentes funcionales
    const links = [
        {
            path: '/',
            label: 'Inicio'
        },
        {
            path: '/series',
            label: 'Series'
        },
        {
            path: '/peliculas',
            label: 'Películas'
        },
        {
            path: '/novedades',
            label: 'Novedades Populares'
        },
        {
            path: '/lista',
            label: 'Mi Lista'
        },
        {
            path: '/ver-nuevo',
            label: 'Ver de Nuevo'
        }
    ];
    return (
        <Container>
            <ContainerLeft>
                <Logo src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Netflix.png" />
                <ContainerBotones>
                    {
                        links.map((link) => <Link {...link} />)
                    }
                </ContainerBotones>
            </ContainerLeft>
            <ContainerRight>

            </ContainerRight>
        </Container>
    );
}