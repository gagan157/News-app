module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    extend: { 
      colors:{      
        navbg : 'var(--color-nav)',
        navbg1: 'var(--color-nav-mob)',
        navtext : 'var(--nav-text-color)',
        navhover : 'var(--color-nav-li-hover)',
    
    },
    },
  },
  plugins: [
   
    require('@tailwindcss/line-clamp'),
   
  ],
}
