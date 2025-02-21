import { useEffect, useState } from "react";
import { getServices } from "./api.js";

function App() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        getServices().then((data) => setServices(data));
    }, []);

    return (
        <div>
            <h1>Our Services</h1>
            <ul>
                {services.map((service) => (
                    <li key={service._id}>{service.name} - ${service.price}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
