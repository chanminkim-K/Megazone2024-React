import { useState } from 'react'

const Blud = () => {

    const [light, setLight] = useState("OFF");
    console.log("Blud().light:" + light);
    return(
      <div>

        {light === "ON" ? (
          <h1 style={{ backgroundColor: "green" }}>ON</h1>
        ) : (
          <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
        )}

        <button 
            onClick={() => {
              setLight(light === "ON" ? "OFF" : "ON")
            }}
          >
            {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div>
    )
  };

  export default Blud;