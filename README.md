# SmileSchool Landing - Frontend Assigment 🚀

This application was created from a design made in Figma, using React.js with Typescript, using Tailwindcss as css framerwork and miragejs to create a mock API.

This involves working with the rendering of information and the time difference between the API response and the front end. In order to deal with the complications that come with these processes, I used a loader from React Spinners to show the user that information is being loaded. I also used Framer motion mainly to minimize the 'snapping' that is generated when rendering a new image.

### Without Framer
![20230525_195523_Trim_AdobeExpress](https://github.com/macamrs/react-talwindcss-landing/assets/89083483/7057dbcf-3fe7-4658-9672-237d0a15feb4)

### With Framer
![20230526_164731_Trim_AdobeExpress](https://github.com/macamrs/react-talwindcss-landing/assets/89083483/70dcc65a-4c20-41cc-96a2-24e5d020dc66)

There are two types of carousels: one fully coded (testimonials) and another using React Slick library. Both carousels are functional and use the loader component when there is no data to render. While neither carousel is complex, the use of libraries reduces code usage, keeps files small and allows for efficient component customization. 

In this case the use of Tailwindcss facilitated the creation of styles, several components and texts repeat the same style so it was only necessary to create a class that extends to these components without the need to create several css files. 

## Tech Stack

- React v18
- Typescript
- Tailwind CSS
- Miragejs
- React Slick
- React Lazy Load Image Component
- Framer motion

## Demo

https://smile-school-landing.vercel.app/

