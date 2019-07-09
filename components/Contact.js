var Contact = React.createClass({
    propTypes: {
      item: React.PropTypes.object.isRequired,
    },
  
    render: function() {
      return (
        <div className = {'contactItem'}>

          <img className = {'contactImage'} src = {'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'}/>

          <div className = { 'wrapper'}>

            <p className = {'contactLabel'}>
              Imię: {this.props.item.firstName}
            </p>

            <p className = {'contactLabel'}>
              Nazwisko: {this.props.item.lastName}
            </p>

            <a href={'mailto:' + this.props.item.email}>
              {this.props.item.email}
            </a>

          </div>
        </div>
      );
    }
  });