import { products } from './data/products.js'


function itemList(userItems) {
  const items = userItems


  function initalPage() {
    const input = document.querySelector('input')
    input.addEventListener('input', filterItemsHandler)
    showItems(items)

  }
  function filterItemsHandler() {
    const inputvalue = document.querySelector('input')
    const something = items.filter((item) => item.keywords.toLowerCase().includes(inputvalue.value.toLowerCase()))
    showItems(something)

  }
  function showItems(items) {
    let ul = document.querySelector('#items')
    ul.innerHTML = ''
    items.forEach((item) => {
      let liitem = document.createElement('li')
      liitem.textContent = `ID:${item.id}, NAME:${item.name}, KEYWORDS:${item.keywords}`
      ul.appendChild(liitem)
    })


  }

  return { showItems, initalPage, filterItemsHandler }

}

// export { itemList }
const { initalPage, filterItemsHandler, showItems } = itemList(products)

initalPage()


