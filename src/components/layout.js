import Header from './header';
import Layout from './layout';

export default function layout({children}) {
  return (
    <>

    <Header/>  
    {children}

   
    </>
  )
}
