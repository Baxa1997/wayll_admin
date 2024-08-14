import React from "react";
import Image from "next/image";
import Head from "next/head";

import { Container } from "@/shared/ui";
import chartImage from "@/../public/images/chart-image.png";
import akfa from "@/../public/images/akfa_logo.png";
import artel from "@/../public/images/artel_logo.png";
import hilton from "@/../public/images/hilton-icon.jpg";
import akfaBuild from "@/../public/images/akfa_build_logo.png";
import feedup from "@/../public/images/feed-up.png";
import { SubmitApplication } from "@/widgets/submit-application";

export default function InvestPage() {
  return (
    <div>
      <Head>
        <title>Be invested</title>
      </Head>

      <section className="bg-gray-50 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900">
          Получить инвестиции
        </h1>
        <p className="mx-auto mt-4 max-w-[600px] text-lg font-normal text-gray-600">
          Мы научим вас философии инвестиций и тому, как инвестировать.
        </p>
      </section>

      <section className="py-16 xl:py-24">
        <Container>
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="max-w-[560px] lg:w-1/2">
              <h2 className="text-[30px] font-semibold text-gray-900 xl:text-[30px] xl:font-bold">
                Как получить инвестиции в свой проект?
              </h2>
              <p className="mt-4 text-[18px] font-normal text-gray-600 xl:mt-6 xl:text-[18px]">
                Для того чтобы привлечь инвестиции в ваш проект, важно ясно
                продемонстрировать его потенциал и ценность.
              </p>
              <p className="mt-4 text-[18px] font-normal text-gray-600 xl:mt-6 xl:text-[18px]">
                Начните с тщательной проработки бизнес-плана, который включает в
                себя детализированное описание целей, рыночных возможностей и
                финансовых прогнозов.
              </p>
              <p className="mt-4 text-[18px] font-normal text-gray-600 xl:mt-6 xl:text-[18px]">
                Подготовьте презентацию, которая выделит уникальные аспекты
                вашего проекта и его долгосрочные перспективы.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:flex lg:w-1/2 lg:justify-end">
              <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={chartImage}
                  alt="Investment Chart"
                  layout="responsive"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-16 xl:py-24">
        <Container>
          <div className="text-center text-base font-medium text-gray-600">
            Official partner of these companies
          </div>
          <div className="mt-[32px] flex flex-wrap items-center justify-between gap-x-8 gap-y-6">
            <Image src={feedup} alt="akfa" className="h-9 w-fit xl:h-12" />
            <Image src={akfa} alt="akfa" className="h-9 w-fit xl:h-12" />
            <Image src={artel} alt="artel" className="h-9 w-fit xl:h-12" />
            <Image src={hilton} alt="imzo" className="" />
            <Image
              src={akfaBuild}
              alt="akfa-build"
              className="h-9 w-fit xl:h-[54px]"
            />
          </div>
        </Container>
      </section>

      <section>
        <SubmitApplication
          title="Подать заявку"
          subtitle="Будьте одним из первых, кто станет нашим партнером! "
        />
      </section>
    </div>
  );
}
