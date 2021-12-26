import React, {Component} from 'react';

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

class ProfileClass extends Component {

    render() {
        return (
                <div style={divStyle.wrapper}>
                    <div style={divStyle.div}>
                        <h2>Привет, <span>{this.props.name}</span></h2>
                        <p>Дата регистрации: {this.props.registredAt.getDay()} {montoToStr(this.props.registredAt.getMonth())} {this.props.registredAt.getFullYear()}</p>
                    </div>
                </div>
        );
    }
}

export default ProfileClass;