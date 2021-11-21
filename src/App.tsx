import React, { FC, KeyboardEvent, useState } from "react";
import { useAppDispatch, useTypedSelector } from "./redux/store";

const App: FC = () => {
  const dispatch = useAppDispatch();

  return <div>Pene a la orden: Llama a +420 69 69 69.</div>;
};

export default App;
