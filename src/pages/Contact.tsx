import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif font-bold text-center mb-12">Contact Us</h1>

      {/* Centered contact card */}
      <div className="flex justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-xl w-full">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-pink-600 mr-4" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center">
              <Mail className="h-5 w-5 text-pink-600 mr-4" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-600">contact@elegance.com</p>
              </div>
            </div>

            <div className="flex items-center">
              <MessageCircle className="h-5 w-5 text-pink-600 mr-4" />
              <div>
                <p className="font-medium">WhatsApp</p>
                <p className="text-gray-600">+1 (555) 987-6543</p>
              </div>
            </div>

            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-pink-600 mr-4" />
              <div>
                <p className="font-medium">Address</p>
                <p className="text-gray-600">123 Fashion Street</p>
                <p className="text-gray-600">Style City, SC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;