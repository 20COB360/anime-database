import React, { useEffect } from 'react';
import './scroll-to-top.scss';

function ScrollTop() {
  document.documentElement.scrollTop = 0;
}

export default function ScrollToTop() {
  useEffect(() => {
    function handleScroll() {
      const scroll_element = document.getElementById('scroll-top');
      if (scroll_element) {
        if (document.documentElement.scrollTop > 500) {
          scroll_element.style.display = 'flex';
        } else {
          scroll_element.style.display = 'none';
        }
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="element" id="scroll-top" onClick={ScrollTop}>
      <i className="fa fa-arrow-up"></i>
    </div>
  );
}
