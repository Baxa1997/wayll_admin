import React from "react";
import Image from "next/image";
import Head from "next/head";
import { Map, YMaps, Placemark } from "react-yandex-maps";
import { Container } from "@/shared/ui";

import mail from "@/../public/images/mail.svg";
import markerPin from "@/../public/images/marker-pin-red.svg";
import phone from "@/../public/images/phone.svg";

export default function Contacts() {
  return (
    <div>
      <Head>
        <title>Contacts</title>
      </Head>

      <section className="py-16 pt-28 lg:pt-32">
        <Container>
          <div className="text-center text-3xl font-semibold text-gray-900 xl:text-4xl">
            Напишите нам
          </div>
          <div className="m-auto mt-4 max-w-[768px] text-center text-lg font-normal text-gray-600 xl:text-[20px]">
            Мы хотели бы услышать вас. Пожалуйста, заполните эту форму или
            напишите нам письмо.
          </div>
          <div className="border-solid border-b-gray-200 pb-16 xl:flex xl:items-start xl:justify-between xl:pb-24">
            <div className="mt-12 flex max-w-[610px] flex-wrap gap-x-8 gap-y-10 sm:mx-auto xl:mx-0">
              <Contact
                img={<Image src={mail} alt="mail" />}
                title="Email"
                subtitle="Наша корпоративная почта"
                action={
                  <a href="mailto:Info@wayIIgroup.com">Info@wayIIgroup.com</a>
                }
              />
              <Contact
                img={<Image src={markerPin} alt="location" />}
                title="Офис"
                subtitle="Адрес офиса Way II Group"
                action={
                  <>Яшнабадский район, улица Махтумкули, дом 64, корпус 1</>
                }
              />
              <Contact
                img={<Image src={phone} alt="phone" />}
                title="Phone"
                subtitle="Мы работаем с понедельника по субботу с 9:00 - 18:00"
                action={<a href="tel:+998785555555">+998 78 555 55 55</a>}
              />
            </div>
            <div
              id={"yandex_map"}
              className="mt-12 h-[380px] max-w-[576px] flex-col overflow-hidden lg:mx-auto xl:mx-0 xl:min-w-[576px] xl:rounded-2xl xl:bg-gray-50">
              <YMaps
                query={{
                  load: "package.full",
                  // apikey: "5e5a73bd-6e0a-40f1-ba8e-f0b98d95e75f",
                }}>
                <Map
                  defaultState={{
                    center: [41.305244, 69.305853],
                    zoom: 15,
                  }}
                  width="100%"
                  height="100%">
                  <Placemark geometry={[41.305244, 69.305853]} />
                </Map>
              </YMaps>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

const Contact = ({
  img,
  title,
  subtitle,
  action,
}: {
  img?: React.ReactNode;
  title?: string;
  subtitle?: string;
  action?: React.ReactNode;
}) => (
  <div className="h-fit w-[182px]">
    {img}
    <div className="mt-4 text-lg font-semibold text-gray-900 xl:text-xl xl:font-bold">
      {title}
    </div>
    <div className="mt-1 text-base font-normal text-gray-600">{subtitle}</div>
    <div className="mt-3 text-base font-semibold text-error-700 xl:font-semibold">
      {action}
    </div>
  </div>
);
