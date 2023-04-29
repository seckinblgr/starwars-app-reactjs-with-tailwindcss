import { Vortex } from "react-loader-spinner";
//loader library

function MyLoader() {
  return (
    <div className="loader-container flex justify-center items-center w-full h-screen bg-[#0b0f19] ">
      <Vortex
        visible={true}
        height="100"
        width="100"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={["red", "aqua", "green", "blue", "yellow", "white"]}
      />
    </div>
  );
}

export default MyLoader;
