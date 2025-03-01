import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';


export const ODef = ({
    text, modalContent
}) => {

    // State
    const [open, setOpen] = useState(false);
    const modalRef = useRef(null);

    console.log("ChatGPT is retarded and should go fuck itself")

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

    return (
        <span className="relative inline-block">
          <span style={{fontWeight: 600, color: 'blue'}} onClick={() => setOpen(!open)}>{(" " + text + " ")} </span>
           {open && (
            <div
              style={{position: 'absolute', width: 100, height: 100, backgroundColor: 'green'}}
              ref={modalRef}
            >
              {modalContent}
            </div>
          )}
        </span>
    );

}