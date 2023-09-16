const router = require("express").Router();
const { nanoid } = require("nanoid");
const crypto = require("crypto");

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
    res.status(200).json({
      razorpayKeyID: process.env.RAZORPAY_KEY_ID,
      ...razorpayResponse,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

router.post("/paymentConfirmation", async (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    req.body;

  // Verify Payment
  const isPaymentVerified =
    crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex") === razorpay_signature;

  if (!isPaymentVerified) {
    return res.status(400).json({
      message: "Signature Mismatch! Something's lookin fishy! 😒",
    });
  }

  // Fetch Payment Details
  const paymentDetails = await razorpayInstance.payments.fetch(
    razorpay_payment_id
  );
  console.log("Razorpay Payment Details: ", paymentDetails);

  res.status(200).redirect("http://localhost:3000");
});

module.exports = router;
