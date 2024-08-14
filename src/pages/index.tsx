import React from "react";
import Image from "next/image";
import Head from "next/head";
import { FinancesFeatures } from "@/widgets/finances-features";
import { SubmitApplication } from "@/widgets/submit-application";

import { Container } from "@/shared/ui";

import phones from "@/../public/images/phones.svg";
import akfa from "@/../public/images/akfa_logo.png";
import artel from "@/../public/images/artel_logo.png";
import hilton from "@/../public/images/hilton-icon.jpg";
import caex from "@/../public/images/caex-logo.png";
import stocks from "@/../public/images/stocks.jpeg";
import arrowRight from "@/../public/images/arrow-right.svg";
import cards from "@/../public/images/cards.png";
import { useAddLocaleSuffix } from "@/shared/lib/locale";
import { useLocalizedStrings } from "@/shared/lib/useLocaliizedString";
import Link from "next/link";

export default function Home() {
  const addLocaleSuffix = useAddLocaleSuffix();
  const localizedStrings = useLocalizedStrings();

  // const welcomeKey = addLocaleSuffix({ key: "welcome_message" });
  // const welcomeMessage = localizedStrings[welcomeKey];
  // console.log("welcomeMessagewelcomeMessage", welcomeMessage);

  return (
    <div>
      <Head>
        <title>Way ll</title>
      </Head>

      <section>
        <Container>
          <div className="lg:flex lg:items-center lg:justify-between">
            <div>
              <div className="mt-16 text-4xl font-semibold text-gray-900 xl:text-6xl xl:font-bold">
                Добро пожаловать!
              </div>
              <div className="mt-4 max-w-[640px] text-lg font-normal text-gray-600 xl:mt-6 xl:text-[20px]">
                Way II - надежный партнер в мире инвестиций предлагающий
                уникальные возможности для увеличения капитала и достижения
                финансовой независимости.
              </div>

              <div className="mt-[180px] flex space-x-4">
                <div
                  className="rounded-full p-[10px] shadow"
                  style={{
                    boxShadow: "0px 0px 6px 0px #00000026",
                  }}>
                  <button className="rounded-full border-2 border-red-600 bg-white px-6 py-2 font-bold text-red-600 transition hover:bg-red-600 hover:text-white">
                    <Link href={"/be-invested"}>Получить инвестиции</Link>
                  </button>
                </div>
                <div
                  className="rounded-full bg-[#D42427] p-[10px] shadow"
                  style={{
                    boxShadow: "0px 0px 6px 0px #00000026",
                  }}>
                  <button className="rounded-full border-2 border-white bg-red-600 px-6 py-2 font-bold text-white transition hover:bg-white hover:text-red-600">
                    <Link href={"/invest"}>Инвестировать</Link>
                  </button>
                </div>
              </div>
            </div>
            <Image src={phones} alt="app" className="mx-auto mt-16" />
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-16 xl:py-24">
        <Container>
          <div className="text-center text-[24px] text-base font-medium text-gray-600">
            Нам доверяют:
          </div>
          <div className="mt-[32px] flex flex-wrap items-center justify-between gap-x-8 gap-y-6">
            <Image src={akfa} alt="akfa" className="h-9 w-fit xl:h-12" />
            <Image src={artel} alt="artel" className="h-9 w-fit xl:h-12" />
            <Image src={hilton} alt="imzo" className="" />
            <Image
              src={caex}
              alt="akfa-build"
              className="h-9 w-fit xl:h-[54px]"
            />
          </div>
        </Container>
      </section>

      <section className="py-16 md:pr-12 lg:flex lg:items-center lg:gap-x-8 xl:gap-x-16 xl:py-24 xl:pr-28">
        <Container className="lg:!pr-0">
          <div className="text-center text-4xl font-semibold text-gray-900">
            Почему Way II ?
          </div>
          <div className="ml-6 mt-4 text-lg font-normal text-gray-600">
            Почему стоит выбрать именно наш инвестиционный проект
          </div>
          <div className="py-12">
            <Feature
              title="Станьте инвестором"
              subtitle="Станьте соучредителем готового бизнеса уже сегодня "
            />
            <Feature
              title="Стандарты исламского финансирования "
              subtitle="Наши инвестиционные продукты соответствуют принципам исламского финансирования и предлагают безопасный и этический обоснованный способ увеличения капитала. "
            />
            <Feature
              title="Way II - больше, чем просто инвестиции"
              subtitle="Присоединившись к Way II, вы становитесь частью сообщества, где каждый стремится не только к финансовому успеху, но и к созданию ценных деловых связей и совместных возможностей."
            />
          </div>
        </Container>

        <Image
          src={cards}
          alt="cards"
          className="mx-auto max-h-[640px] w-full max-w-[576px] object-contain"
        />
      </section>

      {/* <section className="py-16 xl:py-24">
        <Container>
          <div className="text-center text-3xl font-semibold text-gray-900 xl:text-[40px] xl:font-bold">
            Very useful application
          </div>
          <div className="mx-auto mt-4 max-w-[604px] text-center text-lg font-normal text-gray-600 xl:mt-5 xl:text-xl">
            Our halal investments are structured in accordance with the
            strictest Islamic principles
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-x-16 gap-y-10 xl:mt-16">
            <AppFeature
              icon={
                <Image src={zap} alt="zap" className="size-10 xl:size-[62px]" />
              }
              title="Investment App"
              subtitle="Our halal investments are structured in accordance with the strictest Islamic principles"
            />
            <AppFeature
              icon={
                <Image
                  src={chart}
                  alt="chart"
                  className="size-10 xl:size-[62px]"
                />
              }
              title="Increase in income"
              subtitle="Our halal investments are structured in accordance with the strictest Islamic principles"
            />
          </div>
        </Container>
      </section> */}
      {/* <section className="bg-gray-50 py-16 xl:py-24">
        <Container>
          <div className="xl:flex xl:items-center xl:justify-center xl:gap-x-16">
            <div className="mx-auto max-w-[576px]">
              <div className="text-center text-3xl font-semibold text-gray-900 xl:text-left xl:text-5xl xl:font-bold">
                Доверьтесь нашим экспертам
              </div>
              <div className="mt-4 text-center text-lg font-normal text-gray-600 xl:text-left">
                Мы предлагаем широкий спектр инвестиционных услуг, включая:
              </div>
              <div className="mt-4 text-center text-sm text-main xl:text-left xl:text-xl xl:font-semibold">
                Learn more
              </div>
            </div>
            <Image
              className="mx-auto mt-12 min-h-[280px] w-full max-w-[576px] rounded-[70px] object-cover xl:m-0 xl:h-[512px] xl:rounded-[150px]"
              src={stocks}
              alt="stocks"
            />
          </div>
        </Container>
      </section> */}
      <FinancesFeatures />
      <SubmitApplication
        title="Оставьте заявку"
        subtitle="Оставьте заявку и мы свяжемся с вами"
      />
    </div>
  );
}

const AppFeature = ({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) => (
  <div className="max-w-[450px]">
    <div className="mx-auto flex size-[93px] items-center justify-center rounded-full bg-error-50 xl:size-[142px]">
      {icon}
    </div>
    <div className="mt-4 text-center text-xl font-bold text-black xl:text-2xl xl:font-bold">
      {title}
    </div>
    <div className="mt-4 text-center text-base font-normal text-gray-600 xl:text-xl">
      {subtitle}
    </div>
  </div>
);

const Feature = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="border-l-4 border-solid py-4 pl-6 transition-colors duration-200 first:border-l-error-600">
    <div className="text-lg font-semibold text-gray-900">{title}</div>
    <div className="mt-1 text-base font-normal text-gray-600">{subtitle}</div>
    <div className="mt-4 flex items-center gap-x-2 text-base font-semibold text-error-700">
      Узнать подробнее <Image src={arrowRight} alt="right" />
    </div>
  </div>
);
