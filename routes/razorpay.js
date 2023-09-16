const router = require("express").Router();
const { nanoid } = require("nanoid");

const razorpayInstance = require("../config/razorpay");

router.post("/generateOrder", async (req, res) => {
  const razorpayOptions = {
    amount: Number(req.body.amount) * 100, // amount in the smallest currency unit
    currency: "INR",
    receipt: nanoid(),
    notes: {
      whatup: "ssup shawty 😏",
    },
  };

  try {
    const razorpayResponse = await razorpayInstance.orders.create(
      razorpayOptions
    );

    console.log("Order Created! Razorpay Response: ", razorpayResponse);
    res.status(200).json(razorpayResponse);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

module.exports = router;
