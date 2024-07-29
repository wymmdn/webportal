import { FC } from 'react';
import { Button } from 'antd';

interface IProps {
    name?: string;
    age?: number;
}
const defaultProps: IProps = {
    name: 'item',
    age: 0,
};

const items: FC<IProps> = (props = defaultProps) => {
    return <Button type="primary">item page </Button>;
};

export default items;
