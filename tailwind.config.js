/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    "./index.html",
    "./public/*.{html,js}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'headerbg': "url('./images/32331B89-94B2-48D5-B27E-1EC9769A2178.jpg')",
      },
      containers: {
        '2xs': '16rem',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
}
}
