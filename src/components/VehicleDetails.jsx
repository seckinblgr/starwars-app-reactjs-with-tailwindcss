import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { UilArrowLeft } from "@iconscout/react-unicons";
import Loader from "./MyLoader";
// added  all library used.

function VehicleDetail() {
  const { name } = useParams(); // details page route params.
  const [vehicle, setVehicle] = useState({}); //detail vehicle state
  const [isLoading, setIsLoading] = useState(true); // loader state

  // axios request for name params
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/starships/?search=${name}`)
      .then((response) => setVehicle(response.data.results[0]))
      .catch((error) => console.log(error));

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [name]);

  return (
    <>
      {" "}
      {isLoading ? (
        <Loader />
      ) : (
        <div className=" h-screen p-2 text-white bg-image-detail bg-cover ">
          <div>
            <button className=" hover:scale-110 transition-all  hover:bg-yellow-500 rounded-full ">
              <Link to="/">
                <UilArrowLeft size={50} color={"white"}></UilArrowLeft>
              </Link>
            </button>
          </div>
          <div className="flex  justify-center items-center mb-8 ">
            <div className=" glass  min-w-[400px] box border-2 p-5 w-1/3  text-center flex flex-col justify-center items-center">
              <h1 className="font-medium text-xl mb-4 border-b-2 ">
                {vehicle.name}
              </h1>

              <img
                className="w-60  h-52 rounded-xl shadow-xl  shadow-yellow-200 object-cover "
                src={`/${Math.floor(Math.random() * 10) + 1}.jpeg`}
              />
              <div className="space-y-2 mt-8">
                <p className="font-medium">
                  Model : <span className=" font-light ">{vehicle.model}</span>
                </p>
                <p className="font-medium">
                  HyperDrive Rate :{" "}
                  <span className=" font-light ">
                    {vehicle.hyperdrive_rating}
                  </span>
                </p>
                <p className="font-medium">
                  Passengers :
                  <span className=" font-light "> {vehicle.passengers}</span>
                </p>
                <p className="font-medium">
                  Max Atmosphering Speed :
                  <span className=" font-light ">
                    {" "}
                    {vehicle.max_atmosphering_speed}
                  </span>
                </p>
                <p className="font-medium">
                  Manufacturer :
                  <span className=" font-light "> {vehicle.manufacturer}</span>
                </p>
                <p className="font-medium">
                  Crew: <span className=" font-light "> {vehicle.crew}</span>
                </p>

                <p className="font-medium">
                  Cargo Capacity :
                  <span className=" font-light ">
                    {" "}
                    {vehicle.cargo_capacity}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default VehicleDetail;
