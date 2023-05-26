# SmileSchool Landing - Frontend Assigment 🚀

This application was created from a design made in Figma, using React.js with Typescript, using Tailwindcss as css framerwork and miragejs to create a mock API.

This involves working with the rendering of information and the time difference between the API response and the front end. In order to deal with the complications that come with these processes, I used a loader from React Spinners to show the user that information is being loaded. I also used Framer motion mainly to minimize the 'snapping' that is generated when rendering a new image.

### Without Framer
![20230525_195523_Trim_AdobeExpress](https://github.com/macamrs/react-talwindcss-landing/assets/89083483/7057dbcf-3fe7-4658-9672-237d0a15feb4)

### With Framer
![20230526_164731_Trim_AdobeExpress](https://github.com/macamrs/react-talwindcss-landing/assets/89083483/70dcc65a-4c20-41cc-96a2-24e5d020dc66)

There are two types of carousels: one fully coded (testimonials) and another using React Slick library. Both carousels are functional and use the loader component when there is no data to render. While neither carousel is complex, the use of libraries reduces code usage, keeps files small and allows for efficient component customization. 

In this case the use of Tailwindcss facilitated the creation of styles, several components and texts repeat the same style so it was only necessary to create a class that extends to these components without the need to create several css files. 

## Demo

https://smile-school-landing.vercel.app/

## Tech Stack

- React v18
- Typescript
- Tailwind CSS
- Miragejs
- React Slick
- React Lazy Load Image Component
- Framer motion

## Responsive design 
### Mobile
![Captura web_26-5-2023_17352_smile-school-landing vercel app](https://github.com/macamrs/react-talwindcss-landing/assets/89083483/22e35b9f-bdd0-4f5f-bf7a-04179dd05429)

![image](https://github.com/macamrs/react-talwindcss-landing/assets/89083483/ad78f7c6-ac62-473d-a3d6-cd0628381b1e)

### Tablet
![Captura web_26-5-2023_173440_smile-school-landing vercel app](https://github.com/macamrs/react-talwindcss-landing/assets/89083483/59128782-8a46-405c-b48a-b69638bef385)

### Desktop
![Captura web_26-5-2023_17340_smile-school-landing vercel app](https://github.com/macamrs/react-talwindcss-landing/assets/89083483/d8b3b309-029f-42a6-a97a-db28cb9df005)
