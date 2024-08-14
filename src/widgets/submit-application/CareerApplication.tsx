import { Container } from "@/shared/ui";
import { CareerApplicationForm } from "../application-form/CareerApplicationForm";

export const CareerApplication = () => (
  <section className="py-16 xl:py-12">
    <Container>
      <div className="text-center text-4xl font-semibold text-gray-900 xl:font-bold"></div>
      <h3 className="text-center text-[36px] font-bold">CEO Finance</h3>
      <div className="mt-4 text-center text-[18px] font-normal text-gray-600 xl:mt-5">
        You can reach us anytime via{" "}
        <span className="text-[#D37972]">hi@udevs.com</span>
      </div>
      <CareerApplicationForm />
    </Container>
  </section>
);
