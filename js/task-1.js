const categoriesList = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const elements = category.querySelectorAll('ul li');
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements.length}`); 
   category.style.listStyle = 'none';
    category.style.margin = '0';
   category.style.marginBottom = '48px';
  
 
   elements.forEach(item => {
    item.style.border = '1px solid #808080';
    item.style.borderRadius = '4px';
    item.style.width = '360px';
    item.style.height = '40px';
    item.style.padding = '8px 0 8px 16px';
    item.style.listStyle = 'none';
    item.style.marginBottom = '8px';
    item.style.marginLeft = '-40px';
    });

  });