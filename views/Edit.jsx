const React = require('react');
const DefaultLayout = require('./layouts/Default.jsx');

class Edit extends React.Component {
  render() {
    return(
      <DefaultLayout title="Edit Page">
      <form method="POST" action={`/stickers/${this.props.sticker._id}?_method=PUT`}>
      Name: <input type="text" name="name" defaultValue={this.props.sticker.name}/><br/>
      Color: <input type="text" name="color"  defaultValue={this.props.sticker.color}/><br/>
      Protective Coating:
        { this.props.sticker.protectiveCoating
          ? <input type="checkbox" name="protectiveCoating" defaultChecked />
          : <input type="checkbox" name="protectiveCoating"/>
        }
      <br/>
      <input type="submit" value="Submit Changes"/>
      </form>
      </DefaultLayout>
    )
  }
}

module.exports = Edit;
