export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }

  addItem = (element) => {
    this._containerSelector.append(element);
  }

  renderItems = () => {
    this._items.forEach((card) => {
      this._renderer(card);
    });
  }
}
