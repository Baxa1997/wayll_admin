import Image from "next/image";

import { Container, logo } from "@/shared/ui";

import appStore from "@/../public/images/donwload_app_store.svg";
import googlePlay from "@/../public/images/donwload_google_play.svg";
import twitter from "@/../public/images/x-icon.svg";
import linkedin from "@/../public/images/linkedin-icon.svg";
import facebook from "@/../public/images/facebook-icon.svg";
import telegram from "@/../public/images/telegram-icon.svg";
import youtube from "@/../public/images/youtube-icon.svg";
import dribble from "@/../public/images/dribbble_icon.svg";

import instagram from "@/../public/images/instagram-icon.svg";
import whatsup from "@/../public/images/whatsup-icon.svg";
import * as Dialog from "@radix-ui/react-dialog";

import {
  AboutUs,
  Contact,
  InvestmentProducts,
  Portfolio,
  Charity,
  SelectNavigation,
} from "./nav";
import { SubmitApplication } from "../submit-application";
import { useState } from "react";

interface Props {
  showForm: boolean;
  onClose: () => void;
}

export const Footer = () => {
  const [showForm, setShowForm] = useState(false);

  const handleClose = () => {
    setShowForm(false);
  };

  return (
    <div className="pb-12">
      <Container>
        <section className="px- border-t-[1px] py-[60px] text-center">
          <button
            className="w-[376px] rounded-md border bg-red-500 py-3 text-lg font-bold text-white shadow-lg"
            onClick={() => setShowForm(true)}>
            Подать заявку
          </button>
        </section>
      </Container>
      <Container>
        <div className="sm:flex sm:items-center sm:justify-between sm:pb-12">
          <div>
            {logo}
            <div className="mt-6 w-[343px] text-base font-normal text-gray-600">
              Ваши финансовые возможности
            </div>
            <nav className="mt-8">
              <ul className="flex gap-x-6">
                <div className="flex flex-col gap-y-3 lg:flex-row lg:gap-x-8">
                  <AboutUs />
                  <InvestmentProducts />
                </div>
                <div className="flex flex-col gap-y-3 lg:flex-row lg:gap-x-8">
                  <Portfolio />
                  <Charity />
                  <SelectNavigation />
                  <Contact />
                </div>
              </ul>
            </nav>
          </div>

          <div className="py-12">
            <div className="text-base font-medium text-error-700">
              Мы также здесь
            </div>
            <div className="mt-4 flex gap-x-4 gap-y-2 sm:flex-col">
              <Image src={appStore} alt="Download from app store" />
              <Image src={googlePlay} alt="Download from google play" />
            </div>
          </div>
        </div>

        <div className="border-t border-solid border-t-gray-200 pt-8 sm:flex sm:flex-row-reverse sm:items-end sm:justify-between">
          <div className="flex gap-x-[24px]">
            <Image src={instagram} alt="Instagram" />
            <Image src={twitter} alt="Twitter" />
            <Image src={linkedin} alt="Linkedin" />
            <Image src={whatsup} alt="Wahtsup" />
            <Image src={facebook} alt="Facebook" />
            <Image src={telegram} alt="Telegram" />
            <Image src={youtube} alt="Youtube" />
            {/* <Image src={dribble} alt="Dribbble" /> */}
          </div>

          <div className="mt-6 text-base font-normal text-[#70707B]">
            © 2024 ООО WAY II все права защищены
          </div>
        </div>
      </Container>

      <ModalComponent showForm={showForm} onClose={handleClose} />
    </div>
  );
};
const ModalComponent = ({ showForm, onClose }: Props) => {
  return (
    <Dialog.Root open={showForm} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <section>
            <SubmitApplication
              title={"Подать заявку"}
              subtitle="Оставьте заявку и мы свяжемся с вами"
              onClose={onClose}
            />
          </section>
          <Dialog.Close asChild>
            <button className="mt-4 w-full rounded-md bg-red-500 py-2 text-lg font-bold text-white shadow-md">
              Закрыть
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
