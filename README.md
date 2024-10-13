# Currency Exchanger Application

This project is a currency converter app built with React and Vite. Users can input an amount, select currencies, and convert values using the latest exchange rates from CurrencyAPI. The app provides real-time currency calculations based on up-to-date exchange rates.

## Features
- Real-time currency conversion.
- Accurate results using the latest exchange rates.
- User-friendly interface with quick response times.

## Requirements
To use this project:
- You will need a **CurrencyAPI key**. You can obtain your API key by signing up with your Google account at [CurrencyAPI](https://app.currencyapi.com/) and logging in.

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/currency-converter.git
   cd currency-converter
   
2. **Install Dependencies**:
   ```bash
   npm install
   
3. **Configure the API Key**:
  Open the src/Currency.jsx file.
  Update the API_KEY variable with your personal API key:
    ```bash
    let API_KEY = "paste_your_own_api_key_here";

4. **Run the Project**:
    ```bash
    npm run dev

## Deployment

### Building and Deploying the Project with Vite

**Build the Project**:

Generate deployment files in the `dist` folder:
```bash
npm run build
```
This command creates an optimized production version of the app.

### Deployment Platforms:

- **GitHub Pages**: Configure the `base` setting in `vite.config.js` to `/repo-name/` and deploy using GitHub Actions.
- **Netlify**: Deploy directly by selecting the `dist` folder or use Netlify CLI with `ntl deploy`.
- **Vercel**: Deploy with `vercel deploy` using the Vercel CLI or integrate via git.
- **Firebase**: Deploy using `firebase deploy` with a configured `firebase.json` file.










