import React from 'react';
import './Card.css';

export default function Card(props) {
    const id = props.ticket.id;
    const tag = props.ticket.tag[0];
    const title = props.ticket.title;
    const user = props.user;
    const priority_icon = ["fa-solid fa-ellipsis", "fas fa-battery-empty", "fa-solid fa-battery-half", "fa-solid fa-battery-full", "fa-solid fa-exclamation"]
    const status_icon = {
        "Backlog": "fa-solid fa-layer-group",
        "Todo": "fa-regular fa-circle",
        "In progress": "fa-solid fa-clock",
        "Done": "fa-solid fa-circle-check",
        "Canceled": "fa-solid fa-circle-xmark"
    };

    function truncateTitle(title) {
        const maxLength = 100;
        return title.length > maxLength ? title.substring(0, maxLength) + '...' : title;
    }

    return (
        <div>
            <div className="card" title={title}>
                <div className="header">
                    {!props.groupByUser && (
                        <div className="id">{id}</div>
                    )}
                    {!props.groupByUser && (
                        <div className="profile-img">
                            <div className='name'>{user.name && user.name.charAt(0)} {user.name && user.name.length >= 13 && user.name.charAt(8)}</div>
                            {user.available ? (
                                <div className="dot green-dot"></div>
                            ) : (
                                <div className="dot fade-dot"></div>
                            )}
                        </div>
                    )}
                </div>
                <div className="title">
                    {!props.groupByStatus && (
                        <i className={status_icon[props.ticket.status]}></i>
                    )}
                    {truncateTitle(title)}
                </div>
                <div className="bottom">
                    {!props.groupByPriority && (
                        <i className={priority_icon[props.ticket.priority]}></i>
                    )}
                    {!props.groupByPriority && (
                        <div className="tag">
                            <div className="tag-dot"></div>
                            {tag}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
