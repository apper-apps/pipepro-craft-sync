import React from "react";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const Empty = ({ message = "No items found", actionLabel = "Contact Us", onAction }) => {
  const handleDefaultAction = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="section-padding bg-secondary-50">
      <div className="container-max">
        <div className="max-w-md mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <ApperIcon name="Search" className="w-10 h-10 text-primary-700" />
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Nothing to show here</h3>
          
          <p className="text-secondary-600 mb-8 leading-relaxed">
            {message}
          </p>
          
          <Button 
            onClick={onAction || handleDefaultAction} 
            variant="primary" 
            className="flex items-center gap-2 mx-auto"
          >
            <ApperIcon name="MessageCircle" className="w-4 h-4" />
            {actionLabel}
          </Button>
          
          <div className="mt-8 p-4 bg-gradient-to-r from-accent-50 to-primary-50 border border-accent-200 rounded-lg">
            <p className="text-sm text-secondary-700">
              Have questions about our pipe services? We're here to help!{" "}
              <a 
                href="tel:+15075551234" 
                className="font-semibold text-primary hover:underline"
              >
                Call (507) 555-1234
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empty;