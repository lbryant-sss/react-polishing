import { Link } from 'react-router-dom'


function Homepage() {
    return (
      <>
        <section className="hero-section">
          <nav>
            <div className='home_link'>
              <Link to='/'>#RoadTripLife</Link>
            </div>
            <div  className='about_link'>
            <ul>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/'>Home</Link>
              </li>
            </ul>
            </div>
          </nav>
            <h1>This is my Homepage</h1>
        </section>
      </>
    );
  }

  export default Homepage;