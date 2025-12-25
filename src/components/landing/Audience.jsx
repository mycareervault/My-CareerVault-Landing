import { motion } from 'framer-motion';
import { Briefcase, Users, Building2, UserCheck } from 'lucide-react';

const Audience = () => {
  const audiences = [
    {
      icon: Briefcase,
      title: 'Professionals',
      description:
        'Seasoned executives and emerging talents managing their career journey',
    },
    {
      icon: Users,
      title: 'HR Teams',
      description:
        'Human resources managing employee documentation and compliance',
    },
    {
      icon: Building2,
      title: 'Enterprises',
      description:
        'Organizations prioritizing data integrity and security at scale',
    },
    {
      icon: UserCheck,
      title: 'Compliance Officers',
      description:
        'Ensuring regulatory compliance and audit readiness',
    },
  ];

  return (
    <section id="about" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 gsap-fade-up">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-light text-gray-900 mb-6"
          >
            For the Demanding{' '}
            <span className="font-normal text-[#4c6dfe]">Professional and Organization</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Whether you're a seasoned executive, an emerging talent, or an
            organization prioritizing data integrity, CareerVault provides the
            tools to manage your professional identity with unparalleled security.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-xl border border-gray-100 group"
                style={{ transition: 'all 0.4s ease' }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#4c6dfe]/10 to-[#4c6dfe]/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110"
                  style={{ transition: 'transform 0.4s ease' }}
                >
                  <Icon className="w-8 h-8 text-[#4c6dfe]" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  {audience.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {audience.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Audience;
