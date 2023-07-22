import React, { useEffect } from "react";

interface ModalProps {
  cardId: string | null;
}

const Modal = ({ cardId }: ModalProps) => {
  // useEffect(() => {
  //   if (!cardId) return;
  //   console.log('abc');
  // }, [cardId]);
  return <div>{cardId}</div>;
};

export default Modal;
