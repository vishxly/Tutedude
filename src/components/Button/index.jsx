import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[24px]",
  circle: "rounded-[50%]",
};
const variants = {
  gradient: {
    purple_400_01_purple_600_01: "bg-gradient shadow-xs text-gray-50",
    purple_800_purple_800_01: "bg-gradient2 shadow-sm text-white-A700_01",
  },
  fill: {
    white_A700_01: "bg-white-A700_01 text-gray-800_02",
    yellow_50: "bg-yellow-50 text-deep_orange-900",
    purple_50_01: "bg-purple-50_01 text-purple-600_01",
    gray_50: "bg-gray-50 text-purple-400_01",
  },
  outline: {
    indigo_500_bc_red_800_87: "border border-solid indigo_500_bc_red_800_87_border bg-gradient3",
  },
};
const sizes = {
  lg: "h-[66px] px-[22px] text-base",
  "2xl": "h-[75px] px-[35px] text-lg",
  sm: "h-[62px] px-7 text-xl",
  xl: "h-[70px] px-[22px] text-xl",
  md: "h-[64px] px-[22px]",
  xs: "h-[48px] px-6 text-base",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "gray_50",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["lg", "2xl", "sm", "xl", "md", "xs"]),
  variant: PropTypes.oneOf(["gradient", "fill", "outline"]),
  color: PropTypes.oneOf([
    "purple_400_01_purple_600_01",
    "purple_800_purple_800_01",
    "white_A700_01",
    "yellow_50",
    "purple_50_01",
    "gray_50",
    "indigo_500_bc_red_800_87",
  ]),
};

export { Button };
