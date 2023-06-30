import React from 'react'
import { useEffect, useState } from 'react';
import './sidebar.scss'

function ShowSidebar() {
  let sidebar = document.getElementById('sidebar');
  let sidebar_opner = document.getElementById('test');
  sidebar_opner.style.display = 'none';
  sidebar.classList.remove('inactive');
  sidebar.style.display = 'inline-block'
  sidebar.classList.add('active');
}
function HideSidebar() {
  let sidebar = document.getElementById('sidebar');
  sidebar.style.display = 'none';
  let sidebar_opner = document.getElementById('test');
  sidebar_opner.style.display = 'block';
}
function CloseSidebar() {
  let sidebar = document.getElementById('sidebar');
  sidebar.classList.add('inactive');
  setTimeout(() => {
    HideSidebar()
  }, 500);
}

export default function Sidebar() {

  useEffect(() => {
    function handleScroll() {
      const element = document.getElementById('sidebar');
      if (element) {
        if (document.documentElement.scrollTop > 110) {
          element.style.position = 'fixed';
          element.style.top = "0"
          element.style.right = "0"
        } else {
          element.style.position = 'absolute';
          element.style.right = "-10px"
        }
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <div className="sidebar-container">
      <div className="sidebar" id='sidebar'>
        <div className="close-btn">
          <i className="fa fa-times" onClick={() => CloseSidebar()}></i>
        </div>
        <h3>Categories</h3>
        <ul>
          <li>Romance</li>
          <li>Slice of Life</li>
          <li>Adventure</li>
          <li>Comedy</li>
          <li>Action</li>
          <li>Drama</li>
          <li>Fantasy</li>
          <li>Supernatural</li>
          <li>Magic</li>
          <li>Mystery</li>
          <li>Horror</li>
          <li>Isekai</li>
          <li>Psychological</li>
          <li>Sci-Fi</li>
        </ul>
      </div>
      <i id="test" className="fa fa-bars" onClick={() => ShowSidebar()}></i>
    </div>
  )
}
