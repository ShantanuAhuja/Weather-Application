import React, { useState, useEffect } from 'react'



const Home = () => {
  const [searchcity, setsearch] = useState("Delhi");
  const [city, setcity] = useState(null);

  useEffect(() => {

    const fetchapi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchcity}&units=metric&appid=0d2db9a7716fca8a44dd809d129db4bf`;
      const response = await fetch(url);
      const resjson = await response.json();

      setcity(resjson.main);
    }
    fetchapi();
  }, [searchcity]);
  return (
    <>

      <div className="maind">


        <div className="center_div">

          <br />
          <h1 className='heading'>Weather Application</h1>

          <br />
          <input type="search" placeholder=" Enter the City" value={searchcity} onChange={(event) => {
            setsearch(event.target.value);
          }}
          />

          {
            !city ? (
              <h1 className='found'>NO DATA FOUND</h1>
            ) : (
              <div>
                <div className="info">
                  <h1 className='cityname'>
                    <i className="fas fa-map-marker-alt">    </i>                                  {searchcity}</h1>
                  <h2 className='avgtemp' >{city.temp}°C</h2>

                  <h4 className='mintemp'>Min : {city.temp_min} °C    <i className=" changekaro fas fa-grip-lines-vertical"></i>Max : {city.temp_max} °C</h4>




                </div>

              </div>

            )
          }
          <div className="ocean">
            <div className="wave"></div>
            <div className="wave"></div>
          </div>

        </div >

      </div>





    </>
  );
};
export default Home;





