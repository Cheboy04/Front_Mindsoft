import type { Config } from "tailwindcss"

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
			colors: {
			// Paleta base
			azul: '#001689',
			rojo: '#ff4438',
			azulClaro: '#4d5fb0',
			rojoClaro: '#ff7a72',
			grisClaro: '#f2f2f2',
			grisOscuro: '#2e2e2e',
			
			// Colores oscuros
			night: '#070B12',
			night2: '#0B1220',
			surface: '#0E1726',
			surface2: '#111C2E',
			neonBlue: '#50A0FF',
			},
			backgroundImage: {
				'gradient-night': `
				radial-gradient(1200px 600px at 10% 0%, rgba(80, 160, 255, 0.18) 0%, rgba(0,0,0,0) 55%),
				radial-gradient(900px 500px at 90% 20%, rgba(255, 68, 56, 0.12) 0%, rgba(0,0,0,0) 60%),
				linear-gradient(180deg, #0B1220 0%, #070B12 100%)
				`,
			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))',
				blue: '#50A0FF',
				red: 'rgb(255, 68, 56)',
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
			backdropBlur: {
				'xl': '12px',
			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
}

export default config
