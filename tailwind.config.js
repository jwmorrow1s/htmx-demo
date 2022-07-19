/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./index.html", "./templates/**.html"],
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    // text-shadow[-sm|lg]
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities({
        'text-shadow': (value) => ({
          textShadow: value,
        }),
      }, {
        values: theme('textShadow')
      })
    }),
    // htmx-extensions
    plugin(function ({ addVariant }) {
      addVariant('htmx-settling', ['&.htmx-settling', '.htmx-settling &']);
      addVariant('htmx-request', ['&.htmx-request', '.htmx-request &']);
      addVariant('htmx-swapping', ['&.htmx-swapping', '.htmx-swapping &']);
      addVariant('htmx-added', ['&.htmx-added', '.htmx-added &']);
    }),
  ],
};
