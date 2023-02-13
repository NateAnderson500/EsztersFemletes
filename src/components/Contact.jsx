

export default function Contact (){
    return (
        <div className="contact-container" id="contact">
            <div className="contact-form">
            <input 
            className="input-small"
            type="text" 
            placeholder="Name" 
            name="name" 
            />
            <input 
            className="input-small"
            type="text" 
            placeholder="Email" 
            name="email" 
            />
            <input 
            className="input-large"
            type="text" 
            placeholder="Message" 
            name="message" 
            />
            <button className="submit" type="submit">Send Message</button>
            </div>
        </div>
    )
}