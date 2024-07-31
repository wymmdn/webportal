import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import '@/assets/css/searchBox.css';

const characters: React.FC = () => {
    return (
        <div className="ancient-search-box">
            <Input.Group compact>
                <Input
                    placeholder="搜索角色..."
                    className="ancient-input"
                    style={{ border: 'none' }} // 移除默认边框
                />
                <Button icon={<SearchOutlined />} type="primary" className="ancient-button" />
            </Input.Group>
        </div>
    );
};

export default characters;
