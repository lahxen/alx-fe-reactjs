import { SearchMovies } from '../components/SearchMoviesSimple';

export const HomePage = () => {
  return (
    <div className="main">
      <header className="header">
        <div className="container">
          <h1>Movie Database</h1>
          <p>Discover your favorite movies</p>
        </div>
      </header>
      
      {/* Hero Section with Featured Images */}
      <section className="hero-section">
        <div className="container">
          <div className="featured-movies">
            <div className="featured-movie">
              <img src="/images/batman.svg" alt="Batman" />
            </div>
            <div className="featured-movie">
              <img src="/images/star-wars.svg" alt="Star Wars" />
            </div>
            <div className="featured-movie">
              <img src="/images/avengers.svg" alt="Avengers" />
            </div>
          </div>
        </div>
      </section>
      
      <main className="container">
        <SearchMovies />
      </main>
    </div>
  );
};