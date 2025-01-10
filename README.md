# Pacto - Your AI-Powered Financial Assistant

Pacto helps you manage your money wisely by automating bill payments, protecting your savings, and providing AI-powered financial insights.

## System Architecture

The application follows a three-tier architecture:

1. **Frontend**: React/Next.js with TypeScript
2. **Backend**: Python with FastAPI
3. **Database**: Supabase (PostgreSQL)

## Features

- Waitlist registration and survey collection
- AI-powered financial chat assistance
- Automated bill payment management
- Smart budget categorization
- Real-time financial insights
- Multi-account management

## Tech Stack

### Frontend
- Next.js 14
- TypeScript
- Tailwind CSS
- React Context API
- Supabase Client

### Backend
- FastAPI
- Python
- JWT Authentication
- WebSocket Support
- OpenAI GPT-4 Integration

### Infrastructure
- Vercel (Frontend Hosting)
- Render (Backend Hosting)
- Supabase (Database)
- Upstash Redis (Caching)
- Brevo (Email Service)

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account
- Brevo account (for emails)
- OpenAI API key (for chat)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pacto.git
   cd pacto
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Fill in your environment variables in `.env.local`

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── components/     # Reusable UI components
├── contexts/       # React Context providers
├── hooks/          # Custom React hooks
├── lib/           # Utility functions and configurations
├── modules/       # Feature-specific modules
├── pages/         # Next.js pages
├── styles/        # Global styles
├── types/         # TypeScript type definitions
└── utils/         # Helper functions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
