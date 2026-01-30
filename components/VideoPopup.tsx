"use client";

import { useState } from "react";

const VIMEO_VIDEO_ID = "93951774";

export function VideoPopup() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="fh5co-video fh5co-bg"
        style={{ backgroundImage: "url(/images/img_bg_3.jpg)" }}
      >
        <a
          href="#"
          className="popup-vimeo"
          onClick={(e) => {
            e.preventDefault();
            setOpen(true);
          }}
        >
          <i className="icon-video2" />
        </a>
        <div className="overlay" />
      </div>
      {open && (
        <div
          className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
          style={{ position: "fixed", inset: 0, zIndex: 9999 }}
          onClick={() => setOpen(false)}
        >
          <div className="mfp-container mfp-s-ready mfp-iframe-holder">
            <div className="mfp-content" onClick={(e) => e.stopPropagation()}>
              <div className="mfp-iframe-scaler">
                <button
                  type="button"
                  className="mfp-close"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                >
                  ×
                </button>
                <iframe
                  title="Vimeo"
                  src={`https://player.vimeo.com/video/${VIMEO_VIDEO_ID}`}
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="mfp-bg" onClick={() => setOpen(false)} />
        </div>
      )}
    </>
  );
}
