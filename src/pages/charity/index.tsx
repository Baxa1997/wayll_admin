import React from "react";
import Image, { StaticImageData } from "next/image";
import Head from "next/head";
import { Container } from "@/shared/ui";
import helpIcon from "@/../public/images/help-icon.svg";
import charityIcon from "@/../public/images/charity-icon.svg";
import investmentMap from "@/../public/images/investment-map.png";
import shariahImage from "@/../public/images/shariah-image.png";
import investImage from "@/../public/images/invest-image.png";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Charity comes first</title>
      </Head>

      {/* <section className="bg-gray-50 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900">
          Благотворительность
        </h1>
        <p className="mx-auto mt-4 max-w-[760px] text-lg font-normal text-gray-600">
          Мы верим, что поддержка тех, кто нуждается, и участие в социальных
          инициативах играют ключевую роль в создании более справедливого мира.
        </p>
      </section> */}

      <section className="py-16 xl:py-24">
        <Container>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="max-w-[500px]">
              <h2 className="text-4xl font-semibold text-gray-900 xl:text-[36px] xl:font-bold">
                Наше стремление к позитивным переменам
              </h2>
              <p className="mt-4 max-w-[560px] text-[20px] font-[400] text-gray-600 xl:mt-6 xl:text-[18px]">
                Мы активно поддерживаем различные социальные инициативы и
                проекты, направленные на улучшение жизни
              </p>
            </div>
            <div className="mt-8 space-y-6 lg:mt-0">
              <Feature
                icon={helpIcon}
                title="Помощь нуждающимся"
                description="Мы считаем, что оказание помощи тем, кто находится в трудной ситуации, является нашим главным приоритетом."
              />
              <Feature
                icon={charityIcon}
                title="Благотворительность на первом месте"
                description="Мы твердо верим, что благотворительность должна быть в центре нашей деятельности."
              />
            </div>
          </div>

          <div className="mt-16">
            <div className="relative mx-auto h-[450px] max-w-[800px] overflow-hidden rounded-lg shadow-lg">
              <iframe
                width="50%"
                height="600px"
                className="h-full w-full"
                src="https://www.youtube.com/embed/p11cBIvBf7w"
                title="Top Wayll Promo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-16 xl:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Article
              image={investmentMap}
              title="День защиты детей"
              date="1 июня 2024"
              description="Поздравляем с днем защиты детей!"
            />
            <Article
              image={shariahImage}
              title="Встреча в детском доме"
              date="20 января 2024"
              description="Компания Way II провела благотворительное мероприятие в детском доме"
            />
            <Article
              image={investImage}
              title="Совместное мероприятие "
              date="6 марта 2024"
              description="Компания Way II провела совместное мероприятие по благотворительности с Coca-cola"
            />
          </div>
        </Container>
      </section>
    </div>
  );
}

const Feature = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div className="flex items-start gap-4">
    <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[10px] border border-solid border-gray-200">
      <Image src={icon} alt={title} className="h-[24px] w-[24px]" />
    </div>
    <div className="max-w-[480px]">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-base text-gray-600">{description}</p>
    </div>
  </div>
);

const Article = ({
  image,
  title,
  date,
  description,
}: {
  image: StaticImageData;
  title: string;
  date: string;
  description: string;
}) => (
  <div className="overflow-hidden rounded-lg bg-white shadow-md">
    <Image src={image} alt={title} className="h-48 w-full object-cover" />
    <div className="p-6">
      <p className="text-sm text-[#B42318]">{date}</p>
      <h3 className="mt-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-4 text-base text-gray-600">{description}</p>
    </div>
  </div>
);
