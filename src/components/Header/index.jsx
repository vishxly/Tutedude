import React from "react";
import { Text, Button } from "./..";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <div className="flex justify-center self-stretch border-b border-solid border-gray-100 bg-white-A700_01 py-6 sm:py-5">
        <div className="container-xs flex items-center justify-between gap-5 md:p-5">
          <Text size="xl" as="p" className="!text-black-900">
            LOGO
          </Text>
          <div className="flex items-center gap-3">
            <Text size="xl" as="p" className="mb-[9px] self-end !text-purple-600_01">
              Login
            </Text>
            <Button
              variant="gradient"
              color="purple_400_01_purple_600_01"
              className="min-w-[105px] rounded-[14px] font-medium sm:px-5"
            >
              Signup
            </Button>
          </div>
        </div>
      </div>
      <div className="relative mt-[-1px] flex justify-center self-stretch bg-gray-800_01 pt-[11px]">
        <div className="container-xs flex justify-center px-[400px] md:p-5 md:px-5">
          <ul className="flex items-start gap-[19px] sm:flex-col">
            <li>
              <a href="#">
                <div className="flex flex-col gap-2">
                  <Text size="xl" as="p" className="!text-white-A700_01">
                    Overview
                  </Text>
                  <div className="h-[4px] rounded-tl-sm rounded-tr-sm bg-amber-700" />
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer">
                <Text
                  size="xl"
                  as="p"
                  className="!font-normal !text-blue_gray-100 hover:!font-medium hover:!text-white-A700_01"
                >
                  Curriculum
                </Text>
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer">
                <Text
                  size="xl"
                  as="p"
                  className="!font-normal !text-blue_gray-100 hover:!font-medium hover:!text-white-A700_01"
                >
                  Refund
                </Text>
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer">
                <Text
                  size="xl"
                  as="p"
                  className="!font-normal !text-blue_gray-100 hover:!font-medium hover:!text-white-A700_01"
                >
                  Testimonials
                </Text>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
