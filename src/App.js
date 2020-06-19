import React, {
  useState
} from 'react';
import Modal from 'react-modal';
import logo from './logo.svg';
import './App.css';
import Ninja from './ninja'





function App() {
  var lng,lat

  //var Ninjas=[]

  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude
      lng = position.coords.longitude
      console.log(lng, lat);
    });
  } 
  else {
    console.log('error');

  }

  var [Ninjas, setNinjas] = useState([]);

  // var getInitialState = function () {
  //   return ({
  //     ninjas: []
  //   })
  // }
  // var ninjas=[]
  //        ninjas.map(function(ninja, index){
  //          return(
  //          <li key={index}>
  //            <span className={ninja.obj.available}></span>
  //            <span className="name">{ninja.obj.name}</span>
  //            <span className="rank">{ninja.obj.rank}</span>
  //            <span className="dist">{Math.floor(ninja.dis/ 1000)} km</span>
  //          </li>
  //          )
        //  })

  const handelSubmit = function (e) {
    e.preventDefault()
    if (e.target.lat.value !=="") {
      lng = e.target.lng.value
      lat = e.target.lat.value
      
    }
    
    // console.log(Ninjas);
    const url = "/api/ninjas?lng=" + lng + "&lat=" + lat + "&rng=" + e.target.rng.value;

    fetch(url)
    .then(function (data) {
        return data.json();
    })
    .then((json) => {

      setNinjas(json)
    });
  }

 

  
  return (
    <div>
      <header>
      <center><h2 style={{color:"#fff"}}>Covid-19 Test Centers Near You</h2></center>
        <div className="ninja-container">
          <form id="search" onSubmit={handelSubmit}>
            <div>
              <label for="lat">Enter Latitude</label>
              <input type="text" name="lat" placeholder="latitude" />
            </div>
            <div>
              <label for="lng">Enter Longitude</label>
              <input type="text" name="lng" placeholder="longitude" />
            </div>
            <div>
              <label for="rng">Enter Range in Km</label>
              <input
                type="text"
                defaultValue={100000}
                name="rng"
                placeholder="100000"
                required
              />
              <label className="col s12 ">
                <span>Default Value : Your Location</span>
              </label>
            </div>
            <div>
              <center><input
                onSubmit
                style={{ margin: "20px 0px" }}
                type="submit"
                name
                defaultValue="Find Ninjas"
              /></center>
            </div>
          </form>
          <ul>
            {Ninjas.map((val, index) => {
              return (
                <Ninja
                  available={val.available}
                  dist={val.dist.calculated}
                  geometry={val.geometry}
                  name={val.name}
                  rank={val.rank}
                  id={val._id}
                  key={index}
                />
              );
            })}
          </ul>
</div>

</header>
    </div>
  );
}

export default App;
