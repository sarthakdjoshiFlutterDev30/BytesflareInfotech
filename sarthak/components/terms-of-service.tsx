import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">
        Welcome to <strong>Bytes Flare Infotech</strong>. By accessing our website or using our 
        services, you agree to comply with the following terms and conditions.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Use of Services</h2>
      <p className="mb-4">
        Our services are intended for legitimate business purposes only. You agree not to misuse 
        our services or attempt to interfere with their normal operation.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Intellectual Property</h2>
      <p className="mb-4">
        All content, logos, and designs on this website are the property of Bytes Flare Infotech. 
        You may not reproduce or distribute any material without prior written permission.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Limitation of Liability</h2>
      <p className="mb-4">
        Bytes Flare Infotech is not liable for any damages arising from the use of our website or services. 
        Use them at your own risk.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="mb-4">
        For any questions regarding these Terms of Service, please contact us at 
        <strong> info@bytesflareinfotech.com</strong>.
      </p>
    </div>
  );
};

export default TermsOfService;
