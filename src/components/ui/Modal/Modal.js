import React from "react";
import "../Modal/Modal.css";

const Modal = ({
  show = false,
  background = false,
  children,
  ctnStyle,
  ctnClassName,
  contentCtnStyle,
  contentCtnClassName,
  showdismissbtn,
  dismissBtnStyle,
  dismiss,
}) => {
  let hidemodalstyle = show ? {} : { display: "none" };
  return (
    <div
      className={`modal-ctn ${ctnClassName || ""}`}
      onClick={(event) => {
        if (background) dismiss && dismiss();
        event.stopPropagation();
      }}
      style={{
        ...ctnStyle,
        ...hidemodalstyle,
      }}
    >
      {showdismissbtn && (
        <span
          onClick={() => {
            dismiss && dismiss();
          }}
          className="material-symbols-outlined modal-cancel-btn"
          style={dismissBtnStyle}
        >
          cancel
        </span>
      )}
      <div
        className={`modal-ctnt-ctn ${contentCtnClassName || ""}`}
        style={contentCtnStyle}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
