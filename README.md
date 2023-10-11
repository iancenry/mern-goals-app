# Goal Setter App

- Fullstack goal setter MERN aoo

## Quick Setup

1. Fork then clone the project into local machine 🍴
2. run npm install in the root folder and frontend to install all the necessary packages 👩‍💻
3. Add .env file with

```md
NODE_ENV = production
PORT = 5000
MONGO_URI = xxxx
JWT_SECRET = xxxx
```

4. Comment out `line 26 - 38` and change `NODE_ENV` in .env to `development` if in `production`.

5. Run `npm run dev` and access frontend in `port 3000` and server in `port 5000`
6. Happy coding 💻

## Deployment

- Both frontend and backend held on the same host with the backend serving the react frontend.

1. Build out the frontend - npm run build
2. Add back `line 26 - 38` if commented out and remove cors since they are hosted on the same place.
3. Run `npm start` for the server and visit `\` for frontend served by backend.
4. Host in heroku and add environment variables under `config vars` or similar functions in your host choice. etc.
5. If on heroku add the script: `"heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix frontend && npm run build --prefix frontend"`

Dependencies used:

- `express-async-handler` - instead of using try-catch to handle exceptions in async express routes functions, it passes the exceptions to the custom express error handler defined under middleware folder.
- `concurrently` - run multiple commands concurrently instead of using multiple terminals.
- `nodemon` - automatic node application restart on file change
- `colors` - get color and style in terminal
- `bcrypt` - encrypt our passwords; hash passwords
- `jsonwbetoken` - json web tokens
- Others: `cors`, `dotenv`, `express`, `mongoose`
- Frontend: `@reduxjs/toolkit`, `@types/react-redux`, `axios`, `react-icons`, `react-redux`, `react-toastify`, `universal-cookie`, `vite-plugin-checker`

* NB: We authenticate by going against the DB ensuring we have the correct email and password, and we authorize by sending the right token to a private route.
* TODO: fix date issue, when goal added it displays `Invalid Date` until reload.
