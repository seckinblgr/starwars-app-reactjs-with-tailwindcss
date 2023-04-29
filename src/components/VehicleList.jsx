import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "./MyLoader";
import { UilSearch, UilAngleDoubleDown } from "@iconscout/react-unicons";
import Footer from "./Footer";
//added  all library used..

function VehicleList() {
  const [vehicles, setVehicles] = useState([]); // all vehicles state.
  const [temp, setTemp] = useState(4); // this state holds the number of vehicles to be listed for startup.
  const [search, setSearch] = useState(""); // input state.
  const [isLoading, setIsLoading] = useState(true); // loader state.

  // startup axios request.
  useEffect(() => {
    const fetchVehicles = async () => {
      const response = await axios.get("https://swapi.dev/api/starships/");
      setVehicles(response.data.results);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    fetchVehicles();
  }, []);

  // more vehicles function.
  const updateSlice = () => {
    if (temp < 10) {
      setTemp(temp + 4);
    } else if (temp == 12) {
      alert("No more starships !");
    }
  };

  //listed vehicles to request with search filter.
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://swapi.dev/api/starships/?search=${search}`
    );
    setVehicles(response.data.results);
    setSearch("");
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className=" bg-black box border-4 flex flex-col items-center justify-center">
            <div className="img p-10 ">
              <img src="/sw.png" width={400} height={400} />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-10 ">
                <input
                  className="text-center p-2   border-2 tracking-wide font-medium rounded-full"
                  required={true}
                  type="text"
                  placeholder="Search "
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

                <button type="submit" className="absolute right-2 mt-2">
                  <UilSearch size={25}></UilSearch>
                </button>
              </div>
            </form>
          </div>

          <div className="bg-image-back bg-contain text-white ">
            <div className=" flex  flex-wrap gap-6  py-14 px-3  mx-auto justify-center items-center">
              {vehicles.slice(0, `${temp}`).map((vehicle) => (
                <div key={vehicle.name}>
                  <div className="card border-2 border-gray-600 hover:border-white glass  hover:scale-105 transition-all w-64 h-[400px] rounded-md p-4 flex justify-center items-center  ">
                    <Link to={`/vehicles/${vehicle.name}`}>
                      <div className="img ">
                        <img
                          className="w-60  h-52 rounded-md object-cover"
                          src={`/${Math.floor(Math.random() * 10) + 1}.jpeg`} // random number generation for images. 1-10 between
                          alt=""
                        />
                      </div>
                      <div className="name text-center mt-2 text-xl font-medium">
                        {vehicle.name}
                      </div>
                      <div className="rate text-center mt-2">
                        Model : {vehicle.model}
                      </div>
                      <div className="rate text-center mt-4 font-light text-md">
                        H.D Rate : {vehicle.hyperdrive_rating}
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className=" p-4  flex justify-center items-center ">
              <button
                onClick={updateSlice}
                className=" flex justify-center items-center border-2 h-10 rounded-xl bg-yellow-300 text-black hover:scale-110 transition-all"
              >
                <UilAngleDoubleDown
                  className="mt-1"
                  size={30}
                ></UilAngleDoubleDown>
                <span className="mr-3">More</span>
              </button>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default VehicleList;
