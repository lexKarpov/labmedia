import React from 'react'
import './Footer.css'
import { Telegram } from 'react-bootstrap-icons'
import { Whatsapp } from 'react-bootstrap-icons'

export default function Footer (){
  const date = new Date().getFullYear()
  return (
    <footer className="footer">
      <ul className="footer__social">
        <li className="footer__item-wrapper">
          <p className="footer__author">© {date} Карпов А.</p>
        </li>
        <li className="footer__item-wrapper">
          <a href="https://t.me/llyoly" className="footer__item">
            <Telegram
              color="#0CB4F1"
              size="20"
            />
          </a>
        </li>
        <li className="footer__item-wrapper">
          <a href="https://wa.me/+79998023479" className="footer__item">
            <Whatsapp
              color="green"
              size="20"
            />
          </a>
        </li>
      </ul>
    </footer>
  )
}