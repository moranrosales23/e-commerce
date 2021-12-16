import { useState, useEffect } from "react";

import CardTemplate from "./CardTemplate";
import axios from 'axios'

function CardList() {
  const [ info, setInfo] = useState([])

  useEffect(()=>{
    // axios
    //   .get("https://fakestoreapi.com/products")
    //   .then((result) => {
    //     console.log(result.data)
    //     setInfo(result.data)
    //   })

    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then((result) => {
          console.log(result)
          setInfo(result)
        })
  }, [])

  return (
    <>
      { info.map((element)=> (
          <CardTemplate key={element.id} imageUrl={element.image} id={element.id} />
        ))
      }
    </>
    // <h1>Hola</h1>
  )
}

export default CardList;