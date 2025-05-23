import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fordImage from './ford.jpg';
import bmwImage from './bmw.jpg';
import benzImage from './benz.jpg';
import audiImage from './audi.jpg';

const handleBooking = () =>{
  toast.success("Thank you for booking. you delivery details will be mailed shortly.");
};

function FordCar() {
  return (
    <div>
      <h2>Ford Mustang</h2>
      <img src={fordImage} alt="Ford Mustang" />
      <p>
        Ford Mustang is American made, powered by a 5.0L Coyote V8 engine. 
        It gives you a comfortable ride in all terrains. Starting at $31,250. 
        Kindly visit the store for more options.
      </p>
      <button onClick={handleBooking}> Book car</button>
    </div>
  );
}

function BmwCar() {
  return (
    <div>
      <h3>BMW M4</h3>
      <img src={bmwImage} alt="BMW M4" />
      <p>
        BMW M4 is German made, powered by a high-performance twin-turbo inline-6 engine generating 523 hp. 
        Starting at $80,345. Kindly visit the store for more options.
      </p>
      <button onClick={handleBooking}> Book car</button>
    </div>
  );
}

function BenzCar() {
  return (
    <div>
      <h4>Benz AMG C63</h4>
      <img src={benzImage} alt="Benz AMG C63" />
      <p>
        Benz AMG C63 is German made, powered by a handcrafted AMG 2.0L twin-turbo inline-4 engine producing 671 hp. 
        Starting at $83,865. Kindly visit the store for more options.
      </p>
      <button onClick={handleBooking}> Book car</button>
    </div>
  );
}

function AudiCar() {
  return (
    <div>
      <h5>Audi R8</h5>
      <img src={audiImage} alt="Audi R8" />
      <p>
        Audi R8 is German made, powered by a V10 engine with a quick-shifting dual-clutch transmission producing 600 hp. 
        Starting at $125,000. Kindly visit the store for more options.
      </p>
      <button onClick={handleBooking}> Book car</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Welcome to Car Chase — Find Your Dream Car</h1>
      <p>
        Our collection is filtered to provide the best service and delivery options.
        We've completed over 10,000 successful deliveries in just 2 years.
        Browse to visit the store.
      </p>
      <FordCar />
      <BmwCar />
      <BenzCar />
      <AudiCar />
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
