import React from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Img, Text } from "../../components";
import Side from "../../components/Side";
import Header from "../../components/Header";

const data = [
  {
    programminglanguage: "C++",
    programminglanguagedescription:
      "Learn C++ for strong programming fundamentals.",
    viewCurriculum: "View Curriculum",
  },
  {
    programminglanguage: "MERN Stack",
    programminglanguagedescription:
      "Master the MERN stack for high-demand projects.",
    viewCurriculum: "View Curriculum",
  },
  {
    programminglanguage: "Data Structure & Algorithm",
    programminglanguagedescription:
      "Excel in Data Structures and Algorithms for interview success.",
    viewCurriculum: "View Curriculum",
  },
  {
    programminglanguage: "Competitve Programming",
    programminglanguagedescription:
      "Excel in Data Structures and Algorithms for interview success.",
    viewCurriculum: "View Curriculum",
  },
];

export default function Main() {
  return (
    <>
      <Helmet>
        <title>Data Science Courses by IIT Delhi Alumni - Enroll Now</title>
        <meta
          name="description"
          content="Join our Data Science courses with personal mentorship, internship assistance, and industry-certified curriculum. Over 30k learners and 100k doubts solved. Enroll today and unlock 6 certificates!"
        />
      </Helmet>

      {/* main content section */}
      <div className="flex w-full flex-col items-center justify-center overflow-auto bg-white-A700_01 pb-[2524px] md:pb-5">
        {/* header section */}
        <div className="flex flex-col gap-24 self-stretch md:gap-[72px] sm:gap-12">
          {/* hero section */}
          <div className="flex flex-col gap-[77px] bg-white-A700_01 pb-[5px] md:gap-[57px] sm:gap-[38px]">
            <Header />
            <div className="flex flex-col items-center gap-[62px] sm:gap-[31px]">
              <div className="container-xs md:p-5">
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col items-start gap-[23px]">
                    <Button
                      color="white_A700_01"
                      size="lg"
                      leftIcon={
                        <Img
                          src="images/img_cursor.svg"
                          alt="cursor"
                          className="h-[24px] w-[24px]"
                        />
                      }
                      className="min-w-[355px] gap-2.5 rounded-[16px] border border-solid border-amber-700 font-medium sm:px-5"
                    >
                      An IIT Delhi Alumni Initiative
                    </Button>
                    <div className="flex flex-col items-start gap-[9px] self-stretch">
                      <Heading
                        size="6xl"
                        as="h1"
                        className="w-full leading-[85px] tracking-[-1.92px] !text-black-900"
                      >
                        <span className="text-gray_700_01">
                          Become an Expert in the field of
                        </span>
                        <span className="text-black-900">&nbsp;</span>
                        <span className="text-purple-600_01">
                          Data Science with 6 courses
                        </span>
                      </Heading>
                      <Text size="3xl" as="p" className="!text-gray-800_02">
                        <span className="text-gray-800_02">
                          A specially crafted Tech Kickstarter, with&nbsp;
                        </span>
                        <span className="font-medium text-gray-800_02">
                          5+ extensive online courses.
                        </span>
                      </Text>
                    </div>
                    <div className="flex justify-center gap-3.5 self-stretch pr-[47px] md:flex-col md:pr-5">
                      <Button
                        color="yellow_50"
                        shape="round"
                        leftIcon={
                          <Img
                            src="images/img_close.svg"
                            alt="close"
                            className="h-[24px] w-[24px]"
                          />
                        }
                        className="w-full flex-1 gap-1.5 border border-solid border-yellow-100 font-medium tracking-[-0.48px] md:self-stretch"
                      >
                        Personal Mentorship
                      </Button>
                      <Button
                        color="yellow_50"
                        shape="round"
                        leftIcon={
                          <Img
                            src="images/img_close.svg"
                            alt="close"
                            className="h-[24px] w-[24px]"
                          />
                        }
                        className="w-full flex-1 gap-1.5 border border-solid border-yellow-100 font-medium tracking-[-0.48px] md:self-stretch"
                      >
                        Internship Assistance
                      </Button>
                      <Button
                        color="yellow_50"
                        shape="round"
                        leftIcon={
                          <Img
                            src="images/img_close.svg"
                            alt="close"
                            className="h-[24px] w-[24px]"
                          />
                        }
                        className="min-w-[255px] gap-1.5 border border-solid border-yellow-100 font-medium tracking-[-0.48px]"
                      >
                        Industry Certified Courses
                      </Button>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      size="2xl"
                      variant="gradient"
                      color="purple_400_01_purple_600_01"
                      rightIcon={
                        <Img
                          src="images/img_save.svg"
                          alt="save"
                          className="h-[22px] w-[22px]"
                        />
                      }
                      className="min-w-[219px] gap-1.5 rounded-[20px] font-semibold !shadow-xl sm:px-5"
                    >
                      Enroll Now
                    </Button>
                    <div className="flex items-center gap-1.5 rounded-[16px] px-6 pb-[23px] pt-6 sm:p-5">
                      <Heading
                        size="md"
                        as="h2"
                        className="!text-purple-600_01"
                      >
                        Know More
                      </Heading>
                      <Img
                        src="images/img_fi_br_interrogation.svg"
                        alt="interrogation image"
                        className="h-[20px] w-[20px]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* features section */}
              <div className="flex gap-[57px] self-stretch border border-solid border-purple-50_01 bg-gradient5 py-9 pl-32 pr-14 md:flex-col md:px-5 sm:p-5">
                <div className="flex w-[18%] items-start justify-between gap-5 md:w-full">
                  <div className="flex w-[74%] items-center justify-center gap-3">
                    <Img
                      src="images/img_online_learning.png"
                      alt="learning image"
                      className="mb-[5px] h-[62px] w-[62px] self-end object-cover"
                    />
                    <div className="flex flex-col items-start">
                      <Text size="6xl" as="p" className="!text-purple-600_01">
                        24
                      </Text>
                      <Text
                        size="4xl"
                        as="p"
                        className="!font-dmsans !text-gray-600"
                      >
                        Courses
                      </Text>
                    </div>
                  </div>
                  <div className="h-full w-px bg-purple-50" />
                </div>
                <div className="flex w-[19%] items-start justify-between gap-5 md:w-full">
                  <div className="flex w-[75%] items-center justify-center gap-3">
                    <Img
                      src="images/img_graduated.png"
                      alt="graduate image"
                      className="mb-[5px] h-[62px] w-[62px] self-end object-cover"
                    />
                    <div className="flex flex-col">
                      <Text size="6xl" as="p" className="!text-purple-600_01">
                        30k+
                      </Text>
                      <Text
                        size="4xl"
                        as="p"
                        className="!font-dmsans !text-gray-600"
                      >
                        Learners
                      </Text>
                    </div>
                  </div>
                  <div className="h-full w-px bg-purple-50" />
                </div>
                <div className="flex w-[19%] items-center gap-3 md:w-full">
                  <Img
                    src="images/img_question_mark.png"
                    alt="question mark"
                    className="mb-[5px] h-[62px] w-[62px] self-end object-cover"
                  />
                  <div className="flex flex-col items-start">
                    <Text size="6xl" as="p" className="!text-purple-600_01">
                      100k+
                    </Text>
                    <Text
                      size="4xl"
                      as="p"
                      className="!font-dmsans !text-gray-600"
                    >
                      Doubts Solved
                    </Text>
                  </div>
                </div>
                <div className="flex w-[25%] items-start justify-between gap-5 md:w-full">
                  <div className="h-full w-px bg-purple-50" />
                  <div className="flex w-[82%] items-center justify-center gap-3">
                    <Img
                      src="images/img_complete.png"
                      alt="completion badge"
                      className="mb-2 h-[62px] w-[62px] self-end object-cover"
                    />
                    <div className="flex flex-col items-start">
                      <Text size="6xl" as="p" className="!text-purple-600_01">
                        10k+
                      </Text>
                      <Text
                        size="4xl"
                        as="p"
                        className="!font-dmsans !text-gray-600"
                      >
                        Student Projects
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* course path section */}
          <div className="flex flex-col items-center justify-center gap-14 bg-gray-50 py-[113px] md:py-5 sm:gap-7">
            <div className="container-xs flex flex-col items-center pl-[212px] pr-[211px] md:p-5 md:px-5">
              <div className="flex flex-col items-center gap-[18px]">
                <Button
                  color="purple_50_01"
                  size="sm"
                  className="min-w-[416px] rounded-[31px] border border-solid border-purple-50 tracking-[-0.40px] sm:px-5"
                >
                  DATASCIENCE COURSE LEARNING PATH
                </Button>
                <Heading
                  size="5xl"
                  as="h2"
                  className="tracking-[-1.44px] !text-gray-800"
                >
                  <span className="bg-gradient12 bg-clip-text text-transparent">
                    Data Science
                  </span>
                  <span className="text-gray-800">&nbsp;Course Curriculum</span>
                </Heading>
              </div>
            </div>
            <div className="container-xs flex flex-col gap-px rounded-[28px] border border-solid border-gray-300_01 md:p-5">
              {data.map((d, index) => (
                <Side
                  {...d}
                  key={"productList" + index}
                  className="px-7 pb-[26px] pt-7"
                />
              ))}
            </div>
          </div>

          {/* limited time offer section */}
          <div className="flex flex-col items-center justify-center bg-white-A700_01 pb-[111px] pt-16 md:py-5">
            <div className="container-xs flex flex-col items-center gap-[54px] px-[45px] md:p-5 md:px-5 sm:gap-[27px]">
              <div className="flex w-[90%] flex-col items-center gap-14 md:w-full sm:gap-7">
                <Heading
                  size="5xl"
                  as="h2"
                  className="w-full text-center leading-[72px] tracking-[-2.40px] !text-gray-600"
                >
                  <span className="text-gray-600">
                    Don&#39;t miss out on this&nbsp;
                  </span>
                  <span className="bg-gradient bg-clip-text text-transparent">
                    limited-time opportunity
                  </span>
                  <span className="text-gray-600">
                    &nbsp;to learn for&nbsp;
                  </span>
                  <span className="bg-gradient bg-clip-text text-transparent">
                    Free!
                  </span>
                </Heading>
                <div className="flex w-[61%] flex-col items-start gap-[11px] rounded-[32px] bg-gradient7 shadow-lg md:w-full">
                  <div className="relative h-[166px] self-stretch">
                    <div className="absolute left-[0.00px] top-[4.00px] m-auto flex w-[74%] items-start justify-between gap-5">
                      <div className="h-[28px] w-[28px] rounded-[14px] bg-white-A700_01 blur-[72.00px] backdrop-opacity-[0.5]" />
                      <Heading
                        size="xl"
                        as="h3"
                        className="mt-[25px] !font-bold !text-white-A700_01"
                      >
                        100% Refund Offer 😎{" "}
                      </Heading>
                    </div>
                    <div className="absolute right-[0.47px] top-[0.00px] m-auto flex w-[15%] flex-col items-start">
                      <div className="ml-6 h-[12px] w-[28px] rounded-[14px] bg-white-A700_01 blur-[64.00px] backdrop-opacity-[0.5] md:ml-0" />
                      <Img
                        src="images/img_scribble_final_version_24.png"
                        alt="scribble image"
                        className="relative mt-[-8px] h-[90px] w-full object-cover md:h-auto"
                      />
                    </div>
                    <div className="absolute bottom-[0.37px] left-0 right-0 m-auto flex w-[93%] flex-col items-center gap-2.5">
                      <Text
                        size="2xl"
                        as="p"
                        className="self-start !text-white-A700_b2"
                      >
                        20 Seats Left
                      </Text>
                      <Img
                        src="images/img_frame_1000015526.svg"
                        alt="seats image"
                        className="h-[10px] w-full rounded-[5px]"
                      />
                      <div className="flex items-center gap-1">
                        <Img
                          src="images/img_bx_time_five.svg"
                          alt="timer image"
                          className="h-[28px] w-[28px]"
                        />
                        <Text
                          size="3xl"
                          as="p"
                          className="!font-medium !text-white-A700_01"
                        >
                          Offer ends in 10:00Mins
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="ml-[154px] h-[21px] w-[28px] rounded-[14px] bg-white-A700_b2 blur-[72.00px] backdrop-opacity-[0.5] md:ml-0" />
                </div>
              </div>
              <div className="flex flex-col items-center gap-[25px] self-stretch">
                <Heading
                  size="3xl"
                  as="h4"
                  className="tracking-[-1.08px] !text-blue_gray-900"
                >
                  How does it work?
                </Heading>
                <div className="flex flex-col items-center gap-[22px] self-stretch">
                  <div className="relative h-[40px] w-[77%] md:h-auto">
                    <div className="relative h-[4px] w-[85%] bg-gray-100">
                      <div
                        style={{ width: "1%" }}
                        className="absolute h-full bg-purple-600_01 blur-[10.00px] backdrop-opacity-[0.5]"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full justify-between gap-5">
                      <div className="flex h-[40px] w-[11%] items-center justify-center bg-[url(/public/images/img_steps.svg)] bg-cover bg-no-repeat px-2.5 pb-[5px] pt-2.5 md:h-auto">
                        <Text
                          size="xl"
                          as="p"
                          className="tracking-[-0.48px] !text-gray-50"
                        >
                          Step 1
                        </Text>
                      </div>
                      <div className="flex h-[40px] w-[11%] items-center justify-center bg-[url(/public/images/img_steps.svg)] bg-cover bg-no-repeat px-2.5 pb-[5px] pt-2.5 md:h-auto">
                        <Text
                          size="xl"
                          as="p"
                          className="tracking-[-0.48px] !text-gray-50"
                        >
                          Step 2
                        </Text>
                      </div>
                      <div className="flex h-[40px] w-[11%] items-center justify-center bg-[url(/public/images/img_steps.svg)] bg-cover bg-no-repeat px-2.5 pb-[5px] pt-2.5 md:h-auto">
                        <Text
                          size="xl"
                          as="p"
                          className="tracking-[-0.48px] !text-gray-50"
                        >
                          Step 3
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-[22px] self-stretch md:flex-col">
                    <div className="flex w-full flex-col items-center gap-4 rounded-[20px] border border-solid border-purple-50_01 bg-gradient8 px-5 pb-[19px] pt-5">
                      <Heading
                        size="lg"
                        as="h5"
                        className="w-full leading-[30px] tracking-[-0.60px] !text-purple-700"
                      >
                        Step 1 : Enroll into your favorite course for only
                        ₹1,499
                      </Heading>
                      <div className="flex justify-center self-stretch p-4">
                        <Img
                          src="images/img_image_533.png"
                          alt="price image"
                          className="h-[69px] w-[37%] object-cover"
                        />
                      </div>
                      <Text as="p" className="!font-medium !text-gray-800_01">
                        <span className="text-gray-800_01">
                          Start Learning with&nbsp;
                        </span>
                        <span className="font-semibold text-gray_900">
                          Lifetime Course Access.
                        </span>
                      </Text>
                    </div>
                    <div className="flex w-full flex-col gap-4 rounded-[20px] border border-solid border-purple-50_01 bg-gradient8 p-5">
                      <Heading
                        size="lg"
                        as="h6"
                        className="leading-[30px] tracking-[-0.60px] !text-purple-700"
                      >
                        Step 2: Complete Course & Assignments within 2 Years!
                      </Heading>
                      <div className="flex items-center justify-center gap-2 rounded-[14px] border border-solid border-gray-300_01 px-2 pb-[11px] pt-2">
                        <Heading
                          size="4xl"
                          as="h1"
                          className="bg-gradient9 bg-clip-text tracking-[-1.20px] !text-transparent"
                        >
                          2
                        </Heading>
                        <Text
                          as="p"
                          className="w-[87%] leading-[21px] tracking-[-0.42px] !text-gray-800"
                        >
                          years time from the date of enrollment
                        </Text>
                      </div>
                      <Text
                        as="p"
                        className="!font-medium leading-[21px] !text-gray-800_01"
                      >
                        <span className="text-gray-800_01">Finish&nbsp;</span>
                        <span className="text-gray-800_01">
                          the course&nbsp;
                        </span>
                        <span className="text-gray-800_01">within&nbsp;</span>
                        <span className="font-semibold text-gray_900">
                          2 Years
                        </span>
                        <span className="text-gray-800_01">
                          &nbsp;to Qualify for Refund.
                        </span>
                      </Text>
                    </div>
                    <div className="flex w-full flex-col items-center gap-4 rounded-[20px] border border-solid border-purple-50_01 bg-gradient8 p-5">
                      <Heading
                        size="lg"
                        as="h5"
                        className="w-full leading-[30px] tracking-[-0.60px] !text-purple-700"
                      >
                        Step 3: Receive 100% Refund upon completion
                      </Heading>
                      <div className="flex flex-wrap items-center gap-2 rounded-[14px] border border-solid border-gray-300_01 px-[15px] pb-4 pt-[15px]">
                        <Heading
                          size="2xl"
                          as="h2"
                          className="bg-gradient9 bg-clip-text tracking-[-0.96px] !text-transparent"
                        >
                          100%
                        </Heading>
                        <Text
                          as="p"
                          className="tracking-[-0.42px] !text-gray-800"
                        >
                          Enrollment Fee is refunded
                        </Text>
                      </div>
                      <Text
                        as="p"
                        className="w-full !font-medium leading-[21px] !text-gray-800_01"
                      >
                        <span className="text-gray-800_01">
                          Upon Course Completion within&nbsp;
                        </span>
                        <span className="font-bold text-gray_900">2 Years</span>
                        <span className="text-gray-800_01">
                          , Get Your&nbsp;
                        </span>
                        <span className="font-semibold text-gray_900">
                          ₹1,499 Back.
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* hiring companies section */}
        <div className="relative mt-24 h-[329px] w-full">
          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[75%] justify-center bg-yellow-50 pb-[204px] pt-[52px] md:py-5">
            <div className="container-xs flex justify-center px-[165px] md:p-5 md:px-5">
              <Heading
                size="5xl"
                as="h2"
                className="bg-gradient6 bg-clip-text tracking-[-1.44px] !text-transparent"
              >
                <span className="text-blue_gray-800">Top Companies Hiring</span>
                <span className="bg-gradient6 bg-clip-text text-transparent">
                  &nbsp;
                </span>
                <span className="bg-gradient11 bg-clip-text text-transparent">
                  Data Scientist
                </span>
              </Heading>
            </div>
          </div>
          <div className="absolute bottom-[15%] left-0 right-0 m-auto flex w-full gap-[22px] md:relative md:flex-col">
            <div className="flex w-full justify-center rounded-[24px] bg-white-A700_01 p-[46px] md:p-5">
              <Text size="5xl" as="p" className="capitalize tracking-[-0.96px]">
                Logo
              </Text>
            </div>
            <div className="flex w-full justify-center rounded-[24px] bg-white-A700_01 px-[46px] pb-[38px] pt-[46px] md:p-5 md:px-5 md:pt-5">
              <Text size="5xl" as="p" className="capitalize tracking-[-0.96px]">
                Logo
              </Text>
            </div>
            <div className="flex w-full justify-center rounded-[24px] bg-white-A700_01 px-[46px] pb-[38px] pt-[46px] md:p-5 md:px-5 md:pt-5">
              <Text size="5xl" as="p" className="capitalize tracking-[-0.96px]">
                Logo
              </Text>
            </div>
            <div className="flex w-full justify-center rounded-[24px] bg-white-A700_01 px-[46px] pb-[38px] pt-[46px] md:p-5 md:px-5 md:pt-5">
              <Text size="5xl" as="p" className="capitalize tracking-[-0.96px]">
                Logo
              </Text>
            </div>
            <div className="flex w-full justify-center rounded-[24px] bg-white-A700_01 px-[46px] pb-[38px] pt-[46px] md:p-5 md:px-5 md:pt-5">
              <Text size="5xl" as="p" className="capitalize tracking-[-0.96px]">
                Logo
              </Text>
            </div>
            <div className="flex w-full justify-center rounded-[24px] bg-white-A700_01 px-[46px] pb-[38px] pt-[46px] md:p-5 md:px-5 md:pt-5">
              <Text size="5xl" as="p" className="capitalize tracking-[-0.96px]">
                Logo
              </Text>
            </div>
            <div className="flex w-full justify-center rounded-[24px] bg-white-A700_01 p-[46px] md:p-5">
              <Text size="5xl" as="p" className="capitalize tracking-[-0.96px]">
                Logo
              </Text>
            </div>
          </div>
        </div>

        {/* certification opportunities section */}
        <div className="mt-24 flex flex-col items-center justify-center gap-[59px] self-stretch bg-white-A700_01 pb-24 pt-[100px] md:py-5 sm:gap-[29px]">
          <Heading
            className="container-xs !font-semibold !text-gray-600 md:p-5"
            size="5xl"
            as="h2"
          >
            <span className="text-gray-600">Unlock&nbsp;</span>
            <span className="text-purple-600_01">6 Certificates</span>
            <span className="text-gray-600">&nbsp;&&nbsp;</span>
            <span className="text-purple-600_01">
              Internship Opportunities!
            </span>
          </Heading>
          <div className="container-xs flex gap-10 md:flex-col md:p-5">
            <div className="flex w-full flex-col items-center gap-[30px] rounded-[32px] border border-solid border-purple-50_01 bg-gray-50 p-9 sm:p-5">
              <Heading
                size="xl"
                as="h2"
                className="w-full text-center leading-[42px] !text-blue_gray-900"
              >
                Get 6 Industry Recognized Certificates!
              </Heading>
              
              <div className="relative z-50 flex gap-3.5 self-stretch px-8 sm:px-5">
                <Button
                  color="purple_50_01"
                  shape="round"
                  leftIcon={
                    <Img
                      src="images/img_close_purple_600_01.svg"
                      alt="close"
                      className="h-[24px] w-[24px]"
                    />
                  }
                  className="w-full gap-1.5 border border-solid border-purple-50 font-medium tracking-[-0.48px]"
                >
                  Official and Verified
                </Button>
                <Button
                  color="purple_50_01"
                  shape="round"
                  leftIcon={
                    <Img
                      src="images/img_close_purple_600_01.svg"
                      alt="close"
                      className="h-[24px] w-[24px]"
                    />
                  }
                  className="w-full gap-1.5 border border-solid border-purple-50 font-medium tracking-[-0.48px]"
                >
                  Enhances Credibility
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-center gap-5 rounded-[24px] border border-solid border-yellow-100 bg-yellow-50 p-7 sm:p-5">
              <div className="flex flex-col items-start self-stretch">
                <Heading size="xl" as="h3" className="!text-gray-900_02">
                  Bag Internship Opportunities!
                </Heading>
                <Text
                  size="xl"
                  as="p"
                  className="w-full !font-normal leading-6 !text-gray-600"
                >
                  With every course, we make you not only industry-ready but
                  also help you crack your first internship.
                </Text>
              </div>
              <Img
                src="images/img_14327653_5474231.svg"
                alt="internship image"
                className="h-[417px] w-[417px]"
              />
            </div>
          </div>
        </div>

        {/* internship program section */}
        <div className="relative z-[51] mt-[9px] flex w-[95%] flex-col items-center justify-center bg-white-A700_01 pb-[132px] pt-[86px] md:w-full md:p-5 md:py-5">
          <div className="container-xs flex flex-col items-center gap-[35px] px-[21px] sm:px-5">
            <Heading
              size="3xl"
              as="h2"
              className="bg-gradient4 bg-clip-text !text-transparent"
            >
              How does the Internship Program works ?
            </Heading>
            <div className="flex flex-col items-center gap-[67px] self-stretch sm:gap-[33px]">
              <div className="flex items-start self-stretch md:flex-col">
                <Button
                  size="md"
                  variant="outline"
                  shape="circle"
                  color="indigo_500_bc_red_800_87"
                  className="mt-1.5 w-[64px] !rounded-[32px] sm:px-5"
                >
                  <Img src="images/img_lock.svg" />
                </Button>
                <Heading
                  as="h3"
                  className="ml-[15px] w-[26%] leading-6 md:ml-0 md:w-full"
                >
                  Learn from our structured pre recorded courses made by experts
                  to meet industry needs
                </Heading>
                <div className="ml-12 mt-1.5 flex flex-1 items-center gap-[15px] md:ml-0 md:self-stretch sm:flex-col">
                  <Button
                    size="md"
                    variant="outline"
                    shape="circle"
                    color="indigo_500_bc_red_800_87"
                    className="w-[64px] !rounded-[32px] sm:px-5"
                  >
                    <Img src="images/img_lock.svg" />
                  </Button>
                  <Heading as="h4" className="w-[81%] leading-6 sm:w-full">
                    Personal mentors to guide and help you throughout your
                    journey as a friend
                  </Heading>
                </div>
                <div className="ml-[38px] flex flex-1 items-start gap-[15px] md:ml-0 md:self-stretch sm:flex-col">
                  <Button
                    size="md"
                    variant="outline"
                    shape="circle"
                    color="indigo_500_bc_red_800_87"
                    className="mt-2.5 w-[64px] !rounded-[32px] sm:px-5"
                  >
                    <Img src="images/img_lock.svg" />
                  </Button>
                  <Heading as="h5" className="w-[81%] leading-6 sm:w-full">
                    Get guaranteed paid internships after completion of the
                    program along with course completion certificates
                  </Heading>
                </div>
              </div>
              <div className="flex w-[68%] items-center justify-between gap-5 md:w-full md:flex-col">
                <div className="flex w-[45%] items-center justify-center gap-[15px] md:w-full">
                  <Button
                    size="md"
                    variant="outline"
                    shape="circle"
                    color="indigo_500_bc_red_800_87"
                    className="w-[64px] !rounded-[32px] sm:px-5"
                  >
                    <Img src="images/img_lock.svg" />
                  </Button>
                  <Heading as="h6" className="w-[81%] leading-6">
                    1:1 live doubt solving support available throughout the day
                    to clear your doubts instantly{" "}
                  </Heading>
                </div>
                <div className="flex w-[45%] items-center justify-center gap-3.5 md:w-full">
                  <Button
                    size="md"
                    variant="outline"
                    shape="circle"
                    color="indigo_500_bc_red_800_87"
                    className="w-[64px] !rounded-[32px] sm:px-5"
                  >
                    <Img src="images/img_lock.svg" />
                  </Button>
                  <Heading as="h6" className="w-[81%] leading-6">
                    Build major projects which makes your resume stand apart{" "}
                  </Heading>
                </div>
              </div>
            </div>
            <Button
              variant="gradient"
              color="purple_800_purple_800_01"
              className="min-w-[225px] rounded-[10px] font-semibold sm:px-5"
            >
              Apply now for ₹ 2999
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
