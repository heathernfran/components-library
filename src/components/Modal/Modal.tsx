import { useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  content: string;
}

export function Modal({ content }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const renderModalContent = () => (
    <div>
      <p>{content}</p>
      <button onClick={handleCloseModal}>Close Modal</button>
    </div>
  );

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>

      {isOpen && createPortal(renderModalContent(), document.body)}
    </div>
  );
}
