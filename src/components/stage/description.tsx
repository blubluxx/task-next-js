const Description = () => {
  return (
    <div className="md:absolute md:top-1/3 md:left-1/3 md:transform md:-translate-x-2/3 md:-translate-y-1/2 md:w-1/3 md:max-h-min">
      <div className="md:bg-white bg-[#bdbbaf] md:bg-opacity-60 flex flex-col  md:gap-12 gap-8 justify-center items-center text-neutral-600 md:rounded-3xl p-8 font-semibold text-opacity-90 text-wrap ">
        <h1 className="md:text-4xl text-3xl text-center font-bold md:p-0 px-8">
          ГРАБНИ НОВИ КЛИЕНТИ ЗА ТВОИТЕ УСЛУГИ.
        </h1>
        <div className="md:text-left text-center md:text-base text-lg">
          <p>Предоставяте услуги в бюти индустрията?</p>
          <p>
            Регистрирайте се бързо и лесно в платформата и вземете БЕЗПЛАТЕН
            достъп към всички предимства в рамките на първият месец
          </p>
        </div>
        <button className="md:bg-[#2f325b] bg-yellow-400 md:shadow-sm shadow-[0px_2px_2px_rgba(0,0,0,0.3)] md:p-4 p-3 md:w-2/3 w-[90%] h-fit md:rounded-xl rounded-full md:text-neutral-200 text-neutral-600">
          РЕГИСТРИРАЙТЕ СЕ
        </button>
      </div>
    </div>
  );
};

export default Description;
