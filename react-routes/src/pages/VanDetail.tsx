import { Link, useParams } from "react-router-dom";
import { Van } from "../types";
import { Vans } from "../Vans";




const vanDetail: React.FC = () =>{
        const { id } = useParams<{id: string}>();
        const van = Vans.find((v: Van) => v.id === Number(id))
        if(!van){
            return <p>Van you searched for is not found</p>
        }
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
            <div key={van.id}>
                <img src={van.image} alt={van.title} />
                <h2>{van.title}: { van.company }</h2>
                <p>{van.description}</p>
            </div>
        </section>
        </>
    )
}

export default vanDetail;