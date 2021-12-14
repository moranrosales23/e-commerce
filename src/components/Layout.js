import NavbarPage from "./NavbarPage"

function Layout(props) {
  return (
    <>
      <NavbarPage />
      { props.children }
      
    </>
  )
}

export default Layout