import React, { useState, useEffect } from "react";
import Axios from "axios";
import './App.css';
import Ciudades from "./Ciudades";
import Genero from "./Genero";

function App() {
   const [cities, setCities] = useState([]);
   const [ages, setAges] = useState([]);
   const [genre, setGenre] = useState([])

  useEffect(() => {
    Axios({
      url: "https://www.datos.gov.co/resource/gt2j-8ykr.json",
    })
      .then((response) => {
        const dataObj = response.data

        
    //Cities
        const ciudades = dataObj.map(function(i){
          return i.ciudad_municipio_nom
        })

        const casosCiudades = ciudades.reduce((contadorCiudades, ciudad) =>{
          contadorCiudades[ciudad] = (contadorCiudades[ciudad] || 0) + 1
          return contadorCiudades
        },{})
        setCities(casosCiudades)

    //Genre
       const genero = dataObj.map(function(j){
         return j.sexo
       })

       const totalGenero = genero.reduce((contadorGenero,genero)=>{
         contadorGenero[genero] = (contadorGenero[genero] || 0)+1
         return contadorGenero
       },{})
       setGenre(totalGenero)
      })


      .catch((error) => {
        console.log(error);
      });
  }, [setCities]);




  return (
    <div className="App">
      <header className="App-header">
        <Genero data={genre}></Genero>
        <Ciudades data={cities}></Ciudades>
      </header>
    </div>
  );
}

export default App;
