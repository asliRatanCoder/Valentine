# 💝 Valentine's Day Proposal App 💝

A fun and interactive React application to ask that special someone to be your Valentine!

## Features

- ❤️ Beautiful Valentine's Day themed design
- 🎯 Interactive "No" button that moves away when hovered
- 🎉 Celebration animation with confetti when "Yes" is clicked
- 📧 Email notification system (EmailJS)

## Setup

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Set up Email Notifications (Optional but recommended):**

   To receive email notifications when she says "Yes", you'll need to set up EmailJS:

   a. Go to [https://www.emailjs.com/](https://www.emailjs.com/) and create a free account

   b. Create an email service (Gmail, Outlook, etc.)

   c. Create an email template with these variables:
   - `{{to_name}}`
   - `{{from_name}}`
   - `{{message}}`

   d. Get your credentials:
   - Service ID
   - Template ID
   - User ID (Public Key)

   e. Open `src/App.jsx` and replace these values around line 26:

   ```javascript
   const serviceId = "YOUR_SERVICE_ID";
   const templateId = "YOUR_TEMPLATE_ID";
   const userId = "YOUR_USER_ID";
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - The app will run at `http://localhost:5173`
   - Share this URL with your Valentine! 💕

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready to deploy!

## How It Works

- When she moves the cursor toward the "No" button, it jumps to a random position
- When she clicks "Yes", you get a beautiful celebration screen with confetti
- An email notification is sent to you (if configured)
- The console will also log the response

## Tips

- Test the app before sharing it!
- Make sure email notifications are working
- You can customize colors, text, and animations in `src/App.css`
- Consider deploying to Vercel, Netlify, or GitHub Pages for easy sharing

## Alternative Notification Methods

If you don't want to use EmailJS, you can:

1. Use a Discord webhook (add webhook URL in the code)
2. Use Telegram Bot API
3. Use a simple backend endpoint
4. Check the browser console logs

Good luck! 🍀💕
