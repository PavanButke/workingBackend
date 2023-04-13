const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
      orderItems: [
        {
          name: { type: String, required: false },
          qty: { type: Number, required: false },
          price: { type: Number, required: false },
          product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: false,
          },
        },
      ],
      shippingAddress: {
        name: { type: String, required: false },
        address: { type: String, required: false },
        city: { type: String, required: false },
        postalCode: { type: String, required: false },
        country: { type: String, required: false },
      },
      paymentResult: {
        id: String,
        status: String,
        update_time: String,
        email_address: String
      },
      itemsPrice: { type: Number, required: false },
      shippingPrice: { type: Number, required: false },
      totalPrice: { type: Number, required: false },
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false },
      isPaid: { type: Boolean},
      paidAt: { type: Date },
      isDelivered: { type: Boolean, default: false },
      deliveredAt: { type: Date },
      amount: {type:String, required:true},
      razorpay: {
        orderId: {type: String , required: true},
        paymentId: {type:String , required: true},
        signature:  {type:String , required: true},
      }
    },
    {
      timestamps: true,
    }
  );
  

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;

//export default Order;
