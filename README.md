# Mapitals Mobile

A React Native mobile app for Mapitals - a geography guessing game where players guess capital cities through a Hangman-style letter-guessing mechanic combined with progressive map reveals.

## Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- For iOS development: macOS with Xcode installed
- For Android development: Android Studio with an emulator configured

## Installation

1. Clone the repository:
```bash
git clone https://github.com/mjprude/mapitals-mobile.git
cd mapitals-mobile
```

2. Install dependencies:
```bash
npm install
```

## Running the App

### Start the development server:
```bash
npm start
```

This will start the Expo development server. You can then:

- Press `i` to open in iOS Simulator (macOS only)
- Press `a` to open in Android Emulator
- Press `w` to open in web browser
- Scan the QR code with the Expo Go app on your physical device

### Platform-specific commands:

```bash
# iOS (requires macOS)
npm run ios

# Android
npm run android

# Web
npm run web
```

## Development

### Linting
```bash
npm run lint
```

### Type Checking
```bash
npm run typecheck
```

## Project Structure

```
src/
├── components/
│   ├── game/       # Game-specific components
│   └── ui/         # Reusable UI components
├── constants/      # App constants and theme colors
├── hooks/          # Custom React hooks
├── navigation/     # Navigation configuration
├── screens/        # Screen components
├── types/          # TypeScript type definitions
└── utils/          # Utility functions
```

## Tech Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **Navigation**: React Navigation (Stack Navigator)
- **Maps**: @rnmapbox/maps
- **Storage**: AsyncStorage
- **Animations**: React Native Reanimated
- **Icons**: @expo/vector-icons

## Custom Theme Colors

The app uses custom colors matching the web version:

- Primary Purple: `#7751f8`
- Secondary Purple: `#9333ea`, `#4c1d95`
- Cyan Accent: `#06b6d4`, `#0891b2`
- Correct (Emerald): `#22C55E`
- Incorrect (Rose): `#EF4444`
- Score (Amber): `#D4AF37`

## Mapbox Configuration

To use Mapbox features, you'll need to:

1. Create a Mapbox account at [mapbox.com](https://www.mapbox.com/)
2. Get your access token from the Mapbox dashboard
3. Configure the token in your app (see Mapbox documentation for platform-specific setup)

## License

See the LICENSE file for details.
