import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      className="container mx-auto px-4 py-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h1 className="text-4xl font-serif font-bold text-center mb-12">Contact Us</h1>

      <div className="flex justify-center">
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8 max-w-xl w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <div className="space-y-4">
            {/* Info blocks */}
            {[{
              Icon: Phone,
              title: "Phone",
              value: "+1 (555) 123-4567"
            }, {
              Icon: Mail,
              title: "Email",
              value: "contact@elegance.com"
            }, {
              Icon: MessageCircle,
              title: "WhatsApp",
              value: "+1 (555) 987-6543"
            }, {
              Icon: MapPin,
              title: "Address",
              value: ["123 Fashion Street", "Style City, SC 12345"]
            }].map(({ Icon, title, value }, index) => (
              <motion.div
                key={title}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
              >
                <Icon className="h-5 w-5 text-pink-600 mr-4 mt-1" />
                <div>
                  <p className="font-medium">{title}</p>
                  {Array.isArray(value) ? (
                    value.map((line, i) => <p className="text-gray-600" key={i}>{line}</p>)
                  ) : (
                    <p className="text-gray-600">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;