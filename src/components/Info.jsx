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
        <div style={{display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6">Gaveliste fra Tilbords</Typography>
            <Typography> <Link href="https://www.tilbords.no/bryllup/vis-liste/105283">Link her</Link></Typography>
            <div style={{display: 'flex', flexDirection: 'row', gap: '2em'}}>

                <Card sx={{ maxWidth: 285 }}>
                <CardActionArea onClick={() => window.location.replace("https://goo.gl/maps/QytyiZLNvxTtmpj17")}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2003.379507748005!2d10.800311316082526!3d59.85944438184744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464168cca194fadd%3A0x89133b9b65aef71f!2sNordstrand%20kirke!5e0!3m2!1sno!2sno!4v1672065213469!5m2!1sno!2sno"
                        width="285" height="300" style={{border:0}} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Vielse
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Nordstrand kirke kl 14:30
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Ekebergveien 236, 1166 Oslo
                        </Typography>
                    </CardContent>
                </CardActionArea>

            </Card>

                <Card sx={{ maxWidth: 285 }}>
                    <CardActionArea onClick={() => window.location.replace("https://goo.gl/maps/QytyiZLNvxTtmpj17")}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1996.2300201821947!2d10.678631316087408!3d59.97809498189053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464172631dbd092d%3A0xd2872ce8abc65c82!2sSporten!5e0!3m2!1sno!2sno!4v1672065681195!5m2!1sno!2sno"
                            width="285" height="300" style={{border:0}} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Middag og bryllupsfest
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Sporten Frognerseteren kl 17:00
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Holmenkollveien 204, 0784 Oslo
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    )

}

