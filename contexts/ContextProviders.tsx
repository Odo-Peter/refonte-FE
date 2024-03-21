import React, { ReactNode, createContext, useContext, useState } from 'react';

type clickedContextType = {
  isDeleteBtn: boolean;
  isClicked: () => void;
};

const clickedContextDefaultValues: clickedContextType = {
  isDeleteBtn: false,
  isClicked: () => {},
};

const ClickedContext = createContext<clickedContextType>(
  clickedContextDefaultValues
);

export function useClicked() {
  return useContext(ClickedContext);
}

type Props = {
  children: ReactNode;
};

export function ClickProvider({ children }: Props) {
  const [isDeleteBtn, seIsDeleteBtnClicked] = useState<boolean>(false);

  const isClicked = () => {
    seIsDeleteBtnClicked((prev) => !prev);
  };

  return (
    <ClickedContext.Provider value={{ isDeleteBtn, isClicked }}>
      {children}
    </ClickedContext.Provider>
  );
}
