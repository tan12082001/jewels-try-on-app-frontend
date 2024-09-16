const container = document.getElementById('changing-product-titles');

const texts = [
  'Earrings',
  'Chains',
  'Anklets',
  'Bangels',
  'Bracelets',
  'Rings',
  'Leather Bags',
  'Key Chains',
];

const TextsVerticalFading = () => {
  texts.forEach((text, index) => {
    setTimeout(() => {
      container.textContent = text;
    }, index * 2000);
  });
};

// TextsVerticalFading();
// setInterval(TextsVerticalFading, texts.length * 2000);

export default TextsVerticalFading;
