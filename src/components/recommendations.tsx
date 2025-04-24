import { useState } from "react";

interface Props {
  places: {
    name: string;
    description: string;
    price: string;
  }[];
}

const Recommendations = ({ places }: Props) => {
  const [selectedPlaceName, setSelectedPlaceName] = useState('');

  return (
    <section className="recommendations container">
      <h2>🔥 인기 여행지</h2>
      <div className="card-container">
        {
          places.map((place, index) => (
            <div
              key={index}
              className={`card ${place.name === selectedPlaceName ? 'active-card' : ''}`}
              onClick={() => setSelectedPlaceName(place.name)}
            >
              <h3>{place.name}</h3>
              <p>{place.description}</p>
              <span>{place.price}</span>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Recommendations;