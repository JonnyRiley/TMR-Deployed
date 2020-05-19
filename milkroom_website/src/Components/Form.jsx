// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="utf-8" />
//     <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
//     <meta name="viewport" content="width=device-width, initial-scale=1" />
//     <meta name="theme-color" content="#000000" />
//     <meta
//       name="description"
//       content="Web site created using create-react-app"
//     />
//     <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
//     <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
//     <title>themilkroom</title>
//     <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
//     <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
//     <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
//   </head>

//   <body>
//     <div id="root"></div>
//     <form name="contactUs" netlify netlify-honeypot="bot-field" hidden>
//       <input type="text" name="name" />
//       <input type="email" name="email" />
//       <select className="formInput" name="enquiry">
//         <option value="Party">PARTY</option>
//         <option value="Table Booking">TABLE BOOKING</option>
//         <option value="Gift Voucher">GIFT VOUCHER</option>
//         <option value="Other">OTHER</option>
//       </select>
//       <textarea name="comments"></textarea>
//     </form>
//     <div id="root"></div>
//     <script type="text/babel">
//       ReactDOM.render(
//         <form method="POST" name="contactUs" className="aboutUsText">
//           <input type="hidden" name="contactUs" value="contactUs" />
//           <label className="formButton">
//             Name:
//             <input
//               required
//               className="aboutInput"
//               type="text"
//               name="name"
//               placeholder=" Name"
//             ></input>
//           </label>
//           <br></br>
//           <label className="formButton">
//             Email:
//             <input
//               required
//               className="aboutInput"
//               type="text"
//               name="email"
//               placeholder=" Email"
//             ></input>
//           </label>
//           <br></br>
//           <label className="formOption">
//             Enquiry:
//             <select className="formInput" name="enquiry">
//               <option value="Party">PARTY</option>
//               <option value="Table Booking">TABLE BOOKING</option>
//               <option value="Gift Voucher">GIFT VOUCHER</option>

//               <option value="Other">OTHER</option>
//             </select>
//           </label>
//           <br></br>
//           <label className="formButtonComment" value="comments">
//             Comment:
//             <textarea
//               required
//               className="formComment"
//               name="comments"
//               placeholder=" Comment"
//             ></textarea>
//           </label>
//           <label className="formSubmitButton">
//             <button className="navButtonSubmitContact" type="submit">
//               SUBMIT
//             </button>
//           </label>
//         </form>,
//         document.getElementById("root")
//       );
//     </script>
//   </body>
// </html>
