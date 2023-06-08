
import './App.css'
import Header from './components/Header'
import Images from './components/Images'
import Info from './components/Info'
import Divider from "./components/Divider.jsx";

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Typography from "@mui/material/Typography";
import {Link} from "@mui/material";
import * as React from "react";


function App() {

  return (
      <>
          {/*
              <Parallax pages={2}>

              <ParallaxLayer offset={0} speed={1} factor={0.5}>

              </ParallaxLayer>





              <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: 'white' }} >

              </ParallaxLayer>


              </Parallax>




          */}

          <Header />
          <div className="flex-column">
              <Typography variant="h6">Gaveliste fra Tilbords</Typography>
              <Typography> <Link href="https://www.tilbords.no/bryllup/vis-liste/105283">Link her</Link></Typography>
              <Typography>Pengegave er også mulig</Typography>
              <Typography>Ved pengegave kan dette settes inn på kontonummer 1210 24 83179</Typography>

          </div>
          <Divider />
          <Info />
          <Divider />
          <Images />
          <Divider />



      </>

  )
}

export default App
