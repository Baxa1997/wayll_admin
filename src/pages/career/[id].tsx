import { careers } from "@/mock/career";
import { Container } from "@/shared/ui";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import divider from "@/../public/images/slash-divider.svg";
import { CareerApplication } from "@/widgets/submit-application/CareerApplication";

const CareerDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log("idididididid", id, careers);

  const career = careers.find((c) => c.id === id);

  if (!career) {
    return <div>Career not found</div>;
  }

  return (
    <>
      <section className="pt-20">
        <Container>
          <div>
            <div className="mt-5 flex items-center gap-x-2">
              <Link
                href="/career"
                className="text-sm font-medium text-gray-600">
                Career
              </Link>
              <Image src={divider} alt="divide" className="size-5" />
              <div className="text-sm font-semibold text-error-700">
                <p className="text-[14px] font-semibold">{career.title}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <CareerApplication title={career?.title} />
    </>
  );
};

export default CareerDetails;
