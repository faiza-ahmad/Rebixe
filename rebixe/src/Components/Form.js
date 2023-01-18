function From() {
    return ( <>
        <div className="contact">
        <div className="left">
        
        </div>
        <div className="right">
            <form>
             <label>Name*</label> <br/>
             <input type="text" placeholder="Enter Your Name" />
             <label>Email*</label>
             <input type="email" placeholder="Enter Your Email"/>
             <label>Mobile Number*</label><br/>
             <input type="number" placeholder="Enter Your Mobile Number"/>
             <button>Register Now</button>
            </form>
            </div>
        </div>
    </> );
}

export default From;