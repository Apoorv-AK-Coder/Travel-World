// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [
//     react({
//       jsx: 'react',
//     }),
//   ],
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        page1: './src/index.jsx',
        page2: './src/about.jsx',
        // Add more entries for additional pages
      },
    },
  },
});