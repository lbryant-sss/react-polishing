import { Link } from 'react-router-dom'

function About() {
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
          <div>
            <h1>This is my about</h1>
          </div>
        </section>
      </>
    );
    
  }

  export default About;