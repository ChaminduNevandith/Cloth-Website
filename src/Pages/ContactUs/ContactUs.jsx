import ContactForm from "../../Components/ContactForm/ContactForm";
import { FaPhoneSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function ContactUs() {
  return (
    <section>
      {/* Responsive layout using flexbox */}
      <div className="flex flex-col justify-between px-4 py-8 lg:flex-row">
        {/* Left side - ContactForm */}
        <div className="w-full lg:w-1/2">
          <ContactForm />
        </div>

        {/* Right side - Contact information */}
        <div className="w-full mt-8 md:p-12 lg:w-1/2 lg:pl-8 lg:mt-0">
          <p className="text-sm text-center md:text-start">
            We'd love to hear from you - please use the form to
          </p>
          <p className="text-sm text-center md:text-start">
            send us your message or ideas
          </p>
          <div className="flex items-center justify-center mt-5 space-x-2 md:justify-start">
            <span>
              <FaPhoneSquare />
            </span>
            <p className="text-sm">TEXT: +94 71 7 255 255</p>
          </div>

          <div className="flex items-center justify-center mt-2 space-x-2 md:justify-start">
            <span>
              <MdEmail />
            </span>
            <p className="text-sm">online@kellyfelder.com</p>
          </div>

          <p className="mt-3 text-sm text-center md:text-start">
            345 Galle Rd,
          </p>
          <p className="text-sm text-center md:text-start">Colombo 00300,</p>
          <p className="text-sm text-center md:text-start">Sri Lanka.</p>
          <hr className="w-2/3 my-2 border-t border-gray-300" />

          <p className="text-sm text-center md:text-start">Opening Hours:</p>
          <p className="text-sm text-center md:text-start">
            MON to SAT: 10:00AM - 8:00PM
          </p>
          <p className="text-sm text-center md:text-start">
            SUN: 10:00AM - 8:00PM
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
