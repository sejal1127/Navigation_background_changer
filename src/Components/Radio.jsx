import React, { useState, useEffect } from "react";

const Radio = () => {
  const [bgColor, setBgColor] = useState("#ffffff");

  const handleBgColorChange = (color, id) => {
    setBgColor(color);
    document.getElementById("color").innerHTML = `Color: ${id}`;
  };

  // Update the background color of the body when the state changes
  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);

  return (
    <>
     {/* <div className="text-center text-2xl font-semibold">
      <h1 >Select the background color:</h1>
      </div>  */}
    <div className="p-2 flex justify-center text-2xl ">
   
      <div className="">
        <input
          type="radio"
          id="White"
          name="color"
          value="White"
          onChange={() => handleBgColorChange("#ffffff", "White")}
        />
        <label htmlFor="White"> White </label>

        <input
          type="radio"
          id="IndianRed"
          name="color"
          value="IndianRed"
          onChange={() => handleBgColorChange("#CD5C5C", "IndianRed")}
        />
        <label htmlFor="IndianRed"> Indian Red </label>

        <input
          type="radio"
          id="Violet"
          name="color"
          value="Violet"
          onChange={() => handleBgColorChange("#ce9aff", "Violet")}
        />
        <label htmlFor="Violet"> Violet </label>

        <input
          type="radio"
          id="Teal"
          name="color"
          value="Teal"
          onChange={() => handleBgColorChange("#008080", "Teal")}
        />
        <label htmlFor="Teal"> Teal </label>

        <input
          type="radio"
          id="Yellow"
          name="color"
          value="Yellow"
          onChange={() => handleBgColorChange("#FFFF00", "Yellow")}
        />
        <label htmlFor="Yellow"> Yellow </label>

        <input
          type="radio"
          id="Green"
          name="color"
          value="Green"
          onChange={() => handleBgColorChange("#008000", "Green")}
        />
        <label htmlFor="Green"> Green </label>

        <input
          type="radio"
          id="Blue"
          name="color"
          value="Blue"
          onChange={() => handleBgColorChange("#0000FF", "Blue")}
        />
        <label htmlFor="Blue"> Blue </label>
      </div>

    </div>
      {/* <div id="color" className=" text-center text-2xl pb-3">
        Color: White
      </div> */}
    </>
  );
};

export default Radio;
