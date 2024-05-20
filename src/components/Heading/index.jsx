import React from "react";

const sizes = {
  "3xl": "text-4xl font-bold md:text-[34px] sm:text-[32px]",
  "2xl": "text-[32px] font-bold md:text-3xl sm:text-[28px]",
  "5xl": "text-5xl font-bold md:text-[44px] sm:text-[38px]",
  xl: "text-[28px] font-semibold md:text-[26px] sm:text-2xl",
  "4xl": "text-[40px] font-bold md:text-[38px] sm:text-4xl",
  "6xl": "text-[64px] font-bold md:text-5xl",
  s: "text-base font-semibold",
  md: "text-lg font-semibold",
  xs: "text-[5px] font-semibold",
  lg: "text-xl font-semibold",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900_01 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
