/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          // Main color: RGB(236, 114, 78) = #EC724E
          primary: '#EC724E',      // Main color
          'primary-dark': '#D85A35',   // Darker shade of main color
          'primary-light': '#F08B6A',  // Lighter shade of main color
          'primary-lightest': '#FCE7E1', // Very light shade for backgrounds
          
          // Secondary color: RGB(16, 24, 39) = #101827  
          secondary: '#101827',    // Secondary color - much darker blue
          'secondary-dark': '#0F1419', // Darker shade of secondary
          'secondary-light': '#1F2937', // Lighter shade of secondary (gray-800 equivalent)
          'secondary-lightest': '#F3F4F6', // Very light shade for backgrounds (gray-100)
          
          // Legacy mappings for compatibility
          accent: '#101827',       // Maps to secondary
          light: '#F3F4F6',        // Maps to secondary-lightest
          lightest: '#FCE7E1',     // Maps to primary-lightest
        },
        // Keep corporate colors as they work well with black/white theme
        corporate: {
          dark: '#1f2937',         // Current gray-800
          medium: '#6b7280',       // Current gray-500
          light: '#f9fafb',        // Current gray-50
        }
      }
    }
  }
};
