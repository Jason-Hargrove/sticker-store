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





            <nav className="navbar">
    {/* ===== Logo ===== */}
      <div className="navbar_logo">
      <a href="/stickers">
      <h2>Radioactive Sticker Store</h2>
      </a>
      </div>
    {/* ===== Links ===== */}
    <ul className="navbar__links">
      <li>
        <a href="">
          {/* Shopping Cart Icon. Font Awesome. */}
          <i className="fas fa-shopping-cart"></i>
          <span>
          Cart
          <span className="cartlogo__badge">0</span>
          </span>
        </a>

      </li>
      <li>
        <a href="">
          {/* Back to the home page. */}
          Shop
        </a>
      </li>
    </ul>

    <div className="hamburger__menu">
    <div></div>
    <div></div>
    <div></div>

    </div>
  </nav>
            </header>

            <h1>{this.props.title}</h1>
            {this.props.children}

          </body>

      </html>
    )
  }
}

module.exports = DefaultLayout;
