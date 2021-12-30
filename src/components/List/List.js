import React from 'react';
import './List.css'
import cn from 'classnames';

const List = () => {
    const [activeId, setActiveId] = React.useState(null)

    const handleClick = (id) => {
        if (activeId === id) {
            setActiveId(null)
        } else {
            setActiveId(id)
        }
    }

    const tabs = [
        {
            id: 1,
            title: 'Сколько всего мест в доме?',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quos nemo corporis velit culpa veritatis asperiores deserunt, commodi ipsum at? Esse quibusdam dignissimos recusandae enim. Eaque expeditaeum provident totam!',
        },
        {
            id: 2,
            title: 'Самая дорогая квартира?',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fuga deserunt aliquid voluptatum ad, molestiae dicta officiis animi ummollitia, reiciendis a cum ratione veritatis cupiditate voluptatem.Consectetur, exercitationem magnam.',
        },
        {
            id: 3,
            title: 'Могу ли я отменить бронирование?',
            description: 'Да, вы можете отменить забронированную квартиру в течение 3 дней.',
        },
        {
            id: 4,
            title: 'Можно ли купить квартиру?',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est commodi itaque ratione voluptatem dolores iusto aperiam adipisci incidunt perspiciatis ullam! Repellat accusamus rerum excepturi minus delectus? Consequatur libero nemo alias.',
        },
    ];

    return (
        <div id="app">
            <div className="app-container">
                <h1 className="app-title">FAQ</h1>
                <div className="app-tabs">
                    {
                        tabs.map((data) => (
                            <div className={cn('tab', {
                                ['active']: activeId === data.id
                            })} key={data.id}>
                                <input id={data.id} type="checkbox" name="tabs"/>
                                <label htmlFor="tab-one" onClick={()=> handleClick(data.id)}>{data.title}</label>
                                <div className="tab-content">
                                    <p>
                                        {data.description}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default List;