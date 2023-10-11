# Goal Setter App

- Fullstack goal setter MERN aoo

Setup

- Comment out `line 26 - 38` and change the mode in .env to `development`.
- Run `npm run dev` and access frontend in `port 3000` and server in `port 5000`

Deployment

- Both frontend and backend held on the same host with the backend serving the react frontend.

1. Build out the frontend - npm run build
2. Add back `line 26 - 38` if commented out and remove cors since they are hosted on the same place.
3. Run `npm start` for the server and visit `\` for frontend served by backend.

Packages:

- `express-async-handler` - instead of using try-catch to handle exceptions in async express routes functions, it passes the exceptions to the custom express error handler defined under middleware folder.
- `concurrently` - run multiple commands concurrently instead of using multiple terminals.
- `nodemon` - automatic node application restart on file change
- `colors` - get color and style in terminal
- `bcrypt` - encrypt our passwords; hash passwords
- `jsonwbetoken` - json web tokens
- Others: `cors`, `dotenv`, `express`, `mongoose`
- Frontend: `@reduxjs/toolkit`, `@types/react-redux`, `axios`, `react-icons`, `react-redux`, `react-toastify`, `universal-cookie`, `vite-plugin-checker`

* NB: We authenticate by going against the DB ensuring we have the correct email and password, and we authorize by sending the right token to a private route.
