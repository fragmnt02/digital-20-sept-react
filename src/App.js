import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Carousel } from './components/Carousel';
import { getMovies } from './api';

function App() {

  const [informacionCarousel, setInformacionCarousel] = useState({});
  const [informacionCarousel2, setInformacionCarousel2] = useState({});
  const [informacionCarousel3, setInformacionCarousel3] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getMovies('Ver mas adelante');
      const data2 = await getMovies('Series');
      const data3 = await getMovies('Peliculas');
      setInformacionCarousel(data);
      setInformacionCarousel2(data2);
      setInformacionCarousel3(data3);
      setLoading(false);
    }
    fetchData()

  }, []);

  if (loading) {
    return (
      <h1>Loading...</h1>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <Carousel {...informacionCarousel} />
      <Carousel {...informacionCarousel2} />
      <Carousel {...informacionCarousel3} />
    </div>
  );
}

export default App;
