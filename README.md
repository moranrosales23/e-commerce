# E-commerce exercise

Crear conexiones hacia el api Fake store: [Link](https://fakestoreapi.com/docs)
0. Aplicar los cambios solicitados de rogger al PR [https://github.com/leoneloliveros/e-commerce/pull/2](https://github.com/leoneloliveros/e-commerce/pull/2) 
1. Listar las categorias del API en la seccion de categorias del e-commerce [Get All categories](https://fakestoreapi.com/products/categories)
2. Al darle click a uno de los elementos de las categorias, cambiar el componente que lista los productos y mostrar los productos correspondientes a la categoría seleccionada.
3. Usar Query params para ordenar los productos y agregar un boton que haga ese cambio en los querys params, para posteriormente hacer el llamado al [API](https://fakestoreapi.com/docs#p-sort)
4. Crear un boton en el navbar de crear nuevo producto, que redireccione a una nueva página a un formulario de creacion donde debe tener inputs de "title, price, description, image, category". Al darle submit se debe hacer un llamado al [API](https://fakestoreapi.com/docs#p-new)
5. Crear una nueva ruta con la vista de actualizacion de producto y hacer el llamado al correspondiente API
6. Arreglar los modales, que rendericen la informacion correcta.
7. Agregar una página de Not found cuando se agregue un link que no existe
8. Desplegar en Netlify
