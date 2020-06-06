import React from 'react';

interface Props {
    currentUser?: string;
}

const Navigation: React.FC<Props> = (props: Props) => (
    <ul>
        <li style={{float: 'left' }} className="logo"><a href="/home">paperless menus</a></li>
        <li><a href="#" className="active">Home</a></li>
        <li><a href="#">Restaurants</a></li>
        <li><a href="#">Profile</a></li>
    </ul>
);

Navigation.defaultProps = {
    currentUser: 'Tester',
};

export default Navigation;