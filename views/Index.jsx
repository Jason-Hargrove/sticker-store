const React = require('react');
const DefaultLayout = require('./layouts/Default');


class Index extends React.Component {
  render() {

    const stickers = this.props.stickers;

    return (
      <DefaultLayout>

        <div className="products">
          {
            stickers.map((sticker, i) => {
              return (

                <div className="products__box" key={sticker._id}>



                  <div className="imageBox">

                    <div className="imageInn">
                        <img src={`${sticker.imageUrl}`} />
                    </div>

                    <div className="hoverImg">

                      <a href={`/stickers/${sticker._id}`}><img src="https://images.squarespace-cdn.com/content/v1/57902faa59cc68a958c59c03/1625664782050-AW77UNJMCXLORA4AYEYP/click-to-buy.png?format=2500w"/></a>
                      {/* <a href={`/stickers/${sticker._id}`}></a> */}
                    </div>

                  </div>



                  <div className="product__info">

                      {/* Product Name */}
                      <div className="product__name">
                        {sticker.name}
                      </div>

                      {/* Product Description */}
                      <div className="product__details">
                        {sticker.description}
                      </div>

                      {/* Product Price */}
                      <div className="product__price">
                        <label>$</label>{sticker.price}.00
                      </div>

                      {/* Product Count In Stock */}
                      <div className="product__stockinstock">
                      <div className="product__stock">
                        <span className="product__count">{sticker.countInStock}</span>
                      </div>
                      <div className="product__instock">
                        <label>In Stock</label>
                      </div>
                      </div>

                      {/* Product Protectiv Coating or Not */}
                      <div className="product__coating">
                        {
                          sticker.protectiveCoating?
                          '  Protective Coating Applied':
                          '  No Protective Coating'
                        }
                      </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <nav>
          <div className="nav__bottom">
            <a href="/stickers/new">
              <h3 className="nav__text">Add a Sticker</h3>
            </a>
          </div>
        </nav>

      </DefaultLayout>
    )
  }
};

module.exports = Index;
