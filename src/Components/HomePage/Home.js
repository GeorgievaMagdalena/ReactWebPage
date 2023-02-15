import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import myImage from './imagesHome/image.jpg';
import './homepage.css'
import Interests from './Interests';

const Home = () => {
  function toCV(){
    window.scrollTo(0,700);
  }

  function toInterests(){
    window.scrollTo(0, 1500);
  }

  return (
    <>
      <br /><br />

        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="450"
                image={myImage}
                alt="myImage"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Magdalena Georgieva
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  student at FEEIT "Ss. Cyril and Methodius University"
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <div>
            <br /><br /><br /><br />
            <h1>Hello</h1>
            <h5>A bit about me</h5>
            <p>I am a student at Faculty of Electrical Engineering and Information Technologies. <br />
              I am currently  in the third year of studying Telecommunication and Information Engineering.<br />
              Here is my personal website. Take a look and learn little more about me, and add your own insight.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button type="button" onClick={toCV} id="cv" className="btn btn-warning btn-circle btn-xl outline" style={{ color: 'white', marginRight: '1%' }}>CV</button>
              <button type="button" onClick={toInterests} id="in" className="btn btn-primary btn-circle btn-xl outline" style={{ color: 'white' }}>Interests</button>
            </div>
          </div>

        </div>

        <br /><br /><br /><br /><br /><br />

        <div style={{ display: "flex", flexDirection: "row", backgroundColor: "#ffc107", padding: "1.5%"}}>
          <div style={{ flex: 1, marginRight: "1.5%"}}>
                <h3 >Personal info</h3>
                <div className='pos'>
                <p>Name</p>
                <p>Adress</p>
                <p>Nationality</p>
                <p>Date and place of birth</p>
                </div>
                
                <h3 >Education</h3>
                <div className='pos'>
                <p>Date</p>
                <p>Name and type of educational institution</p>
                <p>Date</p>
                <p>Name and type of educational institution</p>
                <p>First Language</p>
                <p>Other Languages</p>
                </div>
          </div>
          <div style={{ flex: 1}}>
          <div>
                <h3><br /></h3>
                <div>
                <p>Magdalena Georgieva</p>
                <p>Risto Krle n.7, Struga</p>
                <p>Macedonian</p>
                <p>04.08.2001, Struga, Republic of Macedonia</p>
                </div>
                
                <div>
                <h3><br /></h3>
                <p>2016 - 2020</p>
                <p>Highschool "Dr. Ibrahim Temo", Struga, Republic of Macedonia</p>
                <p>2020 - present</p>
                <p>Faculty of Electrical Engineering and Information Technologies, Ss. Cyril and Methodius University</p>
                <p>Macedonian</p>
                <p>English, French</p>
                </div>
                </div>
          </div>
        </div>

      <br /><br /><br /><br /><br />

      
      <div style={{backgroundColor: "#007BFF"}}>
        <Interests/>
      </div>
    </>

  )
}

export default Home