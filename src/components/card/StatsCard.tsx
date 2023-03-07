import React, { FC } from 'react';

interface StatsCardProps {
  children: string;
}

const StatsCard: FC<StatsCardProps> = ({ children }) => {
  return (
    <span className="rounded-lg bg-white py-2 px-4 text-xs font-bold tracking-wider text-black shadow-2xl">
      {children}
    </span>
  );
};

export default StatsCard;
