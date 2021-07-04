const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Show extends React.Component {
  render() {

    const sticker = this.props.sticker;

    return (
      <DefaultLayout title={"Is This Your Sticker?"}>

                <div className="products__box" key={sticker._id}>

                  <div className="products__image">
                    <a href={`/stickers/${sticker._id}`}>
                      <img src={`${sticker.image}`} />
                    </a>
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

                    <label className="product__detials">Price:</label>
                      <div>
                        {sticker.price}
                      </div>

                    <label className="product__detials">In Stock:</label>
                      <div>
                        {sticker.countInStock}
                      </div>

                    <label className="product__detials">Protective Coating:</label>
                      <div>
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

          <a href="/stickers/">Back to the Gallery</a>

      </DefaultLayout>
    )
  }
};

module.exports = Show;
