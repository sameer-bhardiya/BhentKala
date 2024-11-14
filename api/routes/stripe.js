// const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);

// router.post("/payment",(req,res)=>{
//     stripe.charges.create({
//         source: req.body.tokenId,
//         amount:req.body.amount,
//         currency: "INR",
//     }, (stripeErr, stripeRes)=>{
//         if(stripeErr){
//             res.status(500).json(stripeErr)
//         }else{
//             res.status(200).json(stripeRes);
//         }
//     });
// });

// module.exports = router;


const router = require("express").Router();
const Razorpay = require("razorpay");

// Initialize Razorpay instance with your key_id and key_secret
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Create Razorpay Order
router.post("/create-order", async (req, res) => {
    try {
        const { amount } = req.body;

        // Create an order in Razorpay
        const options = {
            amount: amount * 100, // amount in smallest currency unit (paise)
            currency: "INR",
            receipt: `receipt_order_${Date.now()}`,
        };

        const order = await razorpay.orders.create(options);

        // Send order ID and other order details to client
        res.status(200).json({
            id: order.id,
            amount: order.amount,
            currency: order.currency,
        });
    } catch (error) {
        console.error("Error creating Razorpay order:", error);
        res.status(500).json({ error: "Something went wrong in Razorpay Order creation" });
    }
});

// Verify Razorpay Payment Signature
router.post("/verify-payment", (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    // Razorpay signature verification logic
    const crypto = require("crypto");

    const shasum = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
    shasum.update(razorpay_order_id + "|" + razorpay_payment_id);
    const digest = shasum.digest("hex");

    if (digest === razorpay_signature) {
        res.status(200).json({ message: "Payment verification successful" });
    } else {
        res.status(400).json({ message: "Payment verification failed" });
    }
});

module.exports = router;
