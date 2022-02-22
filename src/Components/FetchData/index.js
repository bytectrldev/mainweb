export function getData() {
  return fetch('https://mahalaxmisanitary.com/TestData.json')
    .then((res) => res.json())
    .then((result) => {
      return result.OurServices.Card;
    });
}

export default { getData };
