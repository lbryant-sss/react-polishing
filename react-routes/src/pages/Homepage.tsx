import { Link } from 'react-router-dom';
import { Vans } from '../Vans';
import { Van } from '../types'; // Make sure this import matches your actual types file

function Homepage() {
  return (
    <>
      <section className="hero-section">
        <nav>
          <div className="home_link">
            <Link to="/">#RoadTripLife</Link>
          </div>
          <div className="about_link">
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="hero-div">

        </div>
        <div className="vans">
        <h1>This is my Homepage</h1>
        <ul className='van-list'>
          {Vans.map((van: Van) => (
            <li key={van.id}>
              <Link to={`/react-polishing/vans/${van.id}`}>
                <div>
                  <img src={van.image} alt={van.title} />
                  <h2>{van.title}</h2>
                  <p>{van.company}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        </div>
      </section>
      
    </>
  );
}

export default Homepage;
