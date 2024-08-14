import { ApplicationForm } from "@/widgets/application-form";

import { Container } from "@/shared/ui";

interface Props {
  title?: string;
  subtitle?: string;
}

export const SubmitApplication = ({ title, subtitle }: Props) => (
  <section className="bg-gray-50 py-10 xl:py-12">
    <Container>
      <div className="text-center text-4xl font-semibold text-gray-900 xl:font-bold"></div>
      <h3 className="text-center text-[36px] font-bold">
        {title ? title : "Оставьте заявку"}
      </h3>
      <div className="mt-4 text-center text-lg font-normal text-gray-600 xl:mt-5 xl:text-xl">
        {subtitle ? subtitle : "Оставьте заявку и мы свяжемся с вами"}
      </div>
      <ApplicationForm />
    </Container>
  </section>
);
