import { motion } from 'framer-motion';
import { Zap, Award, Shield, Users } from 'lucide-react';

const WhyChoose = () => {
  const stats = [
    {
      icon: Users,
      number: '50,000+',
      label: 'Professionals trust us',
    },
    {
      icon: Shield,
      number: '99.99%',
      label: 'Uptime guarantee',
    },
    {
      icon: Zap,
      number: '<100ms',
      label: 'Average response time',
    },
    {
      icon: Award,
      number: '4.9/5',
      label: 'Customer satisfaction',
    },
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
            Trusted <span className="font-normal text-[#4c6dfe]">Worldwide</span>
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Excellence in every metric that matters
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white border border-gray-200 mb-6">
                  <Icon className="w-6 h-6 text-gray-900" />
                </div>
                <div className="text-5xl font-light text-[#4c6dfe] mb-2">{stat.number}</div>
                <p className="text-gray-600 font-light">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
