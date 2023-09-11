- express-async-handler - instead of using try-catch to handle exceptions in async express routes functions, it passes the exceptions to the custom express error handler defined under middleware folder.
- concurrently - run multiple commands concurrently instead of using multiple terminals.
- nodemon - automatic node application restart on file change
- colors - get color and style in terminal
- bcrypt - encrypt our passwords; hash passwords
- jsonwbetoken - json web tokens

- We authenticate by going against the DB ensuring we have the correct email and password, and we authorize by sending the right token to a private route/
