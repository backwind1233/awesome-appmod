#!/bin/bash

# Awesome AppMod Quick Start Script
# This script helps you get started with the Awesome App Modernization website

set -e

echo "🚀 Welcome to Awesome App Modernization Setup"
echo "=============================================="
echo ""

# Check Node.js version
echo "📦 Checking Node.js installation..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18 or higher."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'.' -f1 | sed 's/v//')
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version must be 18 or higher. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo ""

# Navigate to website directory
echo "📂 Navigating to website directory..."
cd website

# Install dependencies
echo "📥 Installing dependencies..."
npm install

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "  1. Start development server: cd website && npm start"
echo "  2. Build for production: cd website && npm run build"
echo "  3. Read SETUP.md for deployment instructions"
echo ""
echo "🌐 Local development will be available at:"
echo "   http://localhost:3000/awesome-appmod/"
echo ""
echo "Happy coding! 🎉"
