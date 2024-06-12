
//import { useStaticQuery, graphql } from "gatsby"


import "./layout.css"
import Searchbar from "./searchbar"



  /* const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `) */

  




import React from 'react'

export default function Layout({children}: {children:JSX.Element}) {
  return (
    <div className="h-[100%]">
      
      
     <> {children}</>
      
      <footer className="h-28 sticky bottom-0   w-[100%] flex justify-around bg-blue-900 ">
        <button className="text-white">Su di noi</button>
        <button className="text-white">Guadagna con noi</button>
        <button className="text-white">Metodo di pagamento di Amazon</button>
        <button className="text-white">Bisogno di aiuto?</button>
          </footer>
    </div>
  )
}
