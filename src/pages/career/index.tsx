import React from "react";
import { default as Image } from "next/image";
import Head from "next/head";
import { Container } from "@/shared/ui";
import markerPin from "@/../public/images/marker-pin.svg";
import clock from "@/../public/images/clock.svg";
import Link from "next/link";

export default function Career() {
  return (
    <div>
      <Head>
        <title>Career</title>
      </Head>

      {/* <section className="bg-gray-50 py-16 xl:py-24">
        <Container>
          <div className="text-center text-4xl font-semibold text-gray-900 xl:text-5xl">
            Карьера
          </div>
          <div className="mt-4 text-center text-lg font-normal text-gray-600 xl:text-xl">
            Познакомьтесь с нами поближе и присоединяйтесь к нам
          </div>
        </Container>
      </section> */}

      <section className="pt-16 xl:pt-32">
        <Container>
          <div className="border-b border-solid border-b-gray-200 pb-16 xl:pb-24">
            <div className="text-center text-3xl font-semibold text-gray-900 xl:text-4xl">
              Преимущества работы в Way II
            </div>
            <div className="mx-auto mt-4 max-w-[760px] text-center text-lg font-normal text-gray-600 xl:text-xl">
              Работа Way II открывает перед вами уникальные возможности для
              профессионального роста и развития такие как:
            </div>
            <div className="mt-14 xl:flex xl:gap-x-16">
              <div>
                <div className="text-base font-normal text-gray-600 xl:text-lg">
                  <span className="block font-bold">
                    Профессиональное развитие:
                  </span>
                  В Way II вы получите доступ к передовым методам
                  инвестиционного анализа и управления активами, что позволит
                  вам постоянно улучшать свои навыки и знания.
                </div>

                <div className="mt-5 text-base font-normal text-gray-600 xl:text-lg">
                  <span className="block font-bold">
                    Инновационные проекты:
                  </span>
                  Мы активно внедряем новые технологии и стратегии, что делает
                  нашу работу динамичной и интересной. Вы будете вовлечены в
                  разработку и реализацию инновационных инвестиционных решений.
                </div>

                <div className="mt-5 text-base font-normal text-gray-600 xl:text-lg">
                  <span className="block font-bold">Поддержка и обучение:</span>
                  Мы инвестируем в развитие наших сотрудников, предоставляя
                  возможности для обучения и карьерного роста. Вы получите
                  поддержку наставников и доступ к ресурсам для
                  профессионального развития.
                </div>
              </div>

              <div>
                <div className="text-base font-normal text-gray-600 xl:text-lg">
                  <span className="block font-bold">Командная работа:</span>В
                  нашей компании царит дух сотрудничества и поддержки. Вы будете
                  работать в дружелюбной и профессиональной команде, где каждый
                  сотрудник ценится и имеет возможность внести свой вклад в
                  общий успех.
                </div>

                <div className="mt-5 text-base font-normal text-gray-600 xl:text-lg">
                  <span className="block font-bold"> Устойчивый рост:</span>Way
                  II стремится к устойчивому развитию и долгосрочным
                  результатам, что обеспечивает стабильность и уверенность в
                  будущем.
                </div>

                <div className="mt-5 text-base font-normal text-gray-600 xl:text-lg">
                  Работа в Way II — шанс стать частью успешной компании, которая
                  ставит перед собой амбициозные цели и стремится к достижениям
                  в мире инвестиций.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-16 xl:py-24">
        <Container>
          <div className="text-center text-3xl font-semibold text-gray-900 xl:text-4xl">
            Наши вакантные места
          </div>
          <div className="mt-4 text-center text-lg font-normal text-gray-600 xl:text-xl">
            Мы команда, разбросанная по всему Узбекистану. Присоединяйтесь к
            нам!
          </div>
          <div className="mt-12 lg:flex lg:flex-wrap lg:justify-center lg:gap-x-8 xl:mt-16 xl:gap-x-16">
            <OpenPosition
              id="1"
              title="CEO Finance"
              subtitle="В нашу команду мы ищем CEO Finance менеджера"
            />
            <OpenPosition
              id="2"
              title="Инженер"
              subtitle="В нашу команду мы ищем инженера."
            />
            <OpenPosition
              id="3"
              title="Bussiness Analitics"
              subtitle="В нашу команду мы ищем Bussiness Analitics"
            />
            <OpenPosition
              id="4"
              title="Account  manager"
              subtitle="В нашу команду мы ищем бухгалтера"
            />
            <OpenPosition
              id="5"
              title="UI/UX Designer"
              subtitle="В нашу команду мы ищем UI/UX дизайнера"
            />
            <OpenPosition
              id="6"
              title="Back-end developer"
              subtitle="В нашу команду мы ищем back-end разработчика"
            />
          </div>
        </Container>
      </section>
    </div>
  );
}

const OpenPosition = ({
  id,
  title,
  subtitle,
}: {
  id: string;
  title: string;
  subtitle: string;
}) => (
  <div className="w-full border-b border-solid border-gray-200 pb-8 pt-6 first:border-t lg:w-[45%] lg:[&:nth-child(2)]:border-t">
    <Link href={`/career/${id}`} passHref>
      <div className="text-lg font-semibold text-gray-900">{title}</div>
    </Link>
    <div className="mt-4 text-base font-normal text-gray-600">{subtitle}</div>
    <div className="mt-6 flex gap-x-5">
      <div className="flex items-center gap-x-2">
        <Image src={markerPin} alt="remote" />
        Remote
      </div>
      <div className="flex items-center gap-x-2">
        <Image src={clock} alt="full time" />
        Full-time
      </div>
    </div>
  </div>
);
