import React from "react";
import Label from "@/components/atoms/Label";
import Input from "@/components/atoms/Input";
import Select from "@/components/atoms/Select";
import Textarea from "@/components/atoms/Textarea";

const FormField = ({ 
  label, 
  type = "text", 
  name, 
  value, 
  onChange, 
  required = false, 
  options = [], 
  placeholder,
  className = ""
}) => {
  const renderInput = () => {
    switch (type) {
      case "select":
        return (
          <Select name={name} value={value} onChange={onChange} required={required}>
            <option value="">Select a service...</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        );
      case "textarea":
        return (
          <Textarea
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            rows={4}
          />
        );
      default:
        return (
          <Input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
          />
        );
    }
  };

  return (
    <div className={className}>
      <Label htmlFor={name}>
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      {renderInput()}
    </div>
  );
};

export default FormField;