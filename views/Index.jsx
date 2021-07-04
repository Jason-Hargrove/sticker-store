const React = require('react');
const DefaultLayout = require('./layouts/Default');


class Index extends React.Component {
  render() {

    const stickers = this.props.stickers;

    return (
      <DefaultLayout title={"Radioactive Stickers"}>

        <div className="products">
          {
            stickers.map((sticker, i) => {
              return (

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

                    <label>Price:</label>
                      <div>
                        {sticker.price}
                      </div>

                    <label>In Stock:</label>
                      <div>
                        {sticker.countInStock}
                      </div>

                    <label>Protective Coating:</label>
                      <div>
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
          <a href="/stickers/new">Add a Sticker</a>
        </nav>
      </DefaultLayout>
    )
  }
};

module.exports = Index;
