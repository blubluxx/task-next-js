/**
 * A component that renders a section
 * providing information about the first steps to register on the platform.
 *
 * The component includes:
 * - A heading indicating the first step.
 * - A main title encouraging the user to take the first step to register.
 * - A description explaining the ease of registration and the benefits.
 * - An ordered list detailing the steps to use the platform effectively.
 *
 *
 * @returns {JSX.Element} The rendered component.
 */

const FirstStepsInfo = () => {
  return (
    <div className="flex flex-col gap-5 p-5 h-full text-gray-500 max-w-lg md:mt-0 mt-10">
      <h3 className="text-green-500 text-sm sm:text-md font-medium">
        ПЪРВА СТЪПКА
      </h3>

      <h1 className="font-semibold text-3xl xs:text-4xl sm:text-5xl text-gray-700">
        Направи първа стъпка за да се регистрираш.
      </h1>

      <div className="text-base sm:text-xl space-y-2">
        <p className="mb-2">
          Лесната регистрация ти дава бърз старт – само няколко стъпки, и вече
          си на платформата, готов за нови възможности!
        </p>
        <p className="font-medium">Как работи платформата:</p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Попълнете профила си и публикувайте услуги.</li>
          <li>Запознайте се с публикуваните оферти и изберете подходящите.</li>
          <li>
            Съгласувайте подробностите на офертата с клиента и потвърдете, че
            сте я приели за изпълнение.
          </li>
          <li>
            Изпълнете сключеното споразумение и получете отзив, който вдига
            рейтинга Ви.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default FirstStepsInfo;
