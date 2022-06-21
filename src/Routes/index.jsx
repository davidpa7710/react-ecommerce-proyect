import { Routes, Route } from 'react-router-dom'
import { Home, Login, Signup, Logout, Mens, Womens, ShopItem  } from '../pages/index'


const RoutesIndex = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/mens' element={<Mens />} />
            <Route path='/womens' element={<Womens />} />
            <Route path='/shopitem' element={<ShopItem />} />
            

        </Routes>
    )
}

export default RoutesIndex
