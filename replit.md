# Portfolio Website

## Overview

This is a modern, responsive portfolio website built for Muhammad Sohaib, showcasing his work as a final year BS Computer Science student specializing in AI, Blockchain, and Distributed Systems. The application features a clean, professional design with smooth animations and interactive elements to present projects, experience, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **UI Components**: Radix UI primitives wrapped in custom shadcn/ui components for accessibility and consistency
- **Animations**: Framer Motion for smooth page transitions and interactive animations
- **State Management**: TanStack Query for server state management and caching

### Component Structure
- **Single Page Application**: All content sections (Hero, About, Projects, Experience, Contact) are rendered on a single scrollable page
- **Section-based Navigation**: Smooth scrolling navigation between different portfolio sections
- **Theme Support**: Light/dark mode toggle with system preference detection
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **API Structure**: RESTful endpoints with validation using Zod schemas
- **Contact Form**: Server-side form processing with validation and error handling
- **Development Setup**: Vite integration for hot module replacement during development

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema**: User authentication schema defined but currently unused (future feature)
- **In-memory Storage**: Temporary storage implementation for development
- **Session Management**: Express session handling with PostgreSQL session store

### Build System
- **Build Tool**: Vite for fast development and optimized production builds
- **TypeScript**: Full TypeScript support with path mapping for clean imports
- **Static Assets**: Optimized asset handling and code splitting
- **Production Deploy**: ESBuild for server bundling and static file serving

### External Dependencies
- **Database**: Neon Database (PostgreSQL) for production data storage
- **Email Service**: Contact form ready for integration with email services like SendGrid or Nodemailer
- **CDN**: Google Fonts integration for typography
- **Development Tools**: Replit-specific plugins for development environment integration