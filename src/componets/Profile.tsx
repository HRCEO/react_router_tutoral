import React from 'react';

interface Person{
    name: string;
    description: string;
}

const data:{ velopert:Person, gildong:Person} ={
    velopert:{
        name : '이성일',
        description:'리액트를 좋아하는 개발자'n n
    },
    gildong:{
        name : '홍길동',
        description: '고전 소설 홍길동전의 주인공'
    }
}

const Profile = ({match}) => {

    const {userName} = match.params;

    const profile:Person = data[userName]

    if()

    return (
        <div>

        </div>
    );
};

export default Profile;