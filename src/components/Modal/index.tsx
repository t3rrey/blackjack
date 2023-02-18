import { ReactNode, FC, SetStateAction, Dispatch } from "react";
import { Dialog } from "@headlessui/react";

export interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
}

const Modal: FC<ModalProps> = ({ children, isOpen, onClose }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => onClose(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-white">
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default Modal;
