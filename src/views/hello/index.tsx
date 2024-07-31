import { FC } from 'react';
import { Button } from 'antd';
import '@/assets/css/test.less';

interface IProps {
    name?: string;
    age?: number;
}
const defaultProps: IProps = {
    name: 'hello',
    age: 0,
};

const hello: FC<IProps> = (props = defaultProps) => {
    return <Button>hello world!</Button>;
};

export default hello;
