import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import clsx from "clsx";
import * as Popover from "@radix-ui/react-popover";

import { Li as LiType, Div } from "@/shared/types/element";
import { lib } from "@/shared/lib";
import { Locale } from "@/shared/lib/locale";

import language from "@/../public/images/language.svg";
import chevronDown from "@/../public/images/chevron-down.svg";

export const AboutUs = ({ onClick }: { onClick?: () => void }) => (
  <Link href="/about" onClick={onClick}>
    <Li activePath="/about">О нас</Li>
  </Link>
);

export const InvestmentProducts = ({ onClick }: { onClick?: () => void }) => (
  <Link href="/investment-products" onClick={onClick}>
    <Li activePath="/investment-products">Продукты</Li>
  </Link>
);

export const Shariah = ({ onClick }: { onClick?: () => void }) => (
  <Link href="/shariah" onClick={onClick}>
    <Li activePath="/shariah"></Li>
  </Link>
);

export const Pressa = ({ onClick }: { onClick?: () => void }) => (
  <Link href="/pressa" onClick={onClick}>
    <Li activePath="/pressa">Pressa</Li>
  </Link>
);

export const Portfolio = ({ onClick }: { onClick?: () => void }) => (
  <Link href="/portfolio" onClick={onClick}>
    <Li activePath="/portfolio">Портфолио</Li>
  </Link>
);

export const Contact = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Link href="/contacts" onClick={onClick}>
      <Li activePath="/contacts">Контакты</Li>
    </Link>
  );
};

export const Charity = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Link href="/charity" onClick={onClick}>
      <Li activePath="/charity">Благотворительность</Li>
    </Link>
  );
};

const langName: { [Key in Locale]: string } = {
  uz: "O'zbekcha",
  ru: "Русский",
  en: "English",
};

export const SelectLanguage = ({ className, ...props }: Div) => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const lang = router.locale as Locale;

  const onLangSelect = (lang: Locale) => {
    lib.cookies.setCookie("NEXT_LOCALE", lang);
    router.replace(
      { pathname: router.pathname, query: router.query },
      router.asPath,
      { locale: lang },
    );
    setOpen(false);
  };

  return (
    <Popover.Root open={open} onOpenChange={(open) => setOpen(open)}>
      <Popover.Trigger asChild>
        <div
          className={clsx(
            "flex w-[140px] cursor-pointer items-center justify-center gap-2 text-base font-semibold text-gray-600 [&>.chevron]:data-[state=open]:rotate-180",
            className,
          )}
          {...props}>
          <Image src={language} alt="language" className="size-5" />
          {langName[lang]}
          <Image
            src={chevronDown}
            alt="down"
            className="chevron size-5 transition-transform"
          />
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          sideOffset={2 * 4}
          className="z-10 rounded-lg bg-white p-2 shadow outline-none will-change-[transform,opacity] data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=top]:animate-slideDownAndFade">
          <div
            className={clsx(
              "cursor-pointer rounded-md px-5 py-2.5 hover:bg-gray-100",
              lang === "uz" && "bg-gray-100",
            )}
            onClick={() => onLangSelect("uz")}>
            O{"'"}zbekcha
          </div>
          <div
            className={clsx(
              "cursor-pointer rounded-md px-5 py-2.5 hover:bg-gray-100",
              lang === "ru" && "bg-gray-100",
            )}
            onClick={() => onLangSelect("ru")}>
            Русский
          </div>
          <div
            className={clsx(
              "cursor-pointer rounded-md px-5 py-2.5 hover:bg-gray-100",
              lang === "en" && "bg-gray-100",
            )}
            onClick={() => onLangSelect("en")}>
            English
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export const SelectNavigation = ({ className, ...props }: Div) => {
  const [open, setOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState("R&D");
  const router = useRouter();

  const onOptionSelect = (option: string) => {
    setSelectedOption(option);
    setOpen(false);

    // Navigate to the selected option page
    switch (option) {
      // case "Be invested":
      //   router.push("/be-invested");
      //   break;
      case "Pressa":
        router.push("/pressa");
        break;
      case "Career":
        router.push("/career");
        break;
      case "Invest":
        router.push("/invest");
        break;
      case "FAQ":
        router.push("/faq");
        break;
      default:
        break;
    }
  };

  return (
    <Popover.Root open={open} onOpenChange={(open) => setOpen(open)}>
      <Popover.Trigger asChild>
        <div
          className={clsx(
            "mx-3 flex w-[40px] cursor-pointer items-center justify-center gap-2 text-base font-semibold text-gray-600 [&>.chevron]:data-[state=open]:rotate-180",
            className,
          )}
          {...props}>
          Медиа
          <Image
            src={chevronDown}
            alt="down"
            className="chevron size-5 transition-transform"
          />
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          sideOffset={2 * 4}
          className="z-10 rounded-lg bg-white p-2 shadow outline-none will-change-[transform,opacity] data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=top]:animate-slideDownAndFade">
          {/* <div
            className={clsx(
              "cursor-pointer rounded-md px-5 py-2.5 hover:bg-gray-100",
              selectedOption === "Be invested" && "bg-gray-100",
            )}
            onClick={() => onOptionSelect("Be invested")}>
            Получить инвестиции
          </div> */}
          <div
            className={clsx(
              "cursor-pointer rounded-md px-5 py-2.5 hover:bg-gray-100",
              selectedOption === "Pressa" && "bg-gray-100",
            )}
            onClick={() => onOptionSelect("Pressa")}>
            Пресса
          </div>
          {/* <div
            className={clsx(
              "cursor-pointer rounded-md px-5 py-2.5 hover:bg-gray-100",
              selectedOption === "Invest" && "bg-gray-100",
            )}
            onClick={() => onOptionSelect("Invest")}>
            Инвестировать
          </div> */}
          <div
            className={clsx(
              "cursor-pointer rounded-md px-5 py-2.5 hover:bg-gray-100",
              selectedOption === "Career" && "bg-gray-100",
            )}
            onClick={() => onOptionSelect("Career")}>
            Карьера
          </div>
          <div
            className={clsx(
              "cursor-pointer rounded-md px-5 py-2.5 hover:bg-gray-100",
              selectedOption === "FAQ" && "bg-gray-100",
            )}
            onClick={() => onOptionSelect("FAQ")}>
            FAQ
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

const Li = ({
  activePath,
  className,
  children,
  ...props
}: LiType & { activePath: string }) => {
  const router = useRouter();
  const isActive = router.pathname === activePath;
  return (
    <li
      className={clsx(
        className,
        "text-base font-semibold",
        isActive ? "!text-error-700" : "text-gray-600",
      )}
      {...props}>
      {children}
    </li>
  );
};
