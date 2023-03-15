import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Main from "./Main";
import Blog from "./Blog";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route key="/" path="/" element={<Main />} exact />
                <Route key="/blog" path="/blog" element={<Blog />} exact />
                <Route key="*" path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;