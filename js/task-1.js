const categoriesEl = document.querySelector('#categories');
const items = categoriesEl.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const elementsCount = item.querySelectorAll('ul li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
