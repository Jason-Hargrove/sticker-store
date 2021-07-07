const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Show extends React.Component {
  render() {

    const buyButton = () => {
      if (sticker.countInStock > 0) {
        return (
          <>
            <p>{sticker.countInStock}</p>
            <form action={`/stickers/${sticker.id}/buy`}>
            <input type="submit" value="BUY" />
            </form>
          </>
        )
      } else {
        return (
          <p>Not Currently Available</p>
        )
      }
    }


    const sticker = this.props.sticker;


    return (
      <DefaultLayout>

      <head>
        <meta charSet="utf-8" />
        <title>{this.props.title}</title>
        <link rel="stylesheet" href="/css/show.css" />
      </head>


                <div className="products__box" key={sticker._id}>

                  <div className="products__image">
                      <img src={`${sticker.imageUrl}`} />
                  </div>

                  <div className="product__info">


                      <div className="product__name">
                        {sticker.name}
                      </div>

                      <div className="product__details">
                        {sticker.description}
                      </div>


                      <div className="product__price">
                        {sticker.price}
                      </div>

                      <div className="product__stockinstock">
                      <div className="product__stock">
                        <span className="product__count">{sticker.countInStock}</span>
                      </div>
                      <div className="product__instock">
                        <label>In Stock</label>
                      </div>
                      </div>

                      <div className="product__coating">
                        {
                          sticker.protectiveCoating?
                          '  Protective Coating Applied':
                          '  No Protective Coating'
                        }
                      </div>
                  </div>

                  <div className="cardFunctions">

                    <button className="edit-btn">
                      <a href={`/stickers/${sticker._id}/edit`}>Edit</a>
                    </button>

                      <form method="POST" action={`/stickers/${sticker._id}?_method=DELETE`}>
                        <button className="del-btn" type="submit" value="DELETE">Delete</button>
                      </form>
                  </div>

                    <button className="buy-btn">
                     {buyButton()}
                    </button>

                  <div>
                    <a className="nav__gallery" href={`/stickers/`}>Back to the Gallery</a>
                  </div>
                </div>



      </DefaultLayout>
    )
  }
};

module.exports = Show;
