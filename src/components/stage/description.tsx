const Description = () => {
  return (
    <div className="relative md:p-12 p-2 py-7 md:bg-transparent bg-neutral-200">
      <div className="relative md:bg-white bg-transparent md:bg-opacity-60 flex flex-col md:w-96 h-fit gap-10 justify-center items-center text-neutral-600 rounded-3xl p-5 font-semibold">
        <h1 className="md:text-2xl text-4xl text-center font-bold md:p-0 px-8">
          ГРАБНИ НОВИ КЛИЕНТИ ЗА ТВОИТЕ УСЛУГИ.
        </h1>
        <div className="text-wrap md:text-left text-center md:text-xs text-xl">
          <p>Предоставяте услуги в бюти индустрията?</p>
          <p>
            Регистрирайте се бързо и лесно в платформата и вземете БЕЗПЛАТЕН
            достъп към всички предимства в рамките на първият месец
          </p>
        </div>
        <button className="md:bg-blue-950 bg-yellow-400 md:shadow-sm shadow-[0px_2px_2px_rgba(0,0,0,0.3)] md:p-4 p-3 w-5/6 h-fit md:rounded-xl rounded-full md:text-sm text-l md:text-neutral-100 text-neutral-600">
          РЕГИСТРИРАЙТЕ СЕ
        </button>
      </div>
    </div>
  );
};

export default Description;
