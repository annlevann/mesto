export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }

  addItem = (element) => {
    this._containerSelector.prepend(element);
  }

  renderItems = () => {
    this._items.reverse().forEach((card) => {
      this._renderer(card);
    });
  }
}
