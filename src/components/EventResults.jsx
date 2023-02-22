import EventCard from './EventCard'

export default function EventResults(){
    return (
        <div className="event-results-container" id="event-results">
                <EventCard 
                img="assets/home-banner.jpg"
                name="Ironman"
                location="New York"
                description="jdajpowa dawpodjwapodwp djoawjdodapowj dwapjdpojadjo adwpjodpaowdpo dawopjdwapojdw"
                time="12:12"
                />
                <EventCard 
                img="assets/home-banner.jpg"
                name="Ironman"
                location="New York"
                description="jdajpowa dawpodjwapodwp djoawjdodapowj dwapjdpojadjo adwpjodpaowdpo dawopjdwapojdw"
                time="12:12"/>
                <EventCard 
                img="assets/home-banner.jpg"
                name="Ironman"
                location="New York"
                description="jdajpowa dawpodjwapodwp djoawjdodapowj dwapjdpojadjo adwpjodpaowdpo dawopjdwapojdw"
                time="12:12"/>
        </div>
    )
}