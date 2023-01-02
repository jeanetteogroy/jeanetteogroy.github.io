import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import i1 from '../assets/1.jpg'
import i2 from '../assets/2.jpg'
import i3 from '../assets/3.jpg'
import i4 from '../assets/4.jpg'
import i5 from '../assets/5.jpg'
import i6 from '../assets/6.jpg'
import i7 from '../assets/7.jpg'
import i8 from '../assets/8.jpg'
import i9 from '../assets/9.jpg'
import i10 from '../assets/10.jpg'
import i11 from '../assets/11.jpg'
import i12 from '../assets/12.jpg'
import i13 from '../assets/13.jpg'
import i14 from '../assets/14.jpg'





export default function MasonryImageList() {
    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <Box sx={{ width: 500, height: "auto", overflowY: 'scroll' }}>
                <ImageList variant="masonry" cols={4} gap={8}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={item.img}
                                srcSet={`${item.img}`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </div>
    );
}

const itemData = [
    {
        img: i1,
        title: '',
    },
    {
        img: i2,
        title: '',
    },
    {
        img: i6,
        title: '',
    },
    {
        img: i3,
        title: '',
    },
    {
        img: i4,
        title: '',
    },
    {
        img: i11,
        title: '',
    },
    {
        img: i7,
        title: '',
    },
    {
        img: i14,
        title: '',
    },
    {
        img: i8,
        title: '',
    },
    {
        img: i9,
        title: '',
    },
    {
        img: i10,
        title: '',
    },
    {
        img: i13,
        title: ''
    },
    {
        img: i12,
        title: '',
    },
];