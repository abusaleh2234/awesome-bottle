
import { Suspense } from 'react'
import './App.css'
import Bottles from './component/bottles/Bottles'
import Products from './component/Products/Products'

const bottlesPromise  = fetch("bottle.json").then(res => res.json())
const productsPromise = fetch("https://dummyjson.com/products").then(res => res.json())
function App() {

  return (
    <>
    {/* <Suspense fallback={<h3>Bottles are loading ...</h3>}>
      <Bottles bottlesPromise={bottlesPromise}></Bottles>
    </Suspense> */}
    <Suspense fallback={<h3>Product is Loading ...</h3>}>
      <Products productsPromise={productsPromise}></Products>
    </Suspense>
    </>
  )
}

export default App
