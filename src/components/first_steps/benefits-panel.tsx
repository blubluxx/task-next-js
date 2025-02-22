import BenefitsList from "./benefits-list";

const BenefitsPanel = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center mt-8">
      <BenefitsList />

      <div className="bg-[#dddbce] text-center md:text-2xl text-xl text-neutral-600 p-20 flex-1 flex items-center">
        <p className="italic font-semibold">
          В личния си профил ще можете да проследявате получените оферти,
          изпълнените поръчки, оценките и отзивите. <br /> Регистрирайте се сега{" "}
          <br /> Вашият успех е само на няколко клика разстояние!
        </p>
      </div>
    </div>
  );
};

export default BenefitsPanel;
