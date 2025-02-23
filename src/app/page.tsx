import FirstStepsArea from "@/components/first_steps/first-steps-area";
import RegisterArea from "@/components/register/register-area";
import StageArea from "@/components/stage/stage-area";

export default function Home() {
  return (
    <>
      {/* <header></header> */}
      <main>
        <StageArea />
        <FirstStepsArea />
        <RegisterArea />
      </main>
    </>
  );
}
