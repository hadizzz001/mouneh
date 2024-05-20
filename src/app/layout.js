

// app/layout.js

import './globals.css';
import { CartProvider } from './context/CartContext'; 
import { Suspense } from "react";

export default function RootLayout({ children }) {
  return (
    <html className="no-js no-touch supports-no-cookies" lang="en">
      <head>
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="en" httpEquiv="Content-Language" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
        <meta content="max-image-preview:large" name="robots" />
        <title>Mouneh w Zeytouneh</title>
        <meta
          content="Our passion for preserving the timeless traditions of Lebanese cuisine is infused into every jar of Labneh, every jar of olives, every spoonful of jams, and every drop of fragrant flower water we meticulously craft."
          name="description"
        />
        <meta content="MounehwZeytouneh" name="keywords" />
        <meta content="Mouneh w Zeytouneh" property="og:title" />
        <meta content="https://bellroy.com/collection/slim-your-wallet" property="og:url" />
        <meta content="website" property="og:type" />
        <meta
          content="Our passion for preserving the timeless traditions of Lebanese cuisine is infused into every jar of Labneh, every jar of olives, every spoonful of jams, and every drop of fragrant flower water we meticulously craft."
          property="og:description"
        />
        <link rel="icon" href="icons/icon.ico" sizes="any" />
        <meta content="icons/logo.jpg" property="og:image" />
        <link href="icons/icon.png" rel="apple-touch-icon" sizes="180x180" />
        <link href="icons/icon.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="icons/icon.png" rel="icon" sizes="16x16" type="image/png" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta content="#ffffff" name="theme-color" />
        <style
  dangerouslySetInnerHTML={{
    __html:
      "\n  .HtmlProductAddToCart {\n    display: block;\n    border: 0;\n    border-radius: 4px;\n    background-color: #253f10;\n    color: #fff;\n    text-transform: uppercase;\n    align-items: center;\n    text-align: center;\n    width: 100%;\n    height: 42px;\n    line-height: 42px;\n    font-family: Lato, sans-serif;\n    -webkit-font-smoothing: antialiased;\n    font-weight: 700;\n    font-size: 16px;\n    letter-spacing: 2px;\n    outline: none;\n    cursor: pointer;\n    box-shadow: 0 27px 15px -17px rgba(0, 0, 0, .3), 0 2px 4px rgba(0, 0, 0, .3);\n    transition: background-color .2s ease, box-shadow .2s ease;\n}\n"
  }}
/>

      </head>
      <body className="bg-primary">
      <Suspense>
        <CartProvider>
          {children}
        </CartProvider>
        </Suspense>
      </body>
    </html>
  );
}
