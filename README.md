# NBRO - National Bio Research Organisation

India's unified platform for research, learning, and innovation.

## Overview

NBRO is a comprehensive digital ecosystem designed to connect students, researchers, laboratories, companies, and the general public to accelerate scientific discovery and drive innovation across India. Our platform bridges the gap between academic research, industry innovation, and public knowledge.

## Features

### Core Platform Features

- **Research Opportunity Board** - Discover internships, fellowships, grants, and research positions from institutions across India with smart matching and application tracking.

- **Lab Marketplace** - Browse state-of-the-art laboratories, their equipment, expertise, and availability. Book facilities or request collaboration directly.

- **Collaboration Tools** - Find research partners, join projects, and communicate seamlessly. Build your network with researchers who share your interests.

- **Knowledge Hub** - Access a curated library of research papers, publications, events, and educational resources all in one centralized platform.

- **Innovation Discovery** - Companies can explore breakthrough research, emerging technologies, and innovative solutions from India's brightest minds.

## Who Benefits

NBRO is built for everyone in the research ecosystem:

- **Students** - Launch your research career with internships, mentorships, and hands-on experience
- **Researchers** - Amplify your impact by connecting with peers and accessing advanced facilities
- **Lab Owners** - Maximize your reach and attract top talent
- **Organizations** - Fuel innovation by discovering breakthrough research and recruiting exceptional talent
- **General Public** - Stay informed about scientific discoveries and engage with India's research community
- **Innovators** - Transform ideas into reality with funding and mentorship opportunities

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn-ui
- **Animation**: Framer Motion
- **State Management**: TanStack React Query
- **Routing**: React Router
- **Form Handling**: React Hook Form
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nbro
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn-ui components
│   ├── HeroSection.tsx
│   ├── CoreFeatures.tsx
│   ├── AudiencePersonas.tsx
│   ├── ProblemsSolved.tsx
│   ├── WhatNBRORepresents.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── pages/              # Page components
├── assets/             # Images and static files
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## Key Components

### HeroSection
The landing hero section with animated background, headline, CTA buttons, and statistics.

### CoreFeatures
Showcases the main platform features with descriptions and imagery.

### AudiencePersonas
Displays the different user personas and their benefits from NBRO.

### ProblemsSolved
Highlights the key challenges NBRO addresses in the research ecosystem.

### WhatNBRORepresents
Explains the ecosystem and value proposition of the platform.

## Styling

The project uses Tailwind CSS with custom color variables defined in `src/index.css`:

- **Primary Colors**: Mint, Teal, Emerald
- **Accent Colors**: Lime, Mint Light
- **Glassmorphism Effects**: Custom glass-card components
- **Gradients**: Pre-defined gradient utilities

## Deployment

The project can be deployed to any hosting platform that supports Node.js and React applications:

- Vercel
- Netlify
- AWS Amplify
- GitHub Pages
- Traditional VPS/Cloud servers

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For more information about NBRO, visit our website or contact us at:
- Email: contact@nbro.gov.in
- Location: New Delhi, India
- Phone: +91 11 2345 6789

## Acknowledgments

Built with modern web technologies and best practices for performance, accessibility, and user experience.

