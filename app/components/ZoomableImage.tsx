"use client";

import React, { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import { FiZoomIn, FiX } from "react-icons/fi";
import { useLang } from "../context/LangContext";

interface ZoomableImageProps extends ImageProps {
  wrapperStyle?: React.CSSProperties;
  wrapperClassName?: string;
}

export default function ZoomableImage({ wrapperStyle, wrapperClassName, ...props }: ZoomableImageProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const { lang } = useLang();
  
  const hoverText = lang === "id" ? "Ketuk untuk memperbesar" : "Click to expand";

  useEffect(() => {
    if (isZoomed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isZoomed]);

  return (
    <>
      <div 
        className={`group cursor-pointer relative overflow-hidden ${wrapperClassName || ""}`} 
        style={wrapperStyle}
        onClick={() => setIsZoomed(true)}
      >
        <Image {...props} />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <div className="flex flex-col items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <FiZoomIn size={32} className="text-white mb-2" />
            <span className="text-white font-medium tracking-wide text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
              {hoverText}
            </span>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setIsZoomed(false)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/20 hover:bg-black/50 p-3 rounded-full transition-all z-10"
            onClick={(e) => { e.stopPropagation(); setIsZoomed(false); }}
          >
            <FiX size={28} />
          </button>
          
          <div 
            className="relative w-full h-full max-w-[95vw] max-h-[95vh] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()} 
          >
            <Image 
              src={props.src}
              alt={props.alt || "Zoomed image"}
              width={props.width || 1920}
              height={props.height || 1080}
              style={{ objectFit: "contain", maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto" }}
              className="rounded-lg shadow-2xl"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
