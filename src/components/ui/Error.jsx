import React from "react";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const Error = ({ message = "Something went wrong", onRetry }) => {
  return (
    <div className="section-padding bg-secondary-50">
      <div className="container-max">
        <div className="max-w-md mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <ApperIcon name="AlertCircle" className="w-10 h-10 text-red-600" />
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Oops! Something went wrong</h3>
          
          <p className="text-secondary-600 mb-8 leading-relaxed">
            {message}
          </p>
          
          {onRetry && (
            <Button onClick={onRetry} variant="primary" className="flex items-center gap-2 mx-auto">
              <ApperIcon name="RefreshCw" className="w-4 h-4" />
              Try Again
            </Button>
          )}
          
          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              Need immediate assistance? Call our emergency line at{" "}
              <a 
                href="tel:+15075551234" 
                className="font-semibold text-yellow-900 hover:underline"
              >
                (507) 555-1234
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;