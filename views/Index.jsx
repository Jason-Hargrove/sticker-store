const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Index extends React.Component {
  render(){
    const stickers = this.props.stickers;
    return (
      <DefaultLayout title={"Stickers Index Page"}
      styles={[{ key: 0, href:'/css/app.css'}, { key: 1, href:'/css/indexpage.css'}]}>
        <nav>
        <a href="/stickers/new">Create a New Sticker</a>
        </nav>
        <ul>
          {
            stickers.map((sticker, i)=>{
              return (
                <li key={sticker._id}>
                  The <a href={`/stickers/${sticker._id}`}>{sticker.name}</a>
                  {' '}is {sticker.color} <br/>
                  {
                    sticker.protectiveCoating?
                    '  Protective Coating Applied':
                    '  No Protective Coating'
                  }
                  <form method="POST" action={`/stickers/
                  ${sticker._id}?_method=DELETE`}>
                  <input type="submit" value="DELETE"/>
                  </form>
                  <a href={`/stickers/${sticker._id}/edit`}>Edit This Sticker</a>
                </li>
              )
            })
          }
        </ul>
      </DefaultLayout>
    )
  }
}

module.exports = Index;
