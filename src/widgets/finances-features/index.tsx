import React from "react";
import Image from "next/image";

import { Container } from "@/shared/ui";
import arrowRight from "@/../public/images/arrow-right.svg";

export const FinancesFeatures = () => (
  <section className="py-16 xl:py-24">
    <Container>
      <div className="text-center text-3xl font-semibold text-gray-900 xl:font-bold">
        Доверьтесь нашим экспертам
      </div>
      <div className="mt-4 text-center text-lg font-normal text-gray-600 xl:mt-5 xl:text-xl">
        Мы предлагаем широкий спектр инвестиционных услуг, включая:
      </div>
      <div className="mt-12 flex flex-wrap justify-center gap-6 xl:mt-16">
        <FinancesFeature
          icon={
            <Image
              src="/images/message-smile-circle.svg"
              alt="message-chat-circle"
              width={24}
              height={24}
            />
          }
          title="Большое комьюнити"
          subtitle="Присоединяйтесь к нашему большому комьюнити инвесторов и получите доступ к уникальным возможностям!"
        />
        <FinancesFeature
          icon={
            <Image
              src="/images/message-chat-circle.svg"
              alt="zap"
              width={24}
              height={24}
            />
          }
          title="Персональная служба поддержки"
          subtitle="Наша служба поддержки ответит на все ваши вопросы и предоставит необходимую информацию в любое время."
        />
        <FinancesFeature
          icon={
            <Image
              src="/images/zap.svg"
              alt="chart-breakout-square"
              width={24}
              height={24}
            />
          }
          title="Прозрачность и доверие"
          subtitle="Регулярные отчеты и постоянная поддержка помогут вам принимать обоснованные решения."
        />
        <FinancesFeature
          icon={
            <Image
              src="/images/chart-breakout-square.svg"
              alt="message-smile-circle"
              width={24}
              height={24}
            />
          }
          title="Аналитика"
          subtitle="Команда финансовых консультантов разработает для вас индивидуальную инвестиционную стратегию."
        />
      </div>
    </Container>
  </section>
);

const FinancesFeature = ({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) => (
  <div className="max-w-[343px] rounded-[10px] bg-gray-50 p-5 sm:max-w-[286px]">
    <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-error-50">
      {icon}
    </div>
    <div className="h-[164px]">
      <div className="mt-12 text-lg font-semibold text-gray-900">{title}</div>
      <div className="mt-1 text-base font-normal text-gray-600">{subtitle}</div>
    </div>
    <div className="mt-4 flex cursor-pointer items-center gap-x-2 text-base font-semibold text-error-700">
      Узнать подробнее <Image src={arrowRight} alt="right" />
    </div>
  </div>
);
