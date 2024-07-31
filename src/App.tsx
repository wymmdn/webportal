import React from 'react';
import { Button, ConfigProvider, theme } from 'antd';
import { Link, useRoutes } from 'react-router-dom';
import routes from './router/routeConfig';
import '@/assets/css/test.less';

const App: React.FC = () => (
    <ConfigProvider
        theme={
            {
                // 1. 单独使用暗色算法
                // algorithm: theme.darkAlgorithm,
                // 2. 组合使用暗色算法与紧凑算法
                //algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
            }
        }
    >
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
    </ConfigProvider>
);

export default App;
