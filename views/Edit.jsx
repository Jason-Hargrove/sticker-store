const React = require('react');
const DefaultLayout = require('./layouts/Default.jsx');

class Edit extends React.Component {
  render() {

    const sticker = this.props.sticker;

    return(
      <DefaultLayout title="Edit Page">

        <div className="products__box">

          <form method="POST" action={`/stickers/${this.props.sticker._id}?_method=PUT`}>

            <lable>Image:</lable>
            <input type="text" name="imageUrl" defaultValue={this.props.sticker.imageUrl} />

            <lable>Name:</lable>
            <input type="text" name="name" defaultValue={this.props.sticker.name} />

            <lable>Description:</lable>
            <input type="text" name="descripton" defaultValue={this.props.sticker.descripton} />

            <lable>Price:</lable>
            <input type="number" name="price" defaultValue={this.props.sticker.price} />

            <lable>In Stock:</lable>
            <input type="number" name="countInStock" defaultValue={this.props.sticker.countInStock} />

            <lable>Protective Coating</lable>
            { this.props.sticker.protectiveCoating
              ? <input type="checkbox" name="protectiveCoating" defaultChecked />
              : <input type="checkbox" name="protectiveCoating"/>
            }

            <button type="submit" name="" value="Save Changes">
              Make a Change
            </button>

          </form>

        </div>

      </DefaultLayout>
    )
  }
}

module.exports = Edit;
