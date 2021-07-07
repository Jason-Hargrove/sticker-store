const React = require('react');
const DefaultLayout = require('./layouts/Default.jsx');

class Edit extends React.Component {
  render() {

    const sticker = this.props.sticker;

    return(
      <DefaultLayout>

      <head>
        <meta charSet="utf-8" />
        <title>{this.props.title}</title>
        <link rel="stylesheet" href="/css/edit.css" />
      </head>

        <div className="products__box">

          <form method="POST" action={`/stickers/${this.props.sticker._id}?_method=PUT`}>

            <label>Image:</label>
            <input type="text" name="imageUrl" defaultValue={this.props.sticker.imageUrl} />

            <label>Name:</label>
            <input type="text" name="name" defaultValue={this.props.sticker.name} />

            <label>Description:</label>
            <input type="text" name="description" defaultValue={this.props.sticker.description} />

            <label>Price:</label>
            <input type="number" name="price" min="0"
            defaultValue={this.props.sticker.price} />

            <label>In Stock:</label>
            <input type="number" name="countInStock" min="0" defaultValue={this.props.sticker.countInStock} />

            <label>Protective Coating</label>
            { this.props.sticker.protectiveCoating
              ? <input type="checkbox" name="protectiveCoating" defaultChecked />
              : <input type="checkbox" name="protectiveCoating"/>
            }

            <button type="submit" name=" " value="Save Changes">
              Make a Change
            </button>

          </form>

        </div>

      </DefaultLayout>
    )
  }
}

module.exports = Edit;
