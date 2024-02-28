const Application = () => {
    return (
      <>
      <h1>job application</h1>
      <h2>section 1</h2>
      <p>All fields are mandatory</p>
      <img src="/" alt="a person with laptop" />
      <span title="close">X</span>
      <div data-testid="custom-element">
          Custom HTML element
      </div>
      <form action="">
          <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Fullname" value="sujith"/>
          </div>
          <div>
              <label htmlFor="bio">Bio</label>
              <textarea name="bio" id="bio" />
          </div>
          <div>
              <label htmlFor="job-location">Job Location</label>
              <select id="job-location">
                  <option value="">select a country</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="IN">India</option>
                  <option value="Au">Australia</option>
                  <option value="CA">Canada</option>
              </select>
          </div>
          <div>
              <label >
                  <input type="checkbox" name="" id="terms" />I agree to the terms and conditions
              </label>
          </div>
          <button>submit</button>
      </form>
      </>
    )
  }
  
  export default Application