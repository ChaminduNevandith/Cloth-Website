import React, { useState } from "react";

function AddDetails() {
  const [selectedPayment, setSelectedPayment] = useState("");

  const handlePaymentChange = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
  };

  return (
    <div className="w-full md-w-[600px] mx-auto mt-10 p-10 bg-white ">
      {/* Contact Section */}
      <h2 className="text-xl font-semibold mb-4">Contact</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-[14px]">Email</label>
        <input
          type="email"
          className="w-full h-[50px] px-4 py-2 border rounded-md "
          placeholder="Email"
        />
      </div>
      <div className="flex items-center mb-4">
        <input type="checkbox" id="newsletter" className="mr-2" />
        <label htmlFor="newsletter" className="text-gray-700 text-[14px]">
          Email me with news and offers
        </label>
      </div>

      {/* Delivery Section */}
      <h2 className="text-xl font-semibold mb-4 ">Delivery</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-[14px]">
          Country/Region
        </label>
        <select className="w-full px-4 py-2 border rounded-md h-[50px]">
          <option value="Sri Lanka">Sri Lanka</option>
          {/* Add more country options here */}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 text-[14px]">First Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md h-[50px]"
            placeholder="First Name"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-[14px]">Last Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md h-[50px]"
            placeholder="Last Name"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-[14px]">Address</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-md h-[50px]"
          placeholder="Address"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-[14px]">
          Apartment, Suite, etc. (optional)
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-md h-[50px]"
          placeholder="Apartment, suite, etc. (optional)"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 text-[14px]">City</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md h-[50px]"
            placeholder="City"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-[14px]">
            Postal Code (optional)
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md h-[50px]"
            placeholder="Postal code (optional)"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-[14px]">Phone</label>
        <input
          type="tel"
          className="w-full px-4 py-2 border rounded-md h-[50px]"
          placeholder="Phone"
        />
      </div>

      <div className="flex items-center">
        <input type="checkbox" id="save-info" className="mr-2" />
        <label htmlFor="save-info" className="text-gray-700 text-[14px]">
          Save this information for next time
        </label>
      </div>

      {/* Payment Section */}
      <h2 className="text-xl font-semibold mt-6 mb-4 text-[14px]">Payment</h2>
      <div className="">
        {/* Koko Payment Option */}
        <div className="border border-black rounded-md p-4 ">
          <input
            type="radio"
            id="koko"
            name="payment"
            value="Koko"
            className="mr-2"
            checked={selectedPayment === "Koko"}
            onChange={() => handlePaymentChange("Koko")}
          />
          <label htmlFor="koko" className="text-gray-700 text-[14px]">
            Koko: Buy Now Pay Later
          </label>
          {selectedPayment === "Koko" && (
            <div className="mt-2 pl-6 border-t-2 border-black  p-4 text-sm text-gray-600">
              <p>Details for Koko payment...</p>
            </div>
          )}
        </div>

        {/* Onepay Payment Option */}
        <div className="border border-black rounded-md p-4 ">
          <input
            type="radio"
            id="onepay"
            name="payment"
            value="Onepay"
            className="mr-2"
            checked={selectedPayment === "Onepay"}
            onChange={() => handlePaymentChange("Onepay")}
          />
          <label htmlFor="onepay" className="text-gray-700 text-[14px]">
            Onepay
          </label>
          {selectedPayment === "Onepay" && (
            <div className="mt-2 pl-6 border-t-2 border-black  p-4 text-sm text-gray-600">
              <p>Details for Onepay payment...</p>
            </div>
          )}
        </div>

        {/* Mintpay Payment Option */}
        <div className="border border-black rounded-md p-4 ">
          <input
            type="radio"
            id="mintpay"
            name="payment"
            value="Mintpay"
            className="mr-2"
            checked={selectedPayment === "Mintpay"}
            onChange={() => handlePaymentChange("Mintpay")}
          />
          <label htmlFor="mintpay" className="text-gray-700 text-[14px]">
            Mintpay | Shop Now Pay Later
          </label>
          {selectedPayment === "Mintpay" && (
            <div className="mt-2 pl-6 border-t-2 border-black p-4 text-sm text-gray-600">
              <p>Details for Mintpay payment...</p>
            </div>
          )}
        </div>

        {/* Bank Deposit Payment Option */}
        <div className="border border-black rounded-md p-4">
          <input
            type="radio"
            id="bank"
            name="payment"
            value="Bank Deposit"
            className="mr-2"
            checked={selectedPayment === "Bank Deposit"}
            onChange={() => handlePaymentChange("Bank Deposit")}
          />
          <label htmlFor="bank" className="text-gray-700 text-[14px]">
            Bank Deposit
          </label>
          {selectedPayment === "Bank Deposit" && (
            <div className="mt-2 pl-6 border-t-2 border-black  p-4 text-sm text-gray-600">
              <p>Account Name: WW Clothing Holdings (Pvt) LTD</p>
              <p>Bank: Bank of Ceylon</p>
              <p>Branch: Lake View Branch</p>
              <p>Account #: 0090127398</p>
              <p>Use your order number in the email as a reference.</p>
              <p>Please send the slip to our WhatsApp: +94 77 422 6227</p>
            </div>
          )}
        </div>

        <h2 className="text-xl font-semibold mb-4 mt-8">Billing address</h2>

        <div className="mb-4">
          <div className="border border-gray-300 rounded-md">
            <div className="p-4">
              <input type="radio" name="billingAddress" className="mr-2" />
              <label
                htmlFor="sameAsShipping"
                className="text-gray-700 text-[14px]"
              >
                Same as shipping address
              </label>
            </div>
            <div className="p-4 border-t border-gray-300">
              <input type="radio" name="billingAddress" className="mr-2" />
              <label
                htmlFor="differentBilling"
                className="text-gray-700 text-[14px]"
              >
                Use a different billing address
              </label>
            </div>
          </div>
        </div>

        {/* Pay Now Button */}
        <div className="mt-6">
          <button className="w-full py-3 bg-black text-white rounded-sm hover:bg-gray-800 transition">
            Pay now
          </button>
        </div>

        {/* Links Section */}
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="/refund-policy"
            className="text-gray-500 text-sm hover:text-black"
          >
            Refund policy
          </a>
          <a
            href="/privacy-policy"
            className="text-gray-500 text-sm hover:text-black"
          >
            Privacy policy
          </a>
          <a
            href="/terms-of-service"
            className="text-gray-500 text-sm hover:text-black"
          >
            Terms of service
          </a>
        </div>
      </div>
    </div>
  );
}

export default AddDetails;
