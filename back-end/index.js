import express from "express";
import chalk from "chalk";
import dotenv from "dotenv";
import cors from "cors";
import nodemailer from 'nodemailer'
import bodyParser from "body-parser";
import Stripe from 'stripe'
import { ReasonPhrases, StatusCodes } from "http-status-codes";

// .env configuration
dotenv.config();

// CORS Policy defined
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS", "HEAD"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "Accept",
    "Origin",
  ],
  credentials: false,
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const domainEmail = process.env.EMAIL_USER || ''
const passwordEmail = process.env.EMAIL_PASS || ''
const secretKey = process.env.STRIPE_SECRET_KEY || ''
const signKey = process.env.STRIPE_SIGN || ''
const port = process.env.PORT || 3000


app.get('/', async (req, res) => {
  res.send(`API is running on this ${port}`)
})




const stripe = Stripe('sk_test_51Q5CQjBSRlxFwzyWpwO9MYCbfPKEmJKJ9tGmyoDeHaSzB2KCUxtasfJdV1Qb311utzXiuccUMGhd91NR52KSMaAy00i4V12Ovz');

const transporter = nodemailer.createTransport({
  host: 'mail.trademark-gov.us',
  port: 587,
  secure: false,
  auth: {
    user: domainEmail,
    pass: passwordEmail
  }
});

// Webhook endpoint to listen for Stripe events
app.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {

  const sig = req.headers['stripe-signature'];

  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, signKey);
  } catch (err) {
    console.log(`⚠️  Webhook signature verification failed.`, err.message);
    return res.sendStatus(400);
  }

  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    // You can retrieve the user data from your system or from session metadata
    const { protectionType, nameToProtect, livingPerson, foreignWords, trademarkUsage, logoDescription, colorProtection, email } = session.metadata;

    let dataText = `Mark Name: ${protectionType}\n` +
      `Ownership Type: ${nameToProtect}\n` +
      `First Name: ${livingPerson}\n` +
      `Last Name: ${foreignWords}\n` +
      `Country: ${trademarkUsage}\n` +
      `Address: ${logoDescription}\n` +
      `City: ${colorProtection}\n`;

    const mailOptions = {
      from: email,
      to: 'fahadalam12405@gmail.com',
      subject: 'New User Email Submission',
      text: `You received a new email from: ${email}\n\nData:\n${dataText}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email:', error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }

  res.sendStatus(200);
});










// Checkout session creation
app.post('/create-checkout-session', async (req, res) => {

  const { selectedPackageDetails, formData } = req.body;
  const { plan, price, description } = selectedPackageDetails;
  const { protectionType, nameToProtect, livingPerson, foreignWords, trademarkUsage, logoDescription, colorProtection, email } = formData;
  // console.log(selectedPackageDetails)


  // console.log(formData)

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: plan,
            description: description,
          },
          unit_amount: parseInt(price * 100)
        },
        quantity: 1,
      }],
      mode: 'payment',
      metadata: {
        protectionType, nameToProtect, livingPerson, foreignWords, trademarkUsage, logoDescription, colorProtection, email
      },
      success_url: 'https://trademark-gov.us/success',
      cancel_url: 'https://trademark-gov.us/cancel',

    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).send('Internal Server Error');
  }
});







app.get("*", (req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({ message: ReasonPhrases.NOT_FOUND });
});

// listening port
app.listen(port, () =>
  console.log(chalk.white.bgBlue("Server started on port " + port))
);