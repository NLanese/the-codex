import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';


export const ODef = ({
    text, modalContent
}) => {

    // State
    const [open, setOpen] = useState(false);
    const modalRef = useRef(null);
    const textRef = useRef(null);

    /////////////////
    // Use Effects //
    /////////////////

    // Adds Listener to page to have Modal Closed when outside click detected
    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    //////////////////////
    // Position Handler //
    //////////////////////
    const getModalPosition = () => {
        if (textRef.current) {
            const rect = textRef.current.getBoundingClientRect();
            return {
                top: rect.top + window.scrollY,    // Account for scroll position
                left: rect.left + rect.width + 5,   // Position to the right of the text with some margin
            };
        }
        return { top: 0, left: 0 };  // Default if no element is found
    };
    

    /////////////////
    // Main Return //
    /////////////////
    const { top, left } = getModalPosition();
    return (
        <span className="relative inline-block">
          <span 
          style={{fontWeight: 600, color: 'blue'}} 
          onClick={() => setOpen(!open)}
          ref={textRef}
          >
            <strong>{(" " + text + " ")}</strong>
        </span>
           {open && (
            <div
            style={{  position: 'absolute', zIndex: 500,
                      top: (top - 120), left: left,
                      maxWidth: 500, height: 'auto',
                      backgroundColor: 'lightgrey',
                      borderRadius: 15,
                      boxShadow:'10px 4px 10px 4px rgba(00, 00, 00, 0.3)',
            }}
            ref={modalRef}
          >
              {modalContent}
            </div>
          )}
        </span>
    );

}