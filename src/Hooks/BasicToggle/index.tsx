import React, { useState } from "react";

export interface BasicToggleProps {}

const BasicToggle: React.SFC<BasicToggleProps> = () => {
  const [isVisible, setVisibility] = useState(true);

  return (
    <div>
      {isVisible && <h1>Toggle Me</h1>}
      <button onClick={() => setVisibility(!isVisible)}>Toggle Text</button>
    </div>
  );
};

export default BasicToggle;
