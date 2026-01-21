import React, { ReactNode, useEffect } from 'react';
import './Modal.css';

// Import your existing Button component
// Adjust the relative path as needed based on your file structure
import Button from '../Buttons/Button';

// --- Types ---

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  /** 'standard' = 24px padding (Snippet 1/2), 'large' = 36px padding (Snippet 3) */
  paddingVariant?: 'standard' | 'large';
  /** Optional footer content. Use Modal.Footer for layout. */
  footer?: ReactNode;
  width?: string | number;
}

interface ModalFooterProps {
  children: ReactNode;
  /** * 'right' = All buttons on right (Snippet 1)
   * 'split' = Tertiary left, Primary/Secondary right (Snippet 2) 
   */
  alignment?: 'right' | 'split';
}

// --- Sub-Components ---

const ModalHeader = ({ title, onClose }: { title: string; onClose: () => void }) => (
  <div className="modal-header">
    {/* Title Section (Flex 1) */}
    <div className="modal-title">{title}</div>

    {/* The Requested Close Button Structure */}
    <div
      className="modal-close-btn"
      onClick={onClose}
      role="button"
      tabIndex={0}
      aria-label="Close modal"
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClose(); }}
    >
      <div className="modal-close-icon-box" />
    </div>
  </div>
);

const ModalFooter = ({ children, alignment = 'right' }: ModalFooterProps) => {
  return (
    <div className={`modal-footer align-${alignment}`}>
      {children}
    </div>
  );
};

// --- Main Component ---

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  paddingVariant = 'standard',
  width
}: ModalProps) => {

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      {/* Stop click propagation so clicking inside modal doesn't close it */}
      <div
        className={`modal-container padding-${paddingVariant}`}
        style={{ width: width ? width : undefined }}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader title={title} onClose={onClose} />

        <div className="modal-body">
          {children}
        </div>

        {footer && footer}
      </div>
    </div>
  );
};

// Attach sub-components for clean usage
Modal.Footer = ModalFooter;

export default Modal;