const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Show extends React.Component {
  render() {

    const sticker = this.props.sticker;

    return (
      <DefaultLayout title={"Is This Your Sticker?"}>

                <div className="products__box" key={sticker._id}>

                  <div className="products__image">
                      <img src={`${sticker.imageUrl}`} />
                  </div>

                  <div className="product__info">

                    <label>Name:</label>
                      <div className="product__detials">
                        {sticker.name}
                      </div>

                    <label>Description:</label>
                      <div className="product__detials">
                        {sticker.description}
                      </div>

                    <label>Price:</label>
                      <div className="product__detials">
                        {sticker.price}
                      </div>

                    <label>In Stock:</label>
                      <div className="product__detials">
                        {sticker.countInStock}
                      </div>

                    <label>Protective Coating:</label>
                      <div className="product__detials">
                        {
                          sticker.protectiveCoating?
                          '  Protective Coating Applied':
                          '  No Protective Coating'
                        }
                      </div>

                  </div>

                  <div className="cardFunctions">

                    <button>
                      <a href={`/stickers/${sticker._id}/edit`}>Edit</a>
                    </button>

                      <form method="POST" action={`/stickers/${sticker._id}?_method=DELETE`}>
                        <button type="submit" value="DELETE">Delete</button>
                      </form>

                  </div>

                  <button>Buy</button>

                </div>

          <a href={`/stickers/`}>Back to the Gallery</a>

      </DefaultLayout>
    )
  }
};

module.exports = Show;
