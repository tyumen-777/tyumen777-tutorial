import React from 'react';

function montoToStr(num) {
    return num > 12 || num < 1
        ? null
        : 'январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь'.split(',')[
        num - 1
            ];
}

const divStyle = {
    wrapper: {
        display: "flex",
        justifyContent: "center"
    },
    div: {
        padding: "15px",
        border: "5px solid lightGray",
        borderRadius: "10px"
    }
}

const Profile = (props) => {
    const {name, registredAt} = props;

    const day = registredAt.getDay();
    const month = montoToStr(registredAt.getMonth());
    const year = registredAt.getFullYear()

    return (
        <div style={divStyle.wrapper}>
            <div style={divStyle.div}>
                <h2>Привет, <span>{name}</span></h2>
                <p>Дата регистрации: {day} {month} {year}</p>
            </div>
        </div>
    );
};

export default Profile;