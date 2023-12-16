let arr = [{ img_src: "https://rukminim1.flixcart.com/fk-p-flap/176/176/image/4f84f7cf33100b5d.png?q=100", title: "Top Deals", href: "" },
{ img_src: "https://rukminim1.flixcart.com/flap/176/176/image/29327f40e9c4d26b.png?q=100", title: "Grocery", href: "" },
{ img_src: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100", title: "Fashion", href: "" },
{ img_src: "https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100", title: "Electronics", href: "" },
{ img_src: "https://rukminim1.flixcart.com/flap/176/176/image/22fddf3c7da4c4f4.png?q=100", title: "Tablets", href: "" },
{ img_src: "https://rukminim1.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100", title: "Furniture", href: "" },
{ img_src: "https://rukminim1.flixcart.com/flap/176/176/image/0ff199d1bd27eb98.png?q=100", title: "Appliances", href: "" },
{ img_src: "https://rukminim1.flixcart.com/fk-p-flap/176/176/image/0139228b2f7eb413.jpg?q=100 ", title: "Kitchen", href: "" },
{
  img_src: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png?q=100",
  title: "Two Wheelers",
  href: ""
}]

let categories = document.querySelector(".categories")

arr.map((elements) => {
  let image = document.createElement("img")
  image.src = elements.img_src
  let title = document.createElement("p")
  title.innerHTML = elements.title
  let box = document.createElement("div")
  box.appendChild(image)
  box.appendChild(title)
  categories.appendChild(box)
})





