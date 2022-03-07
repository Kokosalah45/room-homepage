module.exports = {
  content: [
    './src/**/*.{html,js,jsx}',
  ],
  
  theme: {
    extend: {
      fontSize : {
        sm : '.75rem',
        normal  : '.8rem',
        'fluid-header' : 'clamp(1.5rem , 3vw + 1rem , 2.5rem)',
        'fluid-sec-header' : 'clamp(1rem , 3vw + .5rem , 1.5rem)',

      },
      padding : {
        fluid : 'clamp(1.5rem , 5vw , 5rem)'
      },
      margin :{
        '6/10' : '0.6rem'
      },
      maxWidth: {
        '42': '42ch',
      }
      
    },
  },
  plugins: [],
}
