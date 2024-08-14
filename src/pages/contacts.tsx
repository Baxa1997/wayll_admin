import React from "react";
import Image from "next/image";
import Head from "next/head";
import {
  EmailField,
  FirstNameField,
  LastNameField,
  MessageField,
  PolicyField,
} from "@/widgets/application-form";

import { Button, Container } from "@/shared/ui";

import mail from "@/../public/images/mail.svg";
import messageChatCircle from "@/../public/images/telegram.svg";
import markerPin from "@/../public/images/marker-pin-red.svg";
import phone from "@/../public/images/phone.svg";

export default function Contacts() {
  return (
    <div>
      <Head>
        <title>Contacts</title>
      </Head>

      <section className="bg-gray-50 py-16 xl:py-24">
        <Container>
          <div className="text-center text-4xl font-semibold text-gray-900 xl:text-5xl">
            Контакты
          </div>
          <div className="mt-4 text-center text-lg font-normal text-gray-600 xl:text-xl">
            Наши контакты
          </div>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <div className="text-center text-3xl font-semibold text-gray-900 xl:text-4xl">
            Напишите нам
          </div>
          <div className="mt-4 text-center text-lg font-normal text-gray-600 xl:text-xl">
            Мы хотели бы услышать вас. Пожалуйста, заполните эту форму или
            напишите нам письмо.
          </div>
          <div className="border-b border-solid border-b-gray-200 pb-16 xl:flex xl:items-start xl:justify-between xl:pb-24">
            <div className="mt-12 flex max-w-[576px] flex-wrap gap-x-8 gap-y-10 sm:mx-auto xl:mx-0">
              <Contact
                img={<Image src={mail} alt="mail" />}
                title="Email"
                subtitle="Наша корпоративная почта"
                action={
                  <a href="mailto:Info@wayIIgroup.com">Info@wayIIgroup.com</a>
                }
              />
              <Contact
                img={<Image src={messageChatCircle} alt="chat" />}
                title="Telegram"
                subtitle="Наш телеграмм по номеру:"
                action={<a href="tel:+998772226555">+998 77 222 65 55</a>}
              />
              <Contact
                img={<Image src={markerPin} alt="location" />}
                title="Офис"
                subtitle="Адрес офиса Way II Group"
                action={
                  <>
                    Яшнабадский район, улица Махтумкули, дом 64, корпус 1
                    <br />
                    {/* Collingwood VIC 3066 AU */}
                  </>
                }
              />
              <Contact
                img={<Image src={phone} alt="phone" />}
                title="Phone"
                subtitle="Мы работаем с понедельника по субботу с 9:00 - 18:00"
                action={<a href="tel:+998772226555">+998 77 222 65 55</a>}
              />
            </div>
            <div className="mx-auto mt-12 flex max-w-[576px] flex-col gap-y-6 xl:mx-0 xl:min-w-[576px] xl:rounded-2xl xl:bg-gray-50 xl:px-8 xl:py-10">
              <div className="flex flex-col gap-y-6 xl:flex-row xl:gap-x-8">
                <FirstNameField />
                <LastNameField />
              </div>
              <EmailField />
              <MessageField />
              <PolicyField />
              <Button appearance="destructive" size="xl" className="mt-2">
                Send message
              </Button>
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
  <div className="h-fit w-[272px]">
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
