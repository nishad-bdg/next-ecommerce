"use client";
import { useStoreModal } from "@/hooks/use-store-modal";
import { UserButton } from "@clerk/nextjs";
import React, { useEffect } from "react";

const SetupPage: React.FC = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if(!isOpen) {
      onOpen()
    }
  },[isOpen, onOpen])
  
  return (
    <div className="p-4">
      <UserButton afterSignOutUrl="/" />
      Root Page
    </div>
  );
};

export default SetupPage;
