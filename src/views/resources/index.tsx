import { FC } from 'react';
import { Button } from 'antd';
import { Link, Outlet } from 'react-router-dom';

interface IProps {
    name?: string;
    age?: number;
}
const defaultProps: IProps = {
    name: 'resource',
    age: 0,
};

const resources: FC<IProps> = (props = defaultProps) => {
    return (
        <div>
            <div>
                <Link to="/resources/model">模型 </Link>
                <Link to="/resources/radio">音频 </Link>
                <Link to="/resources/picture">图像 </Link>
                <Link to="/resources/texture">文本 </Link>
            </div>
            <Outlet />
        </div>
    );
};

export default resources;
