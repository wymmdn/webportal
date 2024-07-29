import React from 'react';
import { Button } from 'antd';
import { Link, useRoutes } from 'react-router-dom';
import routes from './router/routeConfig';

const App: React.FC = () => (
    <div className="App">
        <div className="nav">
            <Link to="/hello">欢迎 </Link>
            <Link to="/characters">角色 </Link>
            <Link to="/items">物品 </Link>
            <Link to="/resources">资源 </Link>
            <Link to="/worldStory">世界线 </Link>
        </div>
        <div>{useRoutes(routes)}</div>
    </div>
);

export default App;
