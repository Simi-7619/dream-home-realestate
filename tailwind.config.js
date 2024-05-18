/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        logoGreen: '#3DBC67'
      },
      backgroundImage:{
        'sliderOne': "linear-gradient(25deg, rgba(0,0,0,0.3981967787114846) 0%, rgba(0,0,0,0.3981967787114846) 57%), url('https://shreethemes.in/towntor/assets/images/bg.jpg')",
        'sliderTwo': "linear-gradient(25deg, rgba(0,0,0,0.3981967787114846) 0%, rgba(0,0,0,0.3981967787114846) 57%), url('https://shreethemes.in/towntor/layouts/images/bg/01.jpg')",
        'sliderThree': "linear-gradient(25deg, rgba(0,0,0,0.3981967787114846) 0%, rgba(0,0,0,0.3981967787114846) 57%), url('https://shreethemes.in/towntor/layouts/images/property/3.jpg')",
        'sliderFour': "linear-gradient(25deg, rgba(0,0,0,0.3981967787114846) 0%, rgba(0,0,0,0.3981967787114846) 57%), url('https://shreethemes.in/towntor/layouts/images/property/2.jpg.jpg')",
        'sliderFive': "linear-gradient(25deg, rgba(0,0,0,0.3981967787114846) 0%, rgba(0,0,0,0.3981967787114846) 57%), url('https://shreethemes.in/towntor/layouts/images/property/6.jpg')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
