const FirstStepsInfo = () => {
  return (
    <div className="flex flex-col gap-5 p-5 text-wrap h-full md:text-left text-gray-500 max-w-lg md:mt-0 mt-10 ">
      <h3 className="text-green-500 text-md">ПЪРВА СТЪПКА</h3>

      <h1 className="font-semibold text-4xl">
        Направи първа стъпка за да се регистрираш.
      </h1>

      <div className="text-lg">
        <p>
          Лесната регистрация ти дава бърз старт – само няколко стъпки, и вече
          си на платформата, готов за нови възможности! <br /> Как работи
          платформата:
        </p>
        <ol className="list-decimal list-inside">
          <li>Попълнете профила си и публикувайте услуги.</li>
          <li>Запознайте се с публикуваните оферти и изберете подходящите.</li>
          <li>
            Съгласувайте подробностите на офертата с клиента и потвърдете, че
            сте я приели за изпълнение.
          </li>
          <li>
            Изпълнете сключеното споразумение и получете отзив, който вдига
            рейтинга Ви.*
          </li>
        </ol>
      </div>
    </div>
  );
};

export default FirstStepsInfo;
