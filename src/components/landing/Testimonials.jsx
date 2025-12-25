import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        'CareerVault has revolutionized how I manage and share my employment history. The security is top-notch.',
      author: 'Sarah Johnson',
      title: 'Senior Product Manager',
      company: 'Tech Innovations Inc.',
    },
    {
      quote:
        'Finally, a tool that understands the importance of granular control and compliance for sensitive documents.',
      author: 'Michael Chen',
      title: 'Chief Compliance Officer',
      company: 'Global Enterprises',
    },
    {
      quote:
        'The audit trails and encryption give us complete peace of mind when managing employee documentation.',
      author: 'Emma Williams',
      title: 'HR Director',
      company: 'Fortune 500 Company',
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 gsap-fade-up">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-light text-gray-900 mb-6"
          >
            Trusted by{' '}
            <span className="font-normal text-[#4c6dfe]">Professionals Like You</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-2xl border border-gray-100 hover:border-[#4c6dfe]/30 hover:shadow-2xl relative"
              style={{ transition: 'all 0.4s ease' }}
            >
              <Quote className="w-10 h-10 text-[#4c6dfe]/20 mb-6" />
              <p className="text-gray-700 mb-8 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-medium text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600 mt-1">{testimonial.title}</p>
                <p className="text-sm text-[#4c6dfe] mt-1">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
