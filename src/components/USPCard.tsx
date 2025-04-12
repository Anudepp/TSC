import React from 'react';

interface USPCardProps {
  title: string;
  description: string;
}

const USPCard: React.FC<USPCardProps> = ({ title, description }) => (
  <div className="text-center">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default USPCard;