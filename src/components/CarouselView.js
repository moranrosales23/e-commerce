import React from 'react';
import { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

import getEvenElement from '../utils/getEvenElement';


function CarouselView({ images }) {
  const [form, setForm] = useState({
    zipCode: "",
    name: "",
    address: "",
  })

  useEffect(()=> { 

  }, [])

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setForm({ ...form, [name]: value})
  }

  return (
    
    <>
      <Carousel>
        { images.map((element, index) => (  //[0, 1, 2, 3]
           getEvenElement(index) && (   
            <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={element}
              alt="First slide"
            />
          </Carousel.Item>
           )) 
          
        )}
      </Carousel>
      <input 
        className="password-input" 
        placeholder="Ingrese aqui la direccion"
        name="address"
        type="text"
        value={form.address}
        onChange={handleChange}
      />
      <input 
        className="password-input" 
        placeholder="Ingrese aqui la direccion"
        name="name"
        type="text"
        value={form.name}
        onChange={handleChange}
      />
      <input 
        value={form.zipCode}
        className="password-input" 
        placeholder="Ingrese aqui la direccion"
        name="zipCode"
        type="text"
        onChange={handleChange}
      />
    </>
  );
}

export default CarouselView