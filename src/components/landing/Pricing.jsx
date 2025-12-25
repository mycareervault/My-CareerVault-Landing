import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '../ui/button';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '0',
      period: 'Forever Free',
      description: 'Perfect for individuals getting started',
      features: [
        '5 GB Storage',
        'Up to 100 documents',
        'Basic encryption',
        'Email support',
        'Mobile app access',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Professional',
      price: '19',
      period: 'per month',
      description: 'For professionals managing their career',
      features: [
        'Unlimited storage',
        'Unlimited documents',
        'End-to-end encryption',
        'Priority support',
        'Version history',
        'Advanced sharing',
        'Audit logs',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Contact sales',
      description: 'For teams and organizations',
      features: [
        'Everything in Professional',
        'Custom storage limits',
        'SSO & SAML',
        'Dedicated support',
        'SLA guarantee',
        'Custom integrations',
        'Admin dashboard',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
            Simple, <span className="font-normal text-[#4c6dfe]">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Choose the plan that's right for you. All plans include 14-day money-back guarantee.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? 'bg-[#4c6dfe] text-white shadow-2xl shadow-[#4c6dfe]/30 scale-105'
                  : 'bg-white border-2 border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-[#4c6dfe] px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3
                  className={`text-2xl font-normal mb-2 ${
                    plan.popular ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-2">
                  {plan.price === 'Custom' ? (
                    <span className="text-4xl font-light">Custom</span>
                  ) : (
                    <>
                      <span className="text-5xl font-light">${plan.price}</span>
                      <span
                        className={`ml-2 ${
                          plan.popular ? 'text-white/70' : 'text-gray-500'
                        }`}
                      >
                        /{plan.period}
                      </span>
                    </>
                  )}
                </div>
                <p
                  className={`text-sm ${
                    plan.popular ? 'text-white/80' : 'text-gray-600'
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 ${
                        plan.popular ? 'text-white' : 'text-[#4c6dfe]'
                      }`}
                    />
                    <span
                      className={`text-sm font-light ${
                        plan.popular ? 'text-white' : 'text-gray-600'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-6 text-base font-medium ${
                  plan.popular
                    ? 'bg-white text-[#4c6dfe] hover:bg-gray-100'
                    : 'bg-[#4c6dfe] text-white hover:bg-[#3d5ce6]'
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-gray-500 mt-12 font-light"
        >
          All plans include 14-day money-back guarantee. No questions asked.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
