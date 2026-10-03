import Link from 'next/link';

export default function CarCard({ car }) {
  if (!car) return null;

  const carName = car.name || 'DriveIt Car';
  const whatsappMsg = `Hi DRIVEIT Cars, I am contacting you to enquire about booking the ${carName}. Please share availability and rates.`;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=+916300041186&text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="single-offers">
      <div className="offer-image">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <img
            loading="lazy"
            src={car.image || '/assets/img/cars/Swift.png'}
            alt={carName}
          />
        </a>
      </div>
      <div className="offer-text">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <h3>{carName}</h3>
        </a>
        <ul>
          {car.kmPerDay && <li><i className="fa fa-car" /> Km: {car.kmPerDay}</li>}
          {car.seats && <li><i className="fa fa-users" /> {car.seats} Seats</li>}
          {car.extraKmRate && <li><i className="fa fa-road" /> Extra: {car.extraKmRate}</li>}
          {car.extraHrRate && <li><i className="fas fa-gas-pump" /> Extra: {car.extraHrRate}</li>}
        </ul>
        <div className="offer-action">
          <a href="tel:+916300041186" className="offer-btn-1">
            <i className="fa fa-phone" /> Enquire Now
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="offer-btn-2"
          >
            <i className="fa fa-whatsapp" /> WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}
