/*
1- file structure
2- packages that we will use
3- create server //* (app.js, index.js)
4- scripts in json file //* (start, dev, test)
5- env file //* (port)
6- create mian router
7- create database //* (build.sql(tables)), (seeder.sql(fakeData))
8- connect databse //* (connction.js file)
9  env file //* (DB_URL, DEV_DB_URL, SECRET_KEY)
10- signupQuery
11- signupController
12- signupSchema
13- signpController //* (signupSchema.validateAsync), (hash password=>bcrypt.hash(password, cost)), (signupQuery(data))
14- jwt.js //* (signTokenPromise, verifyTokenPromise)
15- signupController //* (signToken)
16 - getUserByEmailQuery
17- signupController
18- 
*/

// signupSchema.validateAsync({ username, email, password, confirmPassword }, { abortEarly: false })
//   .then((data) => console.log(data))
//* return { username: value, email: value, password: value, confirmPassword: value }
//   .catch((err) => console.log(err));
//* return any validataion error form the request data like pass must be at least 5 characters

// signupSchema.validateAsync({ username, email, password, confirmPassword }, { abortEarly: false })
//   .then((data) => {
//     bcrypt.hash(password, 12)
//* hash password
//       .then((hash) => ({ username, email, password: hash }))
//* return object of user data with hashed password
//       .then((object) => console.log(object))
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => console.log(err));

// signupSchema.validateAsync({ username, email, password, confirmPassword }, { abortEarly: false })
//   .then(() => bcrypt.hash(password, 12)
//     .then((hash) => ({ username, email, password: hash }))
//     .then((data) => signupQuery(data))
//     .then((data) => data.rows[0])
//     .then((data) => {
//       //* store {id:, username:, email:} in req.user
//       req.user = data;
//       //* signToken return token
//       return signToken(data, { expiresIn: '30d' })
//         .then((token) => ({ token, user: req.user }))
// .then((token) => (console.log(token)))
//     }).then((token) => ({ token }))
//     .catch((err) => console.log(err)))
//   .catch((err) => console.log(err));


// signupSchema.validateAsync({ username, email, password, confirmPassword }, { abortEarly: false })
//   .then(() => {
//     return bcrypt.hash(password, 12)
//       .then((hash) => ({ username, email, password: hash }))
//* signupQuery return results object
//       .then((data) => signupQuery(data))
//* return data.rows from results object
//       .then((data) => data.rows[0])
//       .then((data) => {
//         req.user = data;
//         return signToken(data, { expiresIn: '30d' })
//           //* store token in cookie then send json that the user created successfully with its data
//           .then((token) => {
//             res
//               .cookie('token', token, { httpOnly: true, maxAge: ms('1d') })
//               .status(201)
//               .json(
//                 {
//                   error: false,
//                   data: { message: 'User Created Successfully', rows: req.user }
//                 })
//           })
//       })
//       .catch((err) => console.log(err))
//   })
//   .catch((err) => console.log(err));

// .catch (
//       (err) => next(err) //* when we write next and pass a parameter to it, it will search for function in the controller that have the four arguments and implement it (err, req, res, next) this mean it will go to the serverError
//     );
//* any error from the catch we will do like this => next(err)


// const signinController = (req, res, next) => {
//   const { email, password } = req.body;
  // console.log(password); //* password without hashing, compare will hash the password with the same salt that the original password use
//   signinSchema.validateAsync(req.body, { abortEarly: false })
//     .then((userData) => getUserByEmail(userData.email))
//     .then(data => console.log(data))
//     .then((userData) => {
//       if (userData.rowCount === 0) {
//         throw new CustomError(400, 'Invalid Email or Password')
//       }
      //* return the sepcific data for the user who own the email that you provided
      // console.log(userData.rows[0]);
//       req.user = data.rows[0]
//       return bcrypt.compare(password, userData.rows[0].password)
//     })
//     //* return boolean value
//     .then((isMatched) => {
//       if (!isMatched) {
//         throw new CustomError(400, 'Invalid Email or Password')
//       }

//     })
//     .then(() => {
//       const { id, username, email } = req.user
//       //* return token to store it in the cookie
//       return signToken({ id, username, email }, { expiresIn: '30d' })
//     })
//     .then((token) => {
//       res
//         .cookie('token', token, { httpOnly: true, maxAge: ms('1d') })
//         .json({
//           error: false,
//           data: {
//             message: 'User Logged In successfully',
//             user: req.user
//           }
//         })
//     })

//     .catch((err) => next(err))

// }
