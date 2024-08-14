import React, { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { Container } from "@/shared/ui";
import chartImage from "@/../public/images/invest-new.png";
import akfa from "@/../public/images/akfa_logo.png";
import artel from "@/../public/images/artel_logo.png";
import imzo from "@/../public/images/imzo_logo.png";
import caex from "@/../public/images/caex-logo.png";
import feedup from "@/../public/images/feed-up.png";
import { SubmitApplication } from "@/widgets/submit-application";
import { numberWithSpaces } from "@/shared/lib/numberWithSpaces";
import * as Dialog from "@radix-ui/react-dialog";

export default function Invest() {
  const [investment, setInvestment] = useState(5000000);
  const [term, setTerm] = useState(5);
  const [percentage, setPercentage] = useState(5);
  const [result, setResult] = useState(0);

  const handleCalculate = () => {
    const calculatedResult = investment * Math.pow(1 + percentage / 100, term);
    setResult(calculatedResult);
  };

  useEffect(() => {
    handleCalculate();
  }, [investment, term, percentage]);

  return (
    <div>
      <Head>
        <title>Invest</title>
      </Head>

      {/* <section className="bg-gray-50 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900">
          Возможности инвестирования
        </h1>
        <p className="mx-auto mt-4 max-w-[600px] text-lg font-normal text-gray-600">
          Мы научим вас философии инвестиций и тому, как инвестировать.
        </p>
      </section> */}

      <section className="py-16 xl:py-24">
        <Container>
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="max-w-[560px] lg:w-1/2">
              <h2 className="text-[30px] font-semibold text-gray-900 xl:text-[30px] xl:font-bold">
                Виды инвестирования
              </h2>
              <p className="mt-4 text-[18px] font-normal text-gray-600 xl:mt-6 xl:text-[18px]">
                <span className="font-bold"> Долевое участие</span> – это форма
                партнерства, при которой несколько участников объединяют свои
                капиталы и ресурсы для ведения совместной деятельности. Каждый
                участник имеет долю в бизнесе, которая соответствует его вкладу.
              </p>
              <p className="mt-4 text-[18px] font-normal text-gray-600 xl:mt-6 xl:text-[18px]">
                <span className="font-bold">Коммандитное товарищество</span>, с
                другой стороны, представляет собой форму партнерства, в которой
                существуют два типа участников: полные товарищи и коммандитисты.
                Полные товарищи (генеральные партнеры) управляют делами
                товарищества и несут неограниченную ответственность по его
                обязательствам, что означает, что они могут потерять не только
                свой вклад, но и личное имущество в случае неудачи.
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

      <section className="bg-[#fff] py-16 xl:py-24">
        <Container>
          <div className="text-center text-[30px] font-bold text-[#101828]">
            Калькулятор инвестиций
          </div>
          <div className="mx-auto mt-2 max-w-[70%] rounded-lg bg-white p-8">
            <div className="relative mb-12">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Сумма инвестиций (UZS)
              </label>
              <input
                type="text"
                className="text-x border-b-none h-[59px] w-full rounded-md rounded-b-none rounded-t-[8px] border-[1px] border-[#D0D5DD] px-[14px] font-bold text-[#667085]"
                value={`${numberWithSpaces(investment)} UZS`}
              />
              <input
                type="range"
                min="5000000"
                max="1000000000"
                step="1000000"
                className="absolute bottom-[-10px] left-0 w-full accent-red-500"
                value={investment}
                onChange={(e) => {
                  setInvestment(parseInt(e.target.value, 10));
                }}
              />
            </div>

            <div className="relative mb-12">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Срок (лет)
              </label>
              <input
                type="text"
                className="text-x border-b-none h-[59px] w-full rounded-md rounded-b-none rounded-t-[8px] border-[1px] border-[#D0D5DD] px-[14px] font-bold text-[#667085]"
                value={`${term} ${term == 1 ? "год" : "года"}`}
              />
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                className="absolute bottom-[-10px] left-0 w-full accent-red-500"
                value={term}
                onChange={(e) => {
                  setTerm(parseInt(e.target.value, 10));
                }}
              />
            </div>

            <div className="relative mb-12">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Процент (%)
              </label>
              <input
                type="text"
                className="text-x border-b-none h-[59px] w-full rounded-md rounded-b-none rounded-t-[8px] border-[1px] border-[#D0D5DD] px-[14px] font-bold text-[#667085]"
                value={`${percentage} %`}
              />
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                className="absolute bottom-[-10px] left-0 w-full accent-red-500"
                value={percentage}
                onChange={(e) => {
                  setPercentage(parseInt(e.target.value, 10));
                }}
              />
            </div>
            <div className="m-12 text-center text-[28px] text-gray-500">
              Сумма получения:{" "}
              <span className="font-bold">{numberWithSpaces(result)} UZS</span>
            </div>

            <button
              className="mt-4 w-full rounded-md bg-red-500 py-3 text-lg font-bold text-white shadow-md"
              onClick={handleCalculate}>
              Рассчитать
            </button>
            <ModalComponent />
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-16 xl:py-24">
        <Container>
          <div className="text-center text-[24px] text-base font-medium text-gray-600">
            Уже работают:
          </div>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-x-8 gap-y-6">
            <Image src={feedup} alt="akfa" className="h-9 w-fit xl:h-12" />
            <Image src={akfa} alt="akfa" className="h-9 w-fit xl:h-12" />
            <Image src={artel} alt="artel" className="h-9 w-fit xl:h-12" />
            <Image src={imzo} alt="imzo" className="h-9 w-fit xl:h-12" />
            <Image
              src={caex}
              alt="akfa-build"
              className="h-9 w-fit xl:h-[54px]"
            />
          </div>
        </Container>
      </section>

      <section>
        {/* <SubmitApplication
          title={"Подать заявку"}
          subtitle="Оставьте заявку и мы свяжемся с вами"
        /> */}
      </section>
    </div>
  );
}

const ModalComponent = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="Button violet">Edit profile</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Make changes to your profile here. Click save when you are done.
          </Dialog.Description>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="name">
              Name
            </label>
            <input className="Input" id="name" defaultValue="Pedro Duarte" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="username">
              Username
            </label>
            <input className="Input" id="username" defaultValue="@peduarte" />
          </fieldset>
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}>
            <Dialog.Close asChild>
              <button className="Button green">Save changes</button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              {/* <Cross2Icon /> */}
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
