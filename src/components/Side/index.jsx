import React from "react";
import { Button, Img, Text, Heading } from "..";

export default function Side({
  programminglanguage = "C++",
  programminglanguagedescription = "Learn C++ for strong programming fundamentals.",
  viewCurriculum = "View Curriculum",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex md:flex-col justify-between items-center gap-5 sm:p-5 bg-white-A700_01 flex-1 container-xs`}
    >
      <div className="flex flex-col items-start gap-[3px]">
        <Heading size="xl" as="h3" className="!text-gray-800">
          {programminglanguage}
        </Heading>
        <Text size="3xl" as="p" className="!text-blue_gray-400">
          {programminglanguagedescription}
        </Text>
      </div>
      <Button
        size="xl"
        leftIcon={<Img src="images/img_fibreye.svg" alt="fi-br-eye" className="h-[24px] w-[24px]" />}
        className="min-w-[249px] gap-2.5 rounded-[35px] border border-solid border-purple-50_01 font-medium sm:px-5"
      >
        {viewCurriculum}
      </Button>
    </div>
  );
}
