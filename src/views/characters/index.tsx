import { FC } from 'react';
import { Button } from 'antd';

interface IProps {
    name?: string;
    age?: number;
}
const defaultProps: IProps = {
    name: 'character',
    age: 0,
};

const characters: FC<IProps> = (props = defaultProps) => {
    return <Button type="primary">character page </Button>;
};

export default characters;
