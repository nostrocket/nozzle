import { ReactNode } from 'react'

import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

type Props = {
  children?: ReactNode
}

function MainLayout({ children }: Props) {
  return (
    <>
      <Header></Header>
      <main>
        {children}
      </main>
      <Footer></Footer>
    </>
  )
}

export default MainLayout
