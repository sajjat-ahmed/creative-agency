import React from 'react';

const Contact = () => {
  return (
    <div style={{ background: "#FBD062" }}>
      <div style={{ height: '520px' }} className="row pt-5 offset-md-1">
        <div className="col-md-4 col-sm-6 col-12">
          <h2 className="font-weight-bold">Let us handle your <br /> project, professionally.</h2>
          <p><small>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</small></p>
        </div>
        <div className="col-md-6 col-sm-6 col-12">
          <form>
            <div class="form-group">
              <input type="text" class="form-control" name="email" placeholder="Your email address" />
            </div>
            <div class="form-group">
              <input type="text" class="form-control" name="name" placeholder="Your name / company’s name" />
            </div>
            <div class="form-group">
              <textarea class="form-control" placeholder="Your message" name="message" rows="9"></textarea>
            </div>
            <button className="btn btn-dark text-white pr-4 pl-4"> Send</button>
          </form>
        </div>
        
      </div>
      <p className="text-center pb-3">copyright Orange labs {(new Date()).getFullYear()}</p>
    </div>
  );
};

export default Contact;