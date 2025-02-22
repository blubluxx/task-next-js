const BenefitsList = () => {
  return (
    <div className="bg-[#545756] text-neutral-200 md:p-20 md:py-16 p-4 flex-1">
      <div className="p-4 pt-0 flex flex-row justify-between gap-10">
        <h1 className="text-3xl font-bold">Предимства които получаваш</h1>
        <img className="w-8 h-8" src="/arrow-icon.webp" alt="arrw" />
      </div>

      <ul className="benefits-list text-center text-lg flex flex-col gap-3 md:mt-6">
        <li>Бърза и лесна регистрация - създай профил за минути</li>
        <li>Нови клиенти всеки ден - увеличи клиентската си база.</li>
        <li>Надеждна и сигурна платформа - работи спокойно с доверие</li>
        <li>Безплатна реклама - получаваш видимост пред широка аудитория.</li>
        <li>
          Развитие на бизнеса - разширяваш обхвата и намираш нови партньори
        </li>
      </ul>
    </div>
  );
};

export default BenefitsList;
