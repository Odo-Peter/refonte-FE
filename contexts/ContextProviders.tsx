import React, { ReactNode, createContext, useContext, useState } from 'react';

type clickedContextType = {
  view: boolean;
  update: boolean;
  toDelete: boolean;
  notification: boolean;
  chat: boolean;
  adminDetails: {
    id: string;
    name: string;
    contactNumber: string;
    email: string;
    joined: string;
  };
  handleViewClick: () => void;
  handleUpdateClick: () => void;
  handleDeleteClick: () => void;
  handleNotificationClick: () => void;
  handleChatClick: () => void;
  handleAdminDetails: (admin: any) => void;
};

const clickedContextDefaultValues: clickedContextType = {
  view: false,
  update: false,
  toDelete: false,
  notification: false,
  chat: false,
  adminDetails: {
    id: '',
    name: '',
    contactNumber: '',
    email: '',
    joined: '',
  },
  handleViewClick: () => {},
  handleUpdateClick: () => {},
  handleDeleteClick: () => {},
  handleNotificationClick: () => {},
  handleChatClick: () => {},
  handleAdminDetails: (admin: any) => {},
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

  const [adminDetails, setAdminDetails] = useState<
    clickedContextType['adminDetails']
  >(clickedContextDefaultValues.adminDetails);

  const handleViewClick = () => setIsViewClicked((prev) => !prev);
  const handleUpdateClick = () => setIsUpdateClicked((prev) => !prev);
  const handleDeleteClick = () => setIsDeleteClicked((prev) => !prev);
  const handleNotificationClick = () =>
    setIsNotificationClicked((prev) => !prev);
  const handleChatClick = () => setIsChatClicked((prev) => !prev);
  const handleAdminDetails = (admin: any) => setAdminDetails(admin);

  const value = {
    handleViewClick,
    handleUpdateClick,
    handleDeleteClick,
    handleNotificationClick,
    handleChatClick,
    handleAdminDetails,
    view: isViewClicked,
    update: isUpdateClicked,
    toDelete: isDeleteClicked,
    notification: isNotificationClicked,
    chat: isChatClicked,
    adminDetails: {
      id: adminDetails.id,
      name: adminDetails.name,
      contactNumber: adminDetails.contactNumber,
      email: adminDetails.email,
      joined: adminDetails.joined,
    },
  };

  return (
    <ClickedContext.Provider value={value}>{children}</ClickedContext.Provider>
  );
}
