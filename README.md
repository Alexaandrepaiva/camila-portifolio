# Mechanical Engineer Portfolio

A professional portfolio website for a mechanical engineer, built with the T3 stack (TypeScript, Next.js, Tailwind CSS, NextAuth, and Drizzle ORM).

## Features

- Single-page application with smooth scrolling navigation
- Bilingual support (English and Portuguese)
- Responsive design for all devices
- Contact form with email functionality
- Resume download option

## Translation System

The website uses a JSON-based translation system to support multiple languages:

- Translation files are stored in `src/messages/{language}/common.json`
- The `useTranslation` hook in `src/lib/i18n.ts` provides access to translations
- Language can be switched using the language dropdown in the navigation bar

### Adding a New Translation

To add a new translation:

1. Create a new folder in `src/messages` with the language code (e.g., `fr` for French)
2. Copy the `common.json` file from another language folder and translate the values
3. Update the `Language` type in `src/lib/i18n.ts` to include the new language code

### Adding New Translation Keys

To add new translation keys:

1. Add the key and value to all language files (`src/messages/{language}/common.json`)
2. Use the key in your components with the `t` function: `t("yourNewKey")`

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- Shadcn UI
- Framer Motion
- React Scroll
- Drizzle ORM
- PostgreSQL