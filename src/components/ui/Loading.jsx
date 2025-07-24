import React from "react";

const Loading = () => {
  return (
    <div className="section-padding bg-secondary-50">
      <div className="container-max">
        {/* Header Skeleton */}
        <div className="text-center mb-16">
          <div className="h-12 bg-gradient-to-r from-secondary-200 to-secondary-300 rounded-lg mb-4 max-w-md mx-auto animate-pulse"></div>
          <div className="h-6 bg-secondary-200 rounded-lg mb-2 max-w-2xl mx-auto animate-pulse"></div>
          <div className="h-6 bg-secondary-200 rounded-lg max-w-xl mx-auto animate-pulse"></div>
        </div>

        {/* Cards Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white rounded-xl shadow-card p-8 animate-pulse">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-200 to-secondary-300 rounded-full mx-auto mb-6"></div>
              
              {/* Title */}
              <div className="h-6 bg-secondary-200 rounded-lg mb-4 max-w-32 mx-auto"></div>
              
              {/* Description */}
              <div className="space-y-2">
                <div className="h-4 bg-secondary-200 rounded-lg"></div>
                <div className="h-4 bg-secondary-200 rounded-lg max-w-4/5 mx-auto"></div>
                <div className="h-4 bg-secondary-200 rounded-lg max-w-3/5 mx-auto"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;