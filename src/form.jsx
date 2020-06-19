import React from 'react';


function Form(props){
    return(

<div className="container">
  <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input id="first_name" type="text" className="validate" required />
          <label htmlFor="first_name">First Name</label>
        </div>
        <div className="input-field col s6">
          <input id="last_name" type="text" className="validate" required />
          <label htmlFor="last_name">Last Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="address" type="text" className="validate" required />
          <label htmlFor="address">Complete Address</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input id="icon_telephone" type="number" className="validate" required />
          <label htmlFor="icon_telephone">Telephone</label>
        </div>
        <div className="input-field col s6">
          <input id="pin-code" type="number" className="validate" required />
          <label htmlFor="pin-code">Pin-code</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input id="age" type="number" className="validate" required />
          <label htmlFor="age">Age</label>
        </div>
        <div className="input-field col s6">
          <input id="email" type="email" className="validate" required />
          <label htmlFor="email">Email</label>
        </div>
      </div>
      <div className="row">
        <p className="col s6">
          <label className="col s12 ">
            <input className=" with-gap" name="group1" type="radio" required />
            <span>Male</span>
          </label>
          <label className="col s12 ">
            <input className=" with-gap" name="group1" type="radio" required />
            <span>Female</span>
          </label>
        </p>
        <p className="col s6">
          <label className="col s12 ">
            <input className=" with-gap" name="group2" type="radio" required />
            <span>For Testing</span>
          </label>
          <label className="col s12 ">
            <input className=" with-gap" name="group2" type="radio" required />
            <span>For vacine</span>
          </label>
        </p>
      </div>
      <button className="btn waves-effect waves-light" type="submit" name="action">Submit
        <i className="material-icons right ">send</i>
      </button>
      <div>
        {/* Trigger the modal with a button */}
        <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
        {/* Modal */}
        <div id="myModal" className="modal fade" role="dialog">
          <div className="modal-dialog">
            {/* Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
                <h4 className="modal-title">Modal Header</h4>
              </div>
              <div className="modal-body">
                <p>Some text in the modal.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </form>
  </div>
</div>

    )
}


export default Form