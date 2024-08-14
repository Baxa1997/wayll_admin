import React from "react";
import Image from "next/image";
import Head from "next/head";
import { useUnit } from "effector-react";

import { SubmitApplication } from "@/widgets/submit-application";

import { Container } from "@/shared/ui";
import { config } from "@/shared/config";
import { Project } from "@/shared/types/api";

import { $projects } from "@/model/projects-list";

// import arrowDown from "@/../public/images/arrow-down.svg";
// import arrowUp from "@/../public/images/arrow-up.svg";
import arrowRight from "@/../public/images/arrow-right.svg";
import cards from "@/../public/images/cards.png";

export default function InvestmentProducts() {
  return (
    <div>
      <Head>
        <title>Investment products</title>
      </Head>

      <section className="py-16 xl:py-24">
        <Container>
          <div className="lg:flex lg:items-center lg:justify-between">
            <div>
              <div className="text-4xl font-semibold text-gray-900 xl:text-5xl xl:font-bold">
                Инвестиционные продукты
              </div>
              <div className="mt-4 text-lg font-normal text-gray-600 xl:mt-6 xl:text-xl">
                Доступные инвестиционные продукты
              </div>
            </div>
            <div className="mt-4 text-lg font-normal text-gray-600 lg:max-w-[384px] xl:text-xl">
              Way ll is an investment company that helps ordinary people improve
              their financial issues
            </div>
          </div>
          <div className="mt-16 flex flex-wrap justify-between gap-x-8 gap-y-8 rounded-2xl bg-error-50 px-6 py-10 lg:mt-24 xl:p-16">
            <div className="mx-auto max-w-[341px] text-center">
              <div className="text-5xl font-semibold text-error-600 xl:text-5xl">
                ~ 10-15%
              </div>
              <div className="mt-3 text-[18px] font-medium text-error-900 xl:text-lg">
                Ожидаемая прибыль
              </div>
            </div>
            {/* <div className="mx-auto max-w-[341px] text-center">
              <div className="text-5xl font-semibold text-error-600 xl:text-6xl">
                600%
              </div>
              <div className="mt-3 text-lg font-medium text-error-900 xl:text-xl">
                Return on investment
              </div>
            </div> */}
            <div className="mx-auto max-w-[341px] text-center">
              <div className="text-5xl font-semibold text-error-600 xl:text-5xl">
                2 раза в год
              </div>
              <div className="mt-3 text-lg font-medium text-error-900 xl:text-lg">
                Выплаты в виде дивидендов
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-16 xl:py-24">
        <Container>
          <div className="text-2xl font-semibold">
            <span className="text-black">Обзор рынка | </span>
            <span className="text-error-600">
              Создать/просмотреть список наблюдения
            </span>
          </div>
          <Projects />
          <div className="mt-12 text-lg font-normal text-gray-600">
            Этот рынок обновляется каждые 15 минут.
          </div>
        </Container>
      </section>

      {/* <section className="py-16 md:pr-12 lg:flex lg:items-center lg:gap-x-8 xl:gap-x-16 xl:py-24 xl:pr-28">
        <Container className="lg:!pr-0">
          <div className="text-center text-4xl font-semibold text-gray-900">
            Why Way ll?
          </div>
          <div className="mt-4 text-center text-lg font-normal text-gray-600">
            The reasons why you should choose Way ll can be found below.
          </div>
          <div className="py-12">
            <Feature
              title="Fixed Income Investments"
              subtitle="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
            />
            <Feature
              title="Shari’ah Investments"
              subtitle="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
            />
            <Feature
              title="Crowdfunding"
              subtitle="Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
            />
          </div>
        </Container>

        <Image
          src={cards}
          alt="cards"
          className="mx-auto max-h-[640px] w-full max-w-[576px] object-contain"
        />
      </section> */}
      <SubmitApplication
        title="Оставьте заявку"
        subtitle="Оставьте заявку и мы свяжемся с вами"
      />
    </div>
  );
}

const Projects = () => {
  const projects = useUnit($projects);

  if (!projects) {
    return (
      <div className="mt-12 flex flex-col gap-x-4 gap-y-8 lg:flex-row lg:justify-between">
        <div className="h-8 w-52 rounded-xl bg-skeleton" />
        <div className="h-8 w-52 rounded-xl bg-skeleton" />
        <div className="h-8 w-52 rounded-xl bg-skeleton" />
        <div className="h-8 w-52 rounded-xl bg-skeleton" />
      </div>
    );
  }

  return (
    <div className="mt-12 flex flex-col gap-x-8 gap-y-8 lg:flex-row lg:justify-between">
      {projects.map((project) => (
        <Stock key={project.name} project={project} />
      ))}
    </div>
  );
};

const nameRegex = /\(([^)]+)\)/;

const Stock = ({ project }: { project: Project }) => (
  <div className="flex w-full items-center gap-12 rounded-lg bg-white p-4 shadow-md lg:w-1/2">
    <div className="">
      <Image
        src={project.image}
        alt="akfa-build"
        className="h-[100%] w-[100%]"
        width={100}
        height={100}
        objectFit="cover"
      />
    </div>
    <div>
      <div className="text-[24px] font-semibold text-gray-800">Akfa Group</div>
      <div className="mt-4 text-xl text-gray-900">
        <span className="mr-2 text-[24px] font-bold">
          {project.name.match(nameRegex)?.[1]}
        </span>
        <span className="text-[20px] font-normal">
          {" "}
          {config.numberFormat
            .format(project.lot_amount)
            .replaceAll(",", " ")}{" "}
          {project.currency[0]}
        </span>
      </div>
    </div>
  </div>
);

const Feature = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="border-l-4 border-solid py-4 pl-6 transition-colors duration-200 first:border-l-error-600">
    <div className="text-lg font-semibold text-gray-900">{title}</div>
    <div className="mt-1 text-base font-normal text-gray-600">{subtitle}</div>
    <div className="mt-4 flex items-center gap-x-2 text-base font-semibold text-error-700">
      Learn more <Image src={arrowRight} alt="right" />
    </div>
  </div>
);
