import React from 'react';
import { Typography, Grid } from '@material-ui/core';
//import CardComponent from './Card/Card';
import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastupdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
        <Typography gutterBottom variant="h4" component="h2">Global</Typography>
      <Grid container spacing={3} justifyContent="center">
        <Typography
          className={styles.infected}
          cardtitle="Infected"
          value={confirmed.value}
          lastupdate={lastupdate}
          cardsubtitle="Number of active cases from COVID-19."
        />
        <Typography
          className={styles.recovered}
          cardtitle="Recovered"
          value={recovered.value}
          lastupdate={lastupdate}
          cardsubtitle="Number of recoveries from COVID-19."
        />
        <Typography
          className={styles.deaths}
          cardtitle="Deaths"
          value={deaths.value}
          lastupdate={lastupdate}
          cardsubtitle="Number of deaths caused by COVID-19."
        />
      </Grid>
    </div>
  );
};

export default Info;
/*import React from 'react'
import {Card,CardContent,Typography,Grid} from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({data:{cases,recovered,deaths}})=>{
    if(!cases){
        return 'Loading.....'
    }
    console.log(cases.value)
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify ="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card ,styles.cases)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Cases</Typography>
                        <Typography variant ="h5">
                            <CountUp start ={0}end={cases}duration={2.5}separator=","/>
                            </Typography>
                        <Typography variant ="body2">No of active cases</Typography>
                    </CardContent>

                    </Grid>

                                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card ,styles.deaths)}>

                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                         <Typography variant ="h5">
                            <CountUp start ={0}end={deaths}duration={2.5}separator=","/>
                            </Typography>
                        
                        <Typography variant ="body2">No of active cases</Typography>
                    </CardContent>

                    </Grid>

                                   <Grid item component={Card} xs={12} md={3} className={cx(styles.card ,styles.recovered)}>

                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                         <Typography variant ="h5">
                            <CountUp start ={0}end={recovered}duration={2.5}separator=","/>
                            </Typography>
                       
                        <Typography variant ="body2">No of active cases</Typography>
                    </CardContent>

                    </Grid>



            </Grid>
        </div>
   )
}



export default Cards
*/