import React from 'react';

class Newsletter extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      subscribeSuccess: false,
      subscribeError: false
    }

    let email = null;
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log('handling submit');

    var data = {
      EMAIL: this.email.value
    }

    // console.log('trying to register with email: ', this.email.value);

    $.ajax({
      type: 'POST',
      url: '//koichihealing.us8.list-manage.com/subscribe/post-json?u=c616a68c09aae3ea3e536552e&amp;id=7c8bb23449&c=?',
      data: data,
      dataType: 'jsonp',
      contentType: "application/json; charset=utf-8"
    })
    .done((data) => {
      if (data['result'] != "success") {
        // error
        this.setState({
          subscribeSuccess: false,
          subscribeError: data['msg']
        });
      } else {
        // success
        this.setState({
          subscribeSuccess: true,
          subscribeError: false
        });
        console.log('success: ', data);
      }
    })
    .fail(function(jqXhr) {
      this.setState({
        subscribeSuccess: false,
        subscribeError: 'An error occured. Please contact <a href="mailto: me@julianjorgensen.com">Julian</a> if the issue persists.'
      });
      console.log('failed to register', jqXhr);
    });
  }

  render() {

    return (
      <div className="newsletter">
        <div id="newsletter-signup" className={this.state.subscribeSuccess ? 'hide' : '' }>
          {/* newsletter signup form */}
          <form onSubmit={this.handleSubmit.bind(this)} noValidate>
            <input type="email" ref={(input) => { this.email = input; }} />
            <input type="submit" value="Subscribe" className="button" />
          </form>
        </div>

        <div id="newsletter-error" className={!this.state.subscribeError ? 'hide' : '' }>
          <h2 className="font-red">{this.state.subscribeError}</h2>
        </div>

        <div id="newsletter-confirmation" className={!this.state.subscribeSuccess ? 'hide' : '' }>
          <h2 className="font-green">Thank you!</h2>
          <h4>To complete your subscription,<br />please click the link in the email we just sent you.</h4>
        </div>
      </div>
    )
  }
}

module.exports = Newsletter;
