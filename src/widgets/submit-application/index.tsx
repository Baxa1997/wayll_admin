import { ApplicationForm } from "@/widgets/application-form";
import { ContainerSm } from "@/shared/ui/container";

interface Props {
  title?: string;
  subtitle?: string;
  onClose?: any;
}

export const SubmitApplication = ({ title, subtitle, onClose }: Props) => (
  <section className="relative bg-gray-50 md:pt-6 lg:pt-12">
    <ContainerSm>
      <div className="text-center text-4xl font-semibold text-gray-900 xl:font-bold"></div>
      <h3 className="text-center text-[26px] font-bold">
        {title ? title : "Оставьте заявку"}
      </h3>
      <div className="mt-2 text-center text-lg font-normal text-gray-600 xl:mt-5 xl:text-[18px]">
        {subtitle ? subtitle : "Оставьте заявку и мы свяжемся с вами"}
      </div>
      <div className="max-h-[75vh] overflow-auto p-4">
        {/* Ensure the modal content is scrollable */}
        <ApplicationForm onClose={onClose} />
      </div>
    </ContainerSm>
  </section>
);
