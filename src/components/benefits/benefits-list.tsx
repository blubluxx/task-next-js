const benefits: string[] = [
  "Бърза и лесна регистрация – създай профил за минути",
  "Нови клиенти всеки ден – увеличи клиентската си база.",
  "Надеждна и сигурна платформа – работи спокойно с доверие",
  "Безплатна реклама – получаваш видимост пред широка аудитория.",
  "Развитие на бизнеса – разширяваш обхвата и намираш нови партньори",
];

const BenefitsList = () => {
  return (
    <div className="bg-[#545756] text-neutral-200 md:p-20 md:py-16 p-4 flex-1">
      <div className="flex flex-row justify-between gap-10 p-4 pt-0">
        <h1 className="text-3xl lg:text-4xl font-semibold">
          Предимства които получаваш
        </h1>
        <img className="w-8 h-8" src="/arrow-icon.webp" alt="arrow-icon" />
      </div>

      <ul className="flex flex-col gap-3 text-center md:text-xl lg:text-2xl md:mt-6">
        {benefits.map((benefit: string, index) => (
          <li
            key={index}
            className="
            self-center py-2 px-16 text-center 
            border border-white rounded-xl 
            md:w-full
            xs:w-[90%] 
            "
          >
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BenefitsList;
