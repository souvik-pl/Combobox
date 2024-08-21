import { useEffect } from "react";

function useOutsideClick(elementRef: React.RefObject<HTMLDivElement>, handler: () => void) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (elementRef.current && !elementRef.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
}

export default useOutsideClick;
