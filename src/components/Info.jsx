import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, Link} from '@mui/material';

export function ActionAreaCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                {/*<CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />*/}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default function Info() {

    return (
        <>

            <div className="main-column">

                <div className="main-column">
                    <div className="flex-column reverse">
                        <h2>
                            Vielse
                        </h2>
                        <p>
                            Nordstrand kirke kl 14:30
                        </p>
                        <p>
                            Ekebergveien 236, 1166 Oslo
                        </p>
                    </div>

                    <div className="flex-column">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2003.379507748005!2d10.800311316082526!3d59.85944438184744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464168cca194fadd%3A0x89133b9b65aef71f!2sNordstrand%20kirke!5e0!3m2!1sno!2sno!4v1672065213469!5m2!1sno!2sno"
                        width="285" height="300" style={{border:0}} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>

                <div className="main-column">
                    <div className="flex-column">
                        <h2>
                            Middag og bryllupsfest
                        </h2>
                        <p>
                            Sporten Frognerseteren kl 17:00
                        </p>
                        <p>
                            Holmenkollveien 204, 0784 Oslo
                        </p>
                    </div>
                    <div className="flex-column">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1996.2300201821947!2d10.678631316087408!3d59.97809498189053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464172631dbd092d%3A0xd2872ce8abc65c82!2sSporten!5e0!3m2!1sno!2sno!4v1672065681195!5m2!1sno!2sno"
                        width="285" height="300" style={{border:0}} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>

            </div>
            <div className="flex-column">
                <h3>Reiseinformasjon</h3>
            </div>


            <div className="main-column">

                <div className="flex-column">
                    <p>Til kirken er det mulig å ta trikk 19 og 13 til Sæter, med ca. 10 min. gange til kirken.</p>

                </div>

                <div className="flex-column">
                    <p>Fra kirken vil gjestene bli fraktet med buss til festlokalet, den vil forlate kirken klokken 15:30. </p>
                </div>
            </div>


        </>
    )

}

