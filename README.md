
# TrackYourFunds

A sleek and intuitive expense tracking application that helps you manage your personal finances with ease.

## Overview

TrackYourFunds is a modern web application designed to help users track, categorize, and visualize their expenses. With a clean and responsive interface, it provides an easy way to monitor spending habits and make informed financial decisions.

## Features

- **Expense Tracking**: Quickly add expenses with amounts, descriptions, and categories
- **Visual Analytics**: Interactive pie charts that break down spending by category
- **Expense Management**: View, sort, and delete your recorded expenses
- **Financial Statistics**: Get insights into your spending habits with key metrics like total spend, average expense, and top spending categories
- **Persistent Storage**: All data is saved locally in your browser for privacy and convenience

## Technology Stack

- **React**: For building a responsive and interactive UI
- **TypeScript**: For type-safe code that's easier to maintain
- **Tailwind CSS**: For modern, utility-first styling
- **shadcn/ui**: For consistent, accessible UI components
- **Recharts**: For data visualization
- **date-fns**: For date formatting and calculations
- **Local Storage API**: For client-side data persistence

## Getting Started

### Prerequisites

- Node.js (v14 or later recommended)
- npm or yarn package manager

### Installation

1. Clone the repository
```sh
git clone <repository-url>
cd TrackYourFunds
```

2. Install dependencies
```sh
npm install
# or
yarn install
```

3. Start the development server
```sh
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:8080`

## Usage

1. **Adding an Expense**:
   - Enter the amount
   - Provide a short description
   - Select a category
   - Click "Add Expense"

2. **Viewing Expenses**:
   - Scroll through your recent expenses in the list
   - See a breakdown of expenses by category in the pie chart
   - Check your spending statistics at the top

3. **Deleting an Expense**:
   - Click the trash icon next to any expense to remove it

