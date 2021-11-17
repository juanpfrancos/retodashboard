import React from 'react'
import Typography from '@mui/material/Typography';
import { Doughnut } from 'react-chartjs-2';
import Container from '@mui/material/Container';

function Genero(props){
    const data = {
      labels: ['Mujeres', 'Hombres'],
      datasets: [
        {
          label: 'Contagios',
          data: [props.data['M'], props.data['F']],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1,
        },
      ],
    }
    const options = {
        responsive: true
    }
    
    return(
        <Container>
            <Typography variant="h4" align="center" gutterBottom>Casos por Género</Typography>
            <Doughnut data={data} options={options}/>
        </Container>
    )
}

export default Genero