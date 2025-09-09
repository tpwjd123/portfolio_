# Overview

This is a video editor portfolio website for "Gerold", designed to showcase video editing services and creative work. The site presents a professional portfolio with a modern, clean aesthetic featuring Korean typography (AstaSans font family) and focuses on highlighting the editor's experience, client testimonials, and creative capabilities. The website is a single-page application with smooth animations and modern design elements that emphasizes visual storytelling and professional credibility.

# Recent Changes

**September 9, 2025**: Complete implementation of the Gerold video editor portfolio website
- Implemented the full site based on the original design from themejunction.net
- Created responsive HTML structure with header, hero section, skills, about, services, and portfolio sections
- Applied custom font families: AstaSans (replacing Sora) and SUIT (replacing Font Awesome 6Pro) as requested
- Integrated GSAP animations for smooth scrolling, fade-in effects, progress bars, and counters
- Set up static server workflow on port 5000 for development
- Applied purple gradient color scheme (#8B5CF6 to #06B6D4) throughout the design

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Static HTML/CSS Website**: Built as a traditional static website using vanilla HTML and CSS
- **Typography System**: Custom Korean font family (AstaSans) loaded via CDN with multiple font weights (300-800) for rich typography hierarchy
- **Responsive Design**: Mobile-first approach with viewport meta tag and responsive CSS patterns
- **Fixed Navigation**: Sticky header with backdrop blur effects for modern UI aesthetics
- **Component-Based Styling**: CSS organized with clear component separation (header, navigation, containers)

## Visual Design Patterns
- **Glass Morphism**: Header uses backdrop-filter blur effects with semi-transparent backgrounds
- **Color Scheme**: Purple accent color (#8B5CF6) with clean white backgrounds and dark text
- **Brand Integration**: Logo implementation using SVG for scalability
- **Client Showcase**: Brand carousel/grid layout for displaying trusted clients and partnerships

## Layout Structure
- **Container System**: Centered layout with max-width constraints (1200px) for optimal reading experience
- **Navigation System**: Horizontal navigation bar with logo and menu items
- **Hero Section**: Prominent introduction area showcasing the editor's role and experience
- **Statistics Display**: Quantified achievements (12+ years experience, 100+ clients)
- **Brand Gallery**: Visual client testimonials through logo displays

# External Dependencies

## CDN Resources
- **Font Delivery**: Uses `cdn.jsdelivr.net` for AstaSans Korean font family delivery
- **Asset Hosting**: External image hosting via `themejunction.net` for portfolio images and brand logos

## Third-Party Assets
- **Template Source**: Built upon or inspired by Gerold HTML template from ThemeJunction
- **Icon System**: SVG-based iconography for scalable vector graphics
- **Image Assets**: External hosting for hero images, brand logos, and portfolio thumbnails

## Browser APIs
- **Font Display API**: Utilizes `font-display: swap` for optimal font loading performance
- **CSS Features**: Modern CSS properties including backdrop-filter, flexbox, and viewport units