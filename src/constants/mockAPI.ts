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
                        img: pro1,
                        name: "Phillip Massey",
                        award: "« Smile of the year »",
                        year: "2018 - 2019",
                    },
                    {
                        id: 2,
                        img: pro2,
                        name: "Nannie Lawrence",
                        award: "Best « little smile »",
                        year: "2017",
                    },
                    {
                        id: 3,
                        img: pro3,
                        name: "Bruce Walters",
                        award: "Best « Friend Smile »",
                        year: "live performance 2019",
                    },
                    {
                        id: 4,
                        img: pro4,
                        name: "Henry Hughes",
                        award: "« 24h smiles » winner ",
                        year: "2016 - 2019",
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
                        video: video5,
                        videoTitle: 'Inverted Smile',
                        videoDescription: 'Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.',
                        contentCreatorInfo: {
                        creatorImg: contentCreator,
                        creatorName: 'Phillip Massey',
                        videoLenght: 8,
                        fullStars: '3'      
                        }
                    },
                    {
                        id: 2,
                        video: video2,
                        videoTitle: 'Sad Smile',
                        videoDescription: 'Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.',
                        contentCreatorInfo: {
                        creatorImg: contentCreator,
                        creatorName: 'Phillip Massey',
                        videoLenght: 8,
                        fullStars: '3'      
                        }
                    },
                    {
                        id: 3,
                        video: video3,
                        videoTitle: 'Natural Smile',
                        videoDescription: 'Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.',
                        contentCreatorInfo: {
                        creatorImg: contentCreator,
                        creatorName: 'Phillip Massey',
                        videoLenght: 10,
                        fullStars: '5'      
                        }
                    },
                    {
                        id: 4,
                        video: video4,
                        videoTitle: 'Happy Smile',
                        videoDescription: 'Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.',
                        contentCreatorInfo: {
                        creatorImg: contentCreator,
                        creatorName: 'Phillip Massey',
                        videoLenght: 12,
                        fullStars: '4'      
                        }
                    },
                    {
                        id: 5,
                        video: video1,
                        videoTitle: 'Diagonal Smile',
                        videoDescription: 'Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.',
                        contentCreatorInfo: {
                        creatorImg: contentCreator,
                        creatorName: 'Phillip Massey',
                        videoLenght: 12,
                        fullStars: '4'      
                        },
                    }
                ]
            }
        }),
        this.get('/popular-videos', () => {
            return {
                data :      
                 [
                    {
                        id: 1,
                        video: video1,
                        videoTitle: 'Diagonal Smile',
                        videoDescription: 'Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.',
                        contentCreatorInfo: {
                          creatorImg: contentCreator,
                          creatorName: 'Phillip Massey',
                          videoLenght: 12,
                          fullStars: 4,      
                        }
                      },
                      {
                        id: 2,
                        video: video2,
                        videoTitle: 'Sad Smile',
                        videoDescription: 'Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.',
                        contentCreatorInfo: {
                          creatorImg: contentCreator,
                          creatorName: 'Phillip Massey',
                          videoLenght: 8,
                          fullStars: 3,     
                        }
                      },
                      {
                        id: 3,
                        video: video3,
                        videoTitle: 'Natural Smile',
                        videoDescription: 'Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.',
                        contentCreatorInfo: {
                          creatorImg: contentCreator,
                          creatorName: 'Phillip Massey',
                          videoLenght: 10,
                          fullStars: 5,    
                        }
                      },
                      {
                        id: 4,
                        video: video4,
                        videoTitle: 'Happy Smile',
                        videoDescription: 'Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.',
                        contentCreatorInfo: {
                          creatorImg: contentCreator,
                          creatorName: 'Phillip Massey',
                          videoLenght: 12,
                          fullStars: 4      
                        }
                      },
                      {
                        id: 5,
                        video: video5,
                        videoTitle: 'Inverted Smile',
                        videoDescription: 'Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.',
                        contentCreatorInfo: {
                          creatorImg: contentCreator,
                          creatorName: 'Phillip Massey',
                          videoLenght: 8,
                          fullStars: 3,      
                        }
                      },
                ],
            }
        })
    }
});
}
