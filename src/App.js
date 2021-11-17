import React, { useState, useEffect } from "react";
import Axios from "axios";
import './App.css';
import Ciudades from "./components/Ciudades";
import Genero from "./components/Genero";
import Age from "./components/Age";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function App() {
   const [cities, setCities] = useState([]);
   const [age, setAge] = useState([])
   const [genre, setGenre] = useState([])
   const ciudadesOrdered= []
   let count = 0
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
          ciudadesOrdered.push({id:count, ciudad:key, total:casosCiudades[key]});
          count = count + 1;
        }
        setCities(ciudadesOrdered)

    //Ages
        const ages = dataObj.map((i)=> parseInt(i.edad))
        const age = ages.reduce((countAges, age)=>{
          countAges[age] = (countAges[age] || 0)+1
          return countAges
        },{})
        setAge(age)
        

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
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h5" color="inherit" noWrap>
            Dashboard Covid-19 Colombia
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8} lg={7}>
          <Ciudades data={cities}></Ciudades>
        </Grid>
        <Grid item xs={12} md={8} lg={5}>
          <Genero data={genre}></Genero>
        </Grid>
      </Grid>
      
      
      <Age data={age}></Age>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
        >
          💻 Desarrollado por <a href="https://github.com/juanpfrancos">@Juanpfrancos</a>
        </Typography>
      </Box>
    </div>
  );
}

export default App;
