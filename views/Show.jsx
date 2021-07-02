const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Show extends React.Component {
  render() {
    //keep it above the return
    const sticker = this.props.sticker;
    //keep it above the return
    return (
      <DefaultLayout title={`${sticker.name.toUpperCase()} Show Page`}>
      {/* a comment in jsx */}
        <h1>Show Page</h1>
        The {sticker.name} is {sticker.color}
        {sticker.protectiveCoating?
          ' Protective Coating Applied':
          ' No Protective Coating'}
      </DefaultLayout>
    )
  }
}

module.exports = Show;
