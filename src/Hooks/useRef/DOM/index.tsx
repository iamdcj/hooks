import React, { useRef, useEffect } from "react";

export interface DOMProps {}

const DOM: React.SFC<DOMProps> = () => {
  const elRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    console.log(elRef.current);
  }, [elRef]);

  return <div ref={elRef}></div>;
};

export default DOM;
