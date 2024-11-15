import React from 'react';

// Định nghĩa kiểu dữ liệu cho props của Modal
interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;  // Nội dung Modal
    style?: React.CSSProperties;  // Optional prop cho style
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children, style }) => {
    if (!open) return null; // Nếu modal không mở, không render gì

    // Style của modal
    const modalStyle: React.CSSProperties = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        zIndex: 1000,
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        ...style,  // Kết hợp style tùy chỉnh
    };

    // Overlay mờ (background trong suốt với hiệu ứng mờ)
    const overlayStyle: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 999,
    };

    return (
        <>
            <div style={overlayStyle} onClick={onClose}></div>
            <div style={modalStyle}>
                {children}
            </div>
        </>
    );
};

export default Modal;
