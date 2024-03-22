import React, { ReactNode, createContext, useContext, useState } from 'react';

type clickedContextType = {
  view: boolean;
  update: boolean;
  toDelete: boolean;
  notification: boolean;
  chat: boolean;
  handleViewClick: () => void;
  handleUpdateClick: () => void;
  handleDeleteClick: () => void;
  handleNotificationClick: () => void;
  handleChatClick: () => void;
};

const clickedContextDefaultValues: clickedContextType = {
  view: false,
  update: false,
  toDelete: false,
  notification: false,
  chat: false,
  handleViewClick: () => {},
  handleUpdateClick: () => {},
  handleDeleteClick: () => {},
  handleNotificationClick: () => {},
  handleChatClick: () => {},
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

// console.log(clickedContextDefaultValues);

export function ClickProvider({ children }: Props) {
  const [isViewClicked, setIsViewClicked] = useState<boolean>(false);
  const [isUpdateClicked, setIsUpdateClicked] = useState<boolean>(false);
  const [isDeleteClicked, setIsDeleteClicked] = useState<boolean>(false);
  const [isNotificationClicked, setIsNotificationClicked] =
    useState<boolean>(false);
  const [isChatClicked, setIsChatClicked] = useState<boolean>(false);

  const handleViewClick = () => setIsViewClicked((prev) => !prev);
  const handleUpdateClick = () => setIsUpdateClicked((prev) => !prev);
  const handleDeleteClick = () => setIsDeleteClicked((prev) => !prev);
  const handleNotificationClick = () =>
    setIsNotificationClicked((prev) => !prev);
  const handleChatClick = () => setIsChatClicked((prev) => !prev);

  const value = {
    handleViewClick,
    handleUpdateClick,
    handleDeleteClick,
    handleNotificationClick,
    handleChatClick,
    view: isViewClicked,
    update: isUpdateClicked,
    toDelete: isDeleteClicked,
    notification: isNotificationClicked,
    chat: isChatClicked,
  };

  return (
    <ClickedContext.Provider value={value}>{children}</ClickedContext.Provider>
  );
}
