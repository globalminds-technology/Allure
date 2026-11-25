import React from "react";

export const Loading: React.FC<{ label?: string }> = ({ label = "Loading Allure..." }) => {
  return (
    <div className="min-h-[300px] w-full flex flex-col items-center justify-center p-8">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-2 border-brand-sand"></div>
        <div className="absolute inset-0 rounded-full border-2 border-brand-burgundy border-t-transparent animate-spin"></div>
      </div>
      <p className="mt-4 text-xs tracking-widest text-brand-maroon uppercase font-serif">
        {label}
      </p>
    </div>
  );
};
