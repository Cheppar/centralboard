# The Central Board

A Next.js-based web application with a customizable full-width banner. A form to dynamically update banner elements without reloading. Built for Outreachy microtask T388234 to showcase frontend skills.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [Testing](#testing)
- [Repository](#repository)
- [Contact](#contact)

## Features
- **Full-Width Banner**:
  - Displays a title ("Hey! Secure discounted hikes"), subtext ("Join us for an adventure!"), and a button linking to an external HTTPS URL (default: `https://example.com`).
  - Customizable background image (`waves.jpg`), gradient color, text alignment (left, center, right), and button styles (colors, border width, margin color).
  - Share button to copy page URL and close button to hide banner.
  - Aligned flush left with responsive right margin (16px mobile, 24px tablet, 32px desktop).
- **Customization Form**:
  - Split into two forms:
    - **Appearance**: Edit banner text, subtext, text alignment, gradient color, and background image.
    - **Button & Sharing**: Adjust button background/text colors (side by side), text, HTTPS link, border width (0.5px–3.0px), margin color, and share message.
  - Updates banner instantly without page reload.
  - Validates button link to prefer HTTPS URLs (e.g., `https://x.com`).
- **Responsive Design**:
  - Adapts to mobile (~320px), tablet (~640px), and desktop (~1024px).
  - Includes ARIA labels for accessibility (e.g., close/share buttons).
- **Unit Tests**:
  - Verifies rendering, user interactions, and state updates using Jest and React Testing Library.

## Technologies
- **Framework**: Next.js 14 (React)
- **UI Components**: shadcn/ui (Button, Dialog, Input, Slider, dropdown menu)
- **Icons**: lucide-react (Share2, X, AlignLeft, AlignCenter, AlignRight)
- **Testing**: jest


- **Language**: JavaScript
- **Styling**: Tailwind CSS
- **Version Control**: Git

## Setup
1. **Clone Repository**:
   ```bash
   git clone <your-repo-url>
<<<<<<< HEAD
   cd black-coffee-network
   ``npm run dev``
=======
   cd repo-name
>>>>>>> 5d23fd26d91736ae8e3f52e6ca0c59a88be2c8fb
