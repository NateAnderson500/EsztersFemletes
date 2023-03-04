

export default function Contact (){

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className="contact-container" id="contact">
            <h3> Contact Me!</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
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
            <button className="submit-btn" type="submit">Send Message</button>
            </form>
        </div>
    )
}