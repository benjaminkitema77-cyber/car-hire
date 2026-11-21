import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

import charger from "../assets/cars/charger.jpg";
import e53 from "../assets/cars/e53.jpg";
import escalade from "../assets/cars/Escalade.jpg";
import gle from "../assets/cars/GLE.jpg";
import ram from "../assets/cars/RAM.jpg";
import shelby from "../assets/cars/shelby.jpg";

function CarDetail() {
  const { id } = useParams();

  const cars = [
    {
      id: 1,
      name: "Dodge Charger",
      price: 18000,
      image: charger,
      description: "A stylish and powerful sports sedan.",
      seats: 5,
      transmission: "Automatic",
      fuel: "Petrol",
    },
    {
      id: 2,
      name: "Mercedes AMG E53",
      price: 22000,
      image: e53,
      description: "Luxury, comfort and performance combined.",
      seats: 5,
      transmission: "Automatic",
      fuel: "Petrol",
    },
    {
      id: 3,
      name: "Cadillac Escalade",
      price: 28000,
      image: escalade,
      description: "A spacious luxury SUV for comfortable trips.",
      seats: 7,
      transmission: "Automatic",
      fuel: "Petrol",
    },
    {
      id: 4,
      name: "Mercedes GLE",
      price: 25000,
      image: gle,
      description: "A modern SUV with a premium driving experience.",
      seats: 5,
      transmission: "Automatic",
      fuel: "Petrol",
    },
    {
      id: 5,
      name: "RAM TRX",
      price: 30000,
      image: ram,
      description: "A powerful pickup built for adventure.",
      seats: 5,
      transmission: "Automatic",
      fuel: "Petrol",
    },
    {
      id: 6,
      name: "Shelby Cobra",
      price: 25000,
      image: shelby,
      description: "A classic sports car with a bold design.",
      seats: 2,
      transmission: "Manual",
      fuel: "Petrol",
    },
  ];

  const car = cars.find((item) => item.id === Number(id));

  if (!car) {
    return <h1 className="text-center mt-20 text-2xl">Car not found</h1>;
  }

  return (
    <>
      <Navbar />

      <main className="bg-slate-100 min-h-screen px-6 py-12">

        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">

          <img
            src={car.image}
            alt={car.name}
            className="w-full h-96 object-cover"
          />

          <div className="p-8">

            <h1 className="text-3xl font-bold mb-4">
              {car.name}
            </h1>

            <p className="text-gray-600 mb-6">
              {car.description}
            </p>

            <p className="text-orange-500 text-2xl font-bold mb-6">
              KSh {car.price.toLocaleString()} / day
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">

              <div>
                <p className="font-bold">Seats</p>
                <p>{car.seats}</p>
              </div>

              <div>
                <p className="font-bold">Transmission</p>
                <p>{car.transmission}</p>
              </div>

              <div>
                <p className="font-bold">Fuel</p>
                <p>{car.fuel}</p>
              </div>

            </div>

            <div className="flex gap-4">

              <Link
                to="/login"
                className="bg-orange-500 text-white px-6 py-3 rounded-lg"
              >
                Book Now
              </Link>

              <Link
                to="/cars"
                className="bg-slate-900 text-white px-6 py-3 rounded-lg"
              >
                Back to Cars
              </Link>

            </div>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default CarDetail;