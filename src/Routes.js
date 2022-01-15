import React from 'react';
import { Route, Routes } from 'react-router-dom'
import PostById from '../src/components/pages/Posts'
import Posts from '../src/components/views/posts/Posts';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//     return <Route {...rest} render={(props) => {
//         return localStorage.getItem('token') ? <Component {...props} /> : <Redirect to="/" />
//     }} />

// }

// const Routing = [
//     {path: '/', element: <Posts/>},
//     {path: '/post', element: <PostById/>}
// ]

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Posts />} />
                <Route path='/post/:id' element={<PostById />} />
            </Routes>
        </div>
    )
}

export default Routing