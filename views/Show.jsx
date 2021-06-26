const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Show extends React.Component {
  render() {
    //keep it above the return
    const Sticker = this.props.Sticker;
    //keep it above the return
    return (
      <DefaultLayout title={`${Sticker.name.toUpperCase()} Show Page`}>
      {/* a comment in jsx */}
        <h1>Show Page</h1>
        The {Sticker.name} is {Sticker.color}
        {Sticker.readyToEat?
          ' Protective Coating Applied':
          ' No Protective Coating'}
      </DefaultLayout>
    )
  }
}

module.exports = Show;
