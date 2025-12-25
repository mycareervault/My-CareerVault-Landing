import { motion } from 'framer-motion';
import { AlertTriangle, FileX, ShieldAlert } from 'lucide-react';
import { Button } from '../ui/button';

const Problem = () => {
  const problems = [
    {
      icon: FileX,
      title: 'Fragmented Systems',
      description:
        'Documents scattered across email, cloud storage, and physical files.',
    },
    {
      icon: ShieldAlert,
      title: 'Security Gaps',
      description:
        'Lack of encryption and granular control when sharing sensitive documents.',
    },
    {
      icon: AlertTriangle,
      title: 'Compliance Risks',
      description:
        'No audit trails or transparency for document access and sharing.',
    },
  ];

  return (
    <section id="problem" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 gsap-fade-up">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-light text-gray-900 mb-6"
          >
            The Struggle to Safeguard Your{' '}
            <span className="font-normal text-[#4c6dfe]">Professional Identity</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Professionals and organizations grapple with fragmented systems,
            security gaps, and compliance risks when managing and sharing crucial
            career documents.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100"
                style={{ transition: 'all 0.4s ease' }}
              >
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-[#4c6dfe] hover:bg-[#3d5ce6] text-white px-8 py-6"
            style={{ transition: 'all 0.3s ease' }}
          >
            See How CareerVault Solves It
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
