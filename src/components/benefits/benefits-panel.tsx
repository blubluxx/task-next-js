import BenefitsList from "./benefits-list";

const BenefitsArea = () => {
  return (
    <section id="benefits-area">
      <div className="flex flex-col md:flex-row justify-center mt-8">
        <BenefitsList />

        <div className="bg-[#dddbce] p-20 flex flex-1 items-center">
          <p
            className="
            italic font-bold text-center text-xl text-neutral-600
            sm:mx-20 
            md:text-2xl md:mx-8 
            lg:text-3xl
          "
          >
            В личния си профил ще можете да проследявате получените оферти,
            изпълнените поръчки, оценките и отзивите. <br /> Регистрирайте се
            сега <br /> Вашият успех е само на няколко клика разстояние!
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsArea;
