import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import { FC } from 'react'

const Layout:FC<any> = ({children}) => {
  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default Layout
