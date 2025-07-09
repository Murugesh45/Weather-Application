import axios from "axios"
import search from "./assets/search.png"
import sun from "./assets/sun.png"
import {useState} from "react"
import sky from "./assets/download.jpeg"
import wind1 from "./assets/wind1.png"
import heat from "./assets/heat.png"
import "./App.css"
import { useEffect } from "react"

const key= "fd278f55637a6401fdb32a638acf1a33" ;






const App=()=> {
  const[weather,setWeather]=useState("")
  const[city,setCity]=useState("chennai")
  const[temp,setTemp]=useState("0")
  const[lon,setLon]=useState("")
  const[lat,setLat]=useState("")
  const[country,setCountry]=useState()
  const[wind,setWind]=useState()
  const[humidity,setHumidity]=useState()
  const[error,setError]=useState("")


   
  const data=()=>{
  const fetchWeather=  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=Metric`)
  fetchWeather.then((res)=>{
    console.log(res.data)
    setWeather(res.data)
    setTemp(res.data.main.temp)
    setLon(res.data.coord.lon)
    setLat(res.data.coord.lat)
    setCountry(res.data.sys.country)
    setWind(res.data.wind.speed)
    setHumidity(res.data.main.humidity)
    


  })
  .catch((error)=>
  {
    setError("please enter correct city name")
  })
  }
  useEffect(()=>{
    data()
  },[])
     
const cityName=(e)=>{
          setCity(e.target.value)
}  
const changeData=(e)=>{
  if(e.key==="Enter"){
    data()
  }
}






    
   

  
  
  
return (
  <div>
  <div className="head">
    <div className="container">
    <div className="input-conatiner">
    
    <input type="text" onChange={cityName} onKeyDown={changeData} placeholder="Enter a city name"className="city"/>
    <img src={search} onClick={data} height="20px" className="image"/>
    <div className="error"><p>{error}</p></div>
    </div>
   </div>
     <img src={sun} height="150px" className="img1"/>
     <h2>{temp}<sup>o</sup>C</h2>
   
    <h3>{weather.name}</h3>
    <h4>{country}</h4>
    <div className="data"> 
      <div className="data1"><p>longitude</p>{lon}</div>
      <div className="data2"><p>latitude</p>{lat}</div>
    </div>
    <div className="wind">
     <div className="wind1"> <p >Windspeed <img src={wind1} className="wind0"/></p>{wind} km/h</div>
     <div className="wind1"><p>Humidity<img src={heat}  className="heat"/></p>{humidity}%</div>
    </div>

   </div>

   

  </div>
  
  
    
    
   
  

  )

}
export default App







