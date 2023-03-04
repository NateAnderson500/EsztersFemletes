import EventCard from './EventCard'
import {EventData} from '../data/EventData'

export default function EventResults(){

    return (
        <div className="event-results-container" id="event-results">
                {EventData.map((data, key) => {
                    return (
                        <EventCard 
                        key = {key}
                        img = {data.img}
                        name = {data.name}
                        location = {data.location}
                        description = {data.description}
                        time = {data.time}
                        />
                    )
                })};
        </div>
    )
}