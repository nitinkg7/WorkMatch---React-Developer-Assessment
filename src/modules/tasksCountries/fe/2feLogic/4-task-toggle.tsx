/*
 Please write a component that contains a toggle button.
 When clicking the button it should show or hide a text below the button.
 The title of the page should change between 'shown' and 'hidden'.
 Hint: the title can be set with document.title = 'some string'.

  You can view your results on http://localhost:3000/toggle
*/

import { useState } from "react";
import { Button, HorizontalLine, Paragraph } from "@styleGuide";

export const Toggle = () => {
  const [isToggle, setToggle] = useState(true);

  const handleToggle = () => {
    document.title = !isToggle ? "Shown" : "Hidden";
    setToggle(!isToggle);
  };

  return (
    <div>
      {/* your button */}
      <Button onClick={handleToggle}>{!isToggle ? "Show" : "Hide"}</Button>
      <HorizontalLine />
      {/* show and hide */}
      <Paragraph>{isToggle && "Shown Text"}</Paragraph>
    </div>
  );
};
