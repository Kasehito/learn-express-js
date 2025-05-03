const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8080;
const productRoutes = require("./routes/product.route");

mongoose
  .connect(

  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/products", productRoutes);

// app.get("/tshirt", (req, res) => {
//   res.status(200).send({
//     tshirt: "red",
//     size: "large",
//   });
// });

// app.get("/tshirt/:id", (req, res) => {
//   const { id } = req.params;
//   const { logo } = req.body;

//   if (!logo) {
//     res.status(418).send({
//       message: "We need a logo!",
//     });
//   }

//   res.status(200).send({
//     tshirt: `tshirt with ${id} and logo of ${logo}`,
//   });
// });
