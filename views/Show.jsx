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
        Name {sticker.name}
        Description {sticker.descripton}
        Price {sticker.price}
        Count in Stock {sticker.countInStock}
        Protective Coating
        {sticker.protectiveCoating?
          ' Protective Coating Applied':
          ' No Protective Coating'}
        Image {sticker.imageUrl}
      </DefaultLayout>
    )
  }
}

module.exports = Show;
