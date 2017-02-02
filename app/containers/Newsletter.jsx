import React from 'react';

class Newsletter extends React.Component{
  constructor(props){
    super(props);

    this.abide;
    this.state = {
      subscribeSuccess: false,
      subscribeError: false
    }

    let email = null;
  }

  componentDidMount(){
    this.abide = new Foundation.Abide($('#newsletter-signup-form'), { liveValidate: false });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.email.value.length > 0){
      this.form = $('#newsletter-signup-form');
      this.form.on('formvalid.zf.abide', () => {
        var data = {
          EMAIL: this.email.value
        }

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
            console.log(data);
            this.setState({
              subscribeSuccess: false,
              subscribeError: data['msg'].substring(4)
            });
          } else {
            // success
            this.setState({
              subscribeSuccess: true,
              subscribeError: false
            });
          }
        })
        .fail(function(jqXhr) {
          this.setState({
            subscribeSuccess: false,
            subscribeError: 'An error occured. Please contact <a href="mailto: me@julianjorgensen.com">Julian</a> if the issue persists.'
          });
          console.log('failed to register', jqXhr);
        });
      });
    }else{
      this.setState({
        subscribeError: "Please enter a valid email"
      });
    }
  }

  render() {

    return (
      <div id="newsletter">
        {/* newsletter signup form */}
        <form id="newsletter-signup-form" className={this.state.subscribeSuccess ? 'hide' : '' } onSubmit={this.handleSubmit.bind(this)} noValidate>
          <input type="email" placeholder="Your Email" ref={(input) => { this.email = input; }} />
          <input type="submit" value="Subscribe" className="button" />
        </form>

        <div id="newsletter-error" className={!this.state.subscribeError ? 'hide' : '' }>
          <small className="font-red">{this.state.subscribeError}</small>
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
