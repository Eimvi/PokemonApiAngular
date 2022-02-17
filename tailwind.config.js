module.exports = {
  content: [
    // Example content paths...
    //Index
    './src/index.html',
    //Components
    './src/app/components/card/card.component.html',
    './src/app/components/card-info/card-info.component.html',
    './src/app/components/filter/filter.component.html',
    // Pages
    './src/app/pages/body/body.component.html',
    //Shared
    './src/app/shared/header/header.component.html',
    './src/app/shared/loading/loading.component.html',
    './src/app/shared/pagination/pagination.component.html',
  ],
  safelist: ['animate-fade-in', 'animate-fade-out', 'animate-scale-in', 'animate-scale-out'],
  theme: {
    extend: {
      colors: {
        poke: '#4d5066',
        poke_bg: '#F9F9F9',
        poke_body: '#F9F9F9',
        poke_header: '#ff4647'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        'fade-in':{
          '0%': { opacity: '0' },
          '100%': { opacity: '1'}
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        },
        'scale-in': {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)'  }
        },
        'scale-out': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)'  }
        }
    },
    animation: {
        'fade-in' : 'fade-in 0.5s ease-in ',
        'fade-out': 'fade-out 0.5s ease-in ',
        'scale-in': 'scale-in 0.3s ease-in ',
        'scale-out': 'scale-out 0.3s ease-in '
    }
    }
  },
  plugins: [],
}
