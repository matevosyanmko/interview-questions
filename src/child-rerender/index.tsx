import { Fragment, useState } from "react";
import ChildA from "./ChildA";

const Parent = () => {
  const [language, setLanguage] = useState<"en" | "ru">("en");

  const onButtonClick = () => {
    setLanguage((prev) => (prev === "en" ? "ru" : "en"));
  };

  console.log("Parent render");

  return (
    <Fragment>
      <div>
        Current language is {language} &nbsp;
        <button onClick={onButtonClick}>Toggle language</button>
      </div>

      <ChildA />
    </Fragment>
  );
};
export default Parent;
