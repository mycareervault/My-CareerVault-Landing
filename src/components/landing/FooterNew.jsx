import { motion } from 'framer-motion';

const FooterNew = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-6">
            <img src="/logo.svg" alt="CareerVault" className="h-8" />
            <p className="text-gray-500 text-sm font-light">
              © 2025 CareerVault. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-gray-600 hover:text-gray-900 font-light transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-light transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-light transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
