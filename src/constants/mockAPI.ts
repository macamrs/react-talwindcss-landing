import { createServer } from "miragejs"

import pro1 from '../assets/pros/pro1.svg';
import pro2 from '../assets/pros/pro2.svg';
import pro3 from '../assets/pros/pro3.svg';
import pro4 from '../assets/pros/pro4.svg';

import testimony1 from '../assets/testimonials/testimony1.svg';
import testimony2 from '../assets/testimonials/testimony2.svg';
import testimony3 from '../assets/testimonials/testimony3.svg';

import video1 from '../assets/videos/video1.svg';
import video2 from '../assets/videos/video2.svg';
import video3 from '../assets/videos/video3.svg';
import video4 from '../assets/videos/video4.svg';
import video5 from '../assets/videos/video5.svg';

import contentCreator from '../assets/content-creator.svg';

// Mock API response
export function makeMockServer() {
    return createServer({
    routes() {
        this.get('/testimonial', () => {
            return {
                data :      
                 [
                    {
                        id: 1,
                        img: testimony1,
                        testimony: '« Those tutorials are concise and go straight to the point. I can’t think of a better place to learn smiling. And it’s so fun! »',
                        userName: 'Person Name',
                        occupation: 'Weather presenter'
                    },
                    {
                        id: 2,
                        img: testimony2,
                        testimony: '« Those tutorials are concise and go straight to the point. I can’t think of a better place to learn smiling. And it’s so fun! »',
                        userName: 'Person Name',
                        occupation: 'Entrepreneur'
                    },
                    {
                        id: 3,
                        img: testimony3,
                        testimony: '« Those tutorials are concise and go straight to the point. I can’t think of a better place to learn smiling. And it’s so fun! »',
                        userName: 'Person Name',
                        occupation: 'Web developer'
                    },
                    {
                        id: 4,
                        img: testimony1,
                        testimony: '« Those tutorials are concise and go straight to the point. I can’t think of a better place to learn smiling. And it’s so fun! »',
                        userName: 'Person Name',
                        occupation: 'Web developer'
                    },
                    {
                        id: 5,
                        img: testimony2,
                        testimony: '« Those tutorials are concise and go straight to the point. I can’t think of a better place to learn smiling. And it’s so fun! »',
                        userName: 'Person Name',
                        occupation: 'Web developer'
                    },
                    {
                        id: 6,
                        img: testimony3,
                        testimony: '« Those tutorials are concise and go straight to the point. I can’t think of a better place to learn smiling. And it’s so fun! »',
                        userName: 'Person Name',
                        occupation: 'Web developer'
                    },
                ],
            }
        }),
        this.get('/pros', () => {
            return {
                data :      
                 [
                    {
                        id: 1,
                        img: testimony1,
                        testimony: '« Those tutorials are concise and go straight to the point. I can’t think of a better place to learn smiling. And it’s so fun! »',
                        userName: 'Person Name',
                        occupation: 'Weather presenter'
                    },
                    {
                        id: 2,
                        img: testimony2,
                        testimony: '« Those tutorials are concise and go straight to the point. I can’t think of a better place to learn smiling. And it’s so fun! »',
                        userName: 'Person Name',
                        occupation: 'Entrepreneur'
                    },
                    {
                        id: 3,
                        img: testimony3,
                        testimony: '« Those tutorials are concise and go straight to the point. I can’t think of a better place to learn smiling. And it’s so fun! »',
                        userName: 'Person Name',
                        occupation: 'Web developer'
                    },
                    {
                        id: 4,
                        img: testimony1,
                        testimony: '« Those tutorials are concise and go straight to the point. I can’t think of a better place to learn smiling. And it’s so fun! »',
                        userName: 'Person Name',
                        occupation: 'Web developer'
                    },
                    {
                        id: 5,
                        img: testimony2,
                        testimony: '« Those tutorials are concise and go straight to the point. I can’t think of a better place to learn smiling. And it’s so fun! »',
                        userName: 'Person Name',
                        occupation: 'Web developer'
                    },
                    {
                        id: 6,
                        img: testimony3,
                        testimony: '« Those tutorials are concise and go straight to the point. I can’t think of a better place to learn smiling. And it’s so fun! »',
                        userName: 'Person Name',
                        occupation: 'Web developer'
                    },
                ],
            }
        }),
        this.get('/latest-videos', () => {
            return {
                data :      
                 [
                    {
                        id: 1,
                        img: testimony1,
                        testimony: '« Those tutorials are concise and go straight to the point. I can’t think of a better place to learn smiling. And it’s so fun! »',
                        userName: 'Person Name',
                        occupation: 'Weather presenter'
                    },
                    {
                        id: 2,
                        img: testimony2,
                        testimony: '« Those tutorials are concise and go straight to the point. I can’t think of a better place to learn smiling. And it’s so fun! »',
                        userName: 'Person Name',
                        occupation: 'Entrepreneur'
                    },
                    {
                        id: 3,
                        img: testimony3,
                        testimony: '« Those tutorials are concise and go straight to the point. I can’t think of a better place to learn smiling. And it’s so fun! »',
                        userName: 'Person Name',
                        occupation: 'Web developer'
                    },
                    {
                        id: 4,
                        img: testimony1,
                        testimony: '« Those tutorials are concise and go straight to the point. I can’t think of a better place to learn smiling. And it’s so fun! »',
                        userName: 'Person Name',
                        occupation: 'Web developer'
                    },
                    {
                        id: 5,
                        img: testimony2,
                        testimony: '« Those tutorials are concise and go straight to the point. I can’t think of a better place to learn smiling. And it’s so fun! »',
                        userName: 'Person Name',
                        occupation: 'Web developer'
                    },
                    {
                        id: 6,
                        img: testimony3,
                        testimony: '« Those tutorials are concise and go straight to the point. I can’t think of a better place to learn smiling. And it’s so fun! »',
                        userName: 'Person Name',
                        occupation: 'Web developer'
                    },
                ],
            }
        }),
        this.get('/popular-videos', () => {
            return {
                data :      
                 [
                    {
                        id: 1,
                        img: testimony1,
                        testimony: '« Those tutorials are concise and go straight to the point. I can’t think of a better place to learn smiling. And it’s so fun! »',
                        userName: 'Person Name',
                        occupation: 'Weather presenter'
                    },
                    {
                        id: 2,
                        img: testimony2,
                        testimony: '« Those tutorials are concise and go straight to the point. I can’t think of a better place to learn smiling. And it’s so fun! »',
                        userName: 'Person Name',
                        occupation: 'Entrepreneur'
                    },
                    {
                        id: 3,
                        img: testimony3,
                        testimony: '« Those tutorials are concise and go straight to the point. I can’t think of a better place to learn smiling. And it’s so fun! »',
                        userName: 'Person Name',
                        occupation: 'Web developer'
                    },
                    {
                        id: 4,
                        img: testimony1,
                        testimony: '« Those tutorials are concise and go straight to the point. I can’t think of a better place to learn smiling. And it’s so fun! »',
                        userName: 'Person Name',
                        occupation: 'Web developer'
                    },
                    {
                        id: 5,
                        img: testimony2,
                        testimony: '« Those tutorials are concise and go straight to the point. I can’t think of a better place to learn smiling. And it’s so fun! »',
                        userName: 'Person Name',
                        occupation: 'Web developer'
                    },
                    {
                        id: 6,
                        img: testimony3,
                        testimony: '« Those tutorials are concise and go straight to the point. I can’t think of a better place to learn smiling. And it’s so fun! »',
                        userName: 'Person Name',
                        occupation: 'Web developer'
                    },
                ],
            }
        })
    }
});
}
