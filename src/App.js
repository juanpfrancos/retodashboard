import React, { useState, useEffect } from "react";
import Axios from "axios";
import './App.css';
import Ciudades from "./components/Ciudades";
import Genero from "./components/Genero";
import Age from "./components/Age";

function App() {
   const [cities, setCities] = useState([]);
   const [genre, setGenre] = useState([])
   const ciudadesOrdered= []
   const agesOrdered= []
   const teen = []
   const youngAdult = []
   const adult = []
   let count1 = 0
   let count2 = 0
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

        for (var key in casosCiudades) {
          ciudadesOrdered.push({id:count1, ciudad:key, total:casosCiudades[key]});
          count1 = count1 + 1;
        }
        setCities(ciudadesOrdered)

    //Ages
        const ages = dataObj.map((i)=> parseInt(i.edad))
        const age = ages.reduce((countAges, age)=>{
          countAges[age] = (countAges[age] || 0)+1
          return countAges
        },{})
        
        for (var a in age) {
          agesOrdered.push({id:count2, age:a, total:age[a]});
          //count2 = count2+1;
          if ( a < 20){
            teen.push({id:count2, age:a, total:age[a]});
          }
          if (a >= 20 && a < 40){
            youngAdult.push({id:count2, age:a, total:age[a]});
          }
          if(a >= 40){
             adult.push({id:count2, age:a, total:age[a]});
          }
        }

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
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Genero data={genre}></Genero>
        <Ciudades data={cities}></Ciudades>
        <Age teen={teen} youngAdult={youngAdult} adult={adult}></Age>
      </header>
    </div>
  );
}

export default App;
