

export default function EventCard(props) {

    return (
        <div className="event-card-container">
            <img src={props.img} alt="Event-card-img" className="event-card-img"/>
            <div className="event-text">
                <div className="event-name">
                    <h3>{props.name} - </h3>
                    <h3>{props.location}</h3>
                </div>
                <p>{props.description}</p>
                <h2>{props.time}</h2>
            </div>
        </div>
    )
}