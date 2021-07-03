const React = require('react');
const DefaultLayout = require('./layouts/Default.jsx');

class Edit extends React.Component {
  render() {
    return(
      <DefaultLayout title="Edit Page">
      <form method="POST" action={`/stickers/${this.props.sticker._id}?_method=PUT`}>
      Name: <input type="text" name="name" defaultValue={this.props.sticker.name}/><br/>
      Description: <input type="text" name="descripton"  defaultValue={this.props.sticker.descripton}/><br/>
      Price: <input type="number" name="price"  defaultValue={this.props.sticker.descripton}/><br/>
      Count In Stock: <input type="number" name="countInStock"  defaultValue={this.props.sticker.descripton}/><br/>
      Protective Coating:
        { this.props.sticker.protectiveCoating
          ? <input type="checkbox" name="protectiveCoating" defaultChecked />
          : <input type="checkbox" name="protectiveCoating"/>
        }
      <br/>
      imageUrl: <input type="text" name="imageUrl"  defaultValue={this.props.sticker.descripton}/><br/>
      <input type="submit" value="Submit Changes"/>
      </form>
      </DefaultLayout>
    )
  }
}

module.exports = Edit;
