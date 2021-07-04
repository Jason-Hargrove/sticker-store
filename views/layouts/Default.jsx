const React = require('react');

class DefaultLayout extends React.Component {

  render() {

    return (

      <html lang="en" dir="ltr">

          <head>
            <meta charSet="utf-8" />
            <title>{this.props.title}</title>
            <link rel="stylesheet" href="/css/app.css" />
          </head>

          <body>
            <header>
              <a href="/stickers">
                <div className="logo">
                  Radioactive Sticker Store
                </div>
              </a>

                <div className="cart">
                  Shopping Cart
                </div>

            </header>

            <h1>{this.props.title}</h1>
            {this.props.children}

          </body>

      </html>
    )
  }
}

module.exports = DefaultLayout;
