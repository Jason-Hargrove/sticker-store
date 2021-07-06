// url to sticker video. Test images first: https://youtu.be/Oj9o9ZSrz_w
app.get('/seed', async (req, res) => {
  const newProducts =
  [
  {
    name: "Table of Stickers",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/57902faa59cc68a958c59c03/1625602265919-WM6DID24Z3NUIJCB445B/table-of-stickers.jpg?format=2500w",
    description:
      "Everyone wants a table full of stickers.",
    price: 200,
    countInStock: 10,
  },
  {
    name: "Radioactive Play",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/57902faa59cc68a958c59c03/1625602265869-LPADUW9PR60TLSBDEA3Z/radioactive-play.jpg?format=2500w",
    description:
      "Do your kids love to play with radioactive toys? Then they would love this sticker. Buy one today!",
    price: 20,
    countInStock: 10,
  },
  {
    name: "Radioactive Bath",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/57902faa59cc68a958c59c03/1625602265417-AXTLJ96NNDD1ZM1OX3HJ/radioactive-bath.jpg?format=2500w",
    description:
      "Clean water? Who needs that? Get glowing skin with our new and approved Radioactive Bath.",
    price: 20,
    countInStock: 5,
  },
  {
    name: "Contaminate St. Louis",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/57902faa59cc68a958c59c03/1625602265382-P33ARSJHIWFHGAVUM9KE/contaminate-st-louis.jpg?format=2500w",
    description:
      "Do you live in St. Louis? Well, you don't have to live in St. Louis to be contaminated. Spread the love like all the other Superfund Sites in our country with theses stickers. By love, I mean radioactive contamination of course.",
    price: 5,
    countInStock: 20,
  },
  {
    name: "NEW Trefoil",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/57902faa59cc68a958c59c03/1625602266845-EXNJ1LTXEYJSDLBX6EZ7/trifoil.jpg?format=2500w",
    description:
      "The Trefoil sticker has evolved. This is a pack of 10 sticker ready to slap.",
    price: 10,
    countInStock: 10,
  },
  {
    name: "Trefoil Circle",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/57902faa59cc68a958c59c03/1625602266324-WWQO575IBXBLL4AJ3CX0/trefoil-circle.jpg?format=2500w",
    description:
      "Need a certin sticker that will fit on that certin object in that certin place? Here it is!",
    price: 5,
    countInStock: 10,
  },
  {
  name: "Trefoil Table",
  imageUrl:
    "https://images.squarespace-cdn.com/content/v1/57902faa59cc68a958c59c03/1625602266427-5GFEHOKW7VYUOD3D0GIM/trefoil-table.jpg?format=2500w",
  description:
    "Just a bunch of stickers.",
  price: 5,
  countInStock: 10,
},
];

try {
  const seedItems = await Product.create(newProducts)
  res.send(seedItems)
} catch (err) {
  res.send(err.message)
}
})
