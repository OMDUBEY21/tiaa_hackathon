const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const Razorpay = require('razorpay');
var instance = new Razorpay({ key_id: 'rzp_test_x0OkMyBfvKp0ac', key_secret: 'ngKB4DX2x0ZOMWGbUR7GMGlb' })

dotenv.config({ path: './config.env' });

require('./db/conn');
//const User = require('./model/userSchema');
app.use(cors())
app.use(express.json());

app.use(require('./router/auth'));



const PORT = process.env.PORT;

app.post('/payment', (req, res) => {
    
    var options = {
        amount: 50000,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
    };
    instance.orders.create(options, function (err, order) {
        res.send(order);
    });

});

app.post("/verify", async (req, res) => {
	try {
		const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
			req.body;
		const sign = razorpay_order_id + "|" + razorpay_payment_id;
		const expectedSign = crypto
			.createHmac("sha256", "ngKB4DX2x0ZOMWGbUR7GMGlb")
			.update(sign.toString())
			.digest("hex");

		if (razorpay_signature === expectedSign) {
			return res.status(200).json({ message: "Payment verified successfully" });
		} else {
			return res.status(400).json({ message: "Invalid signature sent!" });
		}
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error!" });
		console.log(error);
	}
});


app.get('/features', (req, res) => {
    res.send('Hello world features');
});

app.get('/pricing', (req, res) => {
    res.send('Hello world pricing');
});

/* 
app.get('/chatbot', (req, res) => {
    console.log("hello about");
    res.send('Hello world chatbot');
}); */

app.get('/signin', (req, res) => {
    res.send('Hello world signin');
});

app.get('/signup', (req, res) => {
    res.send('Hello world signup');
});

app.listen(PORT, () => {
    console.log(`server is running at port no. ${PORT}`)
});