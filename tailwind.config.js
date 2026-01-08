/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      colors: {
        // Kremowe tło strony
        cream: '#F5F2EC',
        // Pastelowe akcenty
        sage: { 50: '#EEF5F0', 100: '#DDEDE3', 400: '#6F9F84', 600: '#4D7E66' },
        sand: { 50: '#FAF6F1', 100: '#F4EDE4' },
        blush: { 50: '#FBF2F2', 100: '#F7E7E7' },
        ink: { 700: '#3C3B37', 900: '#2B2A27' }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 10px 30px rgba(30, 50, 38, 0.08)',
        card: '0 12px 28px rgba(30, 50, 38, 0.10)',
        insetSoft: 'inset 0 1px 0 rgba(255,255,255,0.6)'
      },
      borderRadius: { xl: '1rem', '2xl': '1.25rem', '3xl': '1.5rem' },
      backgroundImage: {
        'wave-top':
          'radial-gradient(1200px 200px at 0% 0%, rgba(255,255,255,0.9), rgba(255,255,255,0) 70%), radial-gradient(600px 200px at 100% 0%, rgba(238,245,240,0.9), rgba(238,245,240,0) 65%)',
        'wave-mid':
          'radial-gradient(900px 180px at 0% 50%, rgba(244,237,228,0.85), rgba(244,237,228,0) 70%), radial-gradient(700px 170px at 100% 60%, rgba(238,245,240,0.8), rgba(238,245,240,0) 65%)',
        'wave-bottom':
          'radial-gradient(700px 180px at 0% 100%, rgba(251,242,242,0.65), rgba(251,242,242,0) 60%), radial-gradient(900px 200px at 100% 100%, rgba(238,245,240,0.8), rgba(238,245,240,0) 65%)',
        'card-gradient':
          'linear-gradient(180deg, #FFFFFF 0%, #EEF5F0 60%, #FAF6F1 100%)'
      }
    }
  },
  plugins: []
};