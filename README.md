# 💰 Simple Money - Metal Markets Price Tracker

A modern, responsive web application built with React and Vite that tracks real-time prices for precious metals, industrial metals, and rare earth elements. The application provides an intuitive interface to browse, filter, and view detailed information about various metals.

---

## 📋 Project Overview

**Simple Money** is a single-page application (SPA) that helps users track metal prices with real-time price updates. The app displays a comprehensive list of metals including gold, silver, copper, and rare earth elements with their current market prices, historical data, and price trend indicators.

---

## ✨ Features Implemented

### 1. **Home Page (Metal Market Dashboard)**
   - **Grid/List View Toggle**: Switch between grid and list layouts
   - **Dynamic Card Display**: Beautiful cards showing metal information with hover effects
   - **Sorting Options**: Sort metals by name (A-Z, Z-A) or price (Low-High, High-Low)
   - **Search Functionality**: Input field to search for metals (ready for filtering)
   - **Real-Time Price Updates**: Prices update every 6 seconds with animated transitions
   - **Color-Coded Indicators**: 
     - Metal color indicators with glowing effects
     - Green trends for price increases
     - Red trends for price decreases
   - **Quick View Button**: Navigate to detailed view with one click
   - **Time Display**: Shows the last update time in AM/PM format

### 2. **Details Page (Individual Metal View)**
   - **Hero Header**: Large, visually appealing metal header with icon and category
   - **Current Price Display**: Prominent price display with unit information
   - **Price Change Indicator**: Shows the price delta and percentage change with color coding
   - **footer Grid**: 6-card responsive grid showing:
     - Previous Open Price
     - Previous Close Price
     - 24H High
     - 24H Low
     - Currency Type
     - Last Updated Timestamp
   - **Responsive Design**: Optimized for mobile and desktop viewing
   - **Smooth Animations**: Hover effects on stat cards

### 3. **Navigation**
   - **React Router**: Client-side routing for seamless navigation
   - **Dynamic Routes**: `/` for home, `/:id` for individual metal details
   - **Header Component**: Consistent navigation header with branding

### 4. **UI/UX Improvements**
   - **Modern Design**: Glassmorphism effects with backdrop blur
   - **Gradient Accents**: Subtle gradient borders and backgrounds
   - **Shadow Depth**: Layered shadows for visual hierarchy
   - **Color Coding**: Category-based color theming (Precious, Industrial, Rare)
   - **Responsive Typography**: Font sizes adjust for mobile devices
   - **Smooth Transitions**: Hover states and transform effects
   - **Optimized Spacing**: Compact layout for better information density

---

## 🛠️ Technologies Used

### Frontend Framework
- **React 19.2.4** - UI library for building interactive components
- **React DOM 19.2.4** - React rendering for web
- **React Router DOM 7.13.1** - Client-side routing

### Build Tools
- **Vite 8.0.1** - Fast build tool and development server
- **@vitejs/plugin-react 6.0.1** - React plugin for Vite

### Code Quality
- **ESLint 9.39.4** - Code linting and style checking
- **ESLint Plugins** - React hooks and refresh support

### Styling
- **CSS3** - Custom styling with modern features (gradients, filters, grid, flexbox)
- **Font Awesome Icons** - SVG and icon library integration

---

## 📁 Project Structure

```
Simple Money/
├── src/
│   ├── pages/
│   │   ├── Home.jsx          # Main dashboard with metal cards
│   │   ├── Details.jsx       # Individual metal details view
│   │   └── mock.js           # Mock data (50 metals database)
│   ├── Components/
│   │   └── Header.jsx        # Navigation header component
│   ├── App.jsx               # Main app component with routing
│   ├── App.css               # Global and component styles
│   └── main.jsx              # React entry point
├── public/                   # Static assets
├── package.json             # Project dependencies
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint configuration
└── README.md                # This file
```

---

## 📊 Mock Data Structure

The application uses **mock data** (`src/pages/mock.js`) containing **50 metals** organized in three categories:

### Metal Categories

1. **Precious Metals (4 metals)**
   - Gold, Silver, Platinum, Palladium
   - Highest prices, investment-grade

2. **Industrial Metals (23 metals)**
   - Copper, Nickel, Zinc, Lead, Aluminum, Iron, Steel, etc.
   - Used in manufacturing and construction

3. **Rare Earth Elements (23 metals)**
   - Rare earth metals like Scandium, Neodymium, Terbium, etc.
   - High-value elements for technology

### Data Fields Per Metal

Each metal object contains:
```javascript
{
  id: 1,                          // Unique identifier
  name: "Gold",                   // Metal name
  symbol: "XAU",                  // Market symbol
  color: "#FFD700",               // Display color (hex)
  price: 7200,                    // Current price
  open: 7100,                     // Opening price
  close: 7150,                    // Closing price
  high: 7250,                     // 24H high
  low: 7050,                      // 24H low
  currency: "INR",                // Currency (INR/USD)
  unit: "per 10g",                // Unit of measurement
  category: "Precious"            // Category classification
}
```

### Real-Time Price Updates

The `Home.jsx` component includes an automatic price update mechanism:
- **Interval**: Updates every 6 seconds
- **Simulation**: Random price fluctuation (±₹1-2) per update
- **Profit Calculation**: Automatically calculates percentage change
- **Memory Cleanup**: Clears interval on component unmount

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd "Simple Money"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview the build:**
   ```bash
   npm run preview
   ```

6. **Run linting:**
   ```bash
   npm run lint
   ```

---

## 📄 Key Components Explained

### Home.jsx
- **State Management**: Uses `useState` for metals list, hover states, and grid/list toggle
- **Sorting Logic**: Multiple sort options with index-based switching
- **Real-Time Updates**: `setInterval` for automatic price updates
- **Grid Layout**: CSS Grid for responsive card display
- **Interactive Cards**: Hover effects show background color tint

### Details.jsx
- **Route Params**: Uses `useParams()` to get metal ID from URL
- **Safety Checks**: Null checks for missing metals
- **Color Theming**: Dynamic styling based on metal category
- **Grouped Data**: Organized footer in a 2-column responsive grid
- **Formatted Output**: Currency symbols (₹/$) and decimal formatting

### Header.jsx
- **Branding**: Application logo and title
- **Live Badge**: Real-time indicator with animated pulse
- **Consistent Navigation**: Fixed position header across all pages

### App.css
- **Global Styles**: Base typography, spacing, and colors
- **Component Styles**: Dedicated classes for cards, buttons, grids
- **Responsive Design**: Mobile-first media queries
- **Glassmorphism**: Backdrop blur effects on premium elements
- **Animations**: Smooth transitions and hover states

---

## 🎨 Styling & UI/UX Details

### Design System

**Color Palette:**
- Precious Metals: `#FFD700` (Gold)
- Industrial Metals: `#A9A9A9` (Silver Gray)
- Rare Earth: `#8A2BE2` (Purple)
- Neutral: `#1a202c` (Dark), `#718096` (Gray)

**Spacing Scale:**
- Container: 40px padding
- Cards: 12-18px padding
- Gaps: 12-16px between items
- Mobile: Reduced to 20px padding

**Typography:**
- Font: Poppins (via CSS)
- Headings: 1.6rem (mobile), 2rem (desktop)
- Body: 0.85rem - 1rem
- Labels: 0.7rem (uppercase, letter-spaced)

**Visual Effects:**
- Box shadows: Layered for depth
- Border radius: 10-16px for modern look
- Hover effects: 2px translate + shadow increase
- Gradients: Purple gradient accent bars

---

## 🔄 Data Flow

```
App.jsx (Router Setup)
    ├── Header.jsx (Navigation)
    └── Routes
        ├── Home.jsx
        │   ├── mock.js (getallmetals())
        │   ├── Real-time price updates (setInterval)
        │   └── Card components
        └── Details.jsx
            ├── useParams() to get metal ID
            ├── mock.js (getmetalbyid())
            └── Display metal details
```

---

## 📱 Responsive Design

### Mobile Optimizations
- **Breakpoint**: 768px
- **Container**: Reduced padding on mobile
- **Typography**: Smaller font sizes
- **Grid**: Single column layout
- **Cards**: Full-width adaptive sizing
- **Touch-Friendly**: Larger tap targets (32px minimum)

### Desktop Features
- **Multi-column Grid**: Auto-fit responsive grid
- **Hover Effects**: Visible only on desktop
- **Wider Spacing**: More breathing room
- **Larger Typography**: Better readability on larger screens

---

## ⚙️ Configuration

### Vite Config (`vite.config.js`)
- React plugin for JSX transformation
- Fast refresh for development

### ESLint Config (`eslint.config.js`)
- Enforces React best practices
- Hooks rule validation
- Code consistency checks

---

## 🔮 Future Enhancements

### Planned Features
1. **Real API Integration**: Replace mock data with live market API
2. **Search Filtering**: Implement search functionality for metals
3. **Price Charts**: Add Chart.js for historical price graphs
4. **Watchlist**: Save favorite metals to local storage
5. **Dark Mode**: Toggle between light and dark themes
6. **Advanced Sorting**: Multi-field sorting and filtering
7. **Currency Toggle**: Switch between INR/USD prices
8. **Alerts**: Price threshold notifications
9. **Export Data**: CSV/JSON export functionality
10. **Authentication**: User accounts and preferences

---

## 💡 How the Project Works

### Project Initialization
1. Started with React + Vite template
2. Installed React Router for navigation
3. Created component structure (pages, components)
4. Implemented mock data with 50 metals

### Development Process
1. **Home Page**: Built responsive grid with mock data
2. **Details Page**: Created detail view with parameter routing
3. **Styling**: Applied modern CSS with glassmorphism
4. **Optimization**: Reduced sizes and improved responsive design
5. **Real-Time Updates**: Added automatic price updates
6. **UI Polish**: Enhanced with hover effects and animations

### Key Decisions
- **Mock Data**: Used to avoid API dependencies during development
- **React Router**: For client-side navigation without page reloads
- **CSS-Only**: No CSS framework for lightweight, custom styling
- **Real-Time Updates**: Simulates live market data behavior
- **Responsive First**: Mobile-friendly design from the start

---

## 🐛 Common Issues & Solutions

### Issue: Prices not updating
**Solution**: Ensure the interval cleanup function is properly set in the return statement of useEffect.

### Issue: Metal not found on details page
**Solution**: Verify the metal ID exists in mock.js and matches the route parameter.

### Issue: Styles not applying
**Solution**: Check that App.css is imported in all component files using `import '../App.css'`.

---

## 📝 Notes for Contributors

- Keep component logic in the `pages/` folder
- Store reusable components in `Components/` folder
- Add new metal data to `mock.js` following the existing structure
- Update CSS classes in `App.css` for new components
- Test responsive design on mobile devices
- Maintain consistent spacing and typography

---

## 📄 License

This project is open source and available for educational purposes.

---

## 👨‍💻 Author Notes

This project demonstrates:
- ✅ React hooks (useState, useEffect) and component composition
- ✅ React Router implementation for multi-page applications
- ✅ Modern CSS techniques (Grid, Flexbox, Gradients)
- ✅ Real-time data updates and state management
- ✅ Responsive design principles
- ✅ Mock data handling without API dependencies
- ✅ User interaction patterns (sorting, filtering, navigation)

---

**Happy coding! 🚀**

For questions or improvements, feel free to modify and experiment with the codebase!
