const ProtectedRoute = ({element:Element, isAuthenticated, ...rest}) => {

    return (
        <Route path="/private" element={<PrivatePage/>}/>
    )
}

export default ProtectedRoute;