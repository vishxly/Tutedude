import React from "react";

const sizes = {
  "5xl": "text-[32px] font-medium md:text-3xl sm:text-[28px]",
  "6xl": "text-[40px] font-medium md:text-[38px] sm:text-4xl",
  xs: "text-[4px] font-normal",
  lg: "text-sm font-normal",
  s: "text-[5px] font-normal",
  "2xl": "text-lg font-medium",
  "3xl": "text-xl font-normal",
  "4xl": "text-2xl font-normal md:text-[22px]",
  xl: "text-base font-medium",
  md: "text-[6px] font-normal",
};

const Text = ({ children, className = "", as, size = "lg", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-800 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
