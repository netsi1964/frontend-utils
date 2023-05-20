/**
 * A class for DOM related operations.
 */
export default class Dom {
  /**
   * Adds a global event listener to a parent element.
   * @param {string} type - The type of the event.
   * @param {string} selector - The selector to match the target element.
   * @param {Function} callback - The callback function to execute when the event is triggered.
   * @param {Object} options - The options object for the event listener.
   * @param {HTMLElement} [parent=document] - The parent element to attach the event listener to.
   */
  static addGlobalEventListener(
    type,
    selector,
    callback,
    options,
    parent = document
  ) {
    parent.addEventListener(
      type,
      (e) => {
        if (e.target.matches(selector)) callback(e);
      },
      options
    );
  }

  /**
   * Returns the first element within the document that matches the specified selector.
   * @param {string} selector - The CSS selector to match the element.
   * @param {HTMLElement} [parent=document] - The parent element to query within.
   * @returns {Element} The first matched element.
   */
  static qs(selector, parent = document) {
    return parent.querySelector(selector);
  }

  /**
   * Returns all elements within the document that match the specified selector.
   * @param {string} selector - The CSS selector to match the elements.
   * @param {HTMLElement} [parent=document] - The parent element to query within.
   * @returns {Array} An array of matched elements.
   */
  static qsa(selector, parent = document) {
    return [...parent.querySelectorAll(selector)];
  }

  /**
   * Creates a new element with the specified type and options.
   * @param {string} type - The type of the element to create.
   * @param {Object} [options={}] - The options for the new element.
   * @param {string} [NS=""] - The XML namespace for the new element.
   * @returns {Element} The newly created element.
   */
  static createElement(type, options = {}, NS = "") {
    const element = NS
      ? document.createElementNS(NS, type)
      : document.createElement(type);
    Object.entries(options).forEach(([key, value]) => {
      if (key === "class") {
        element.classList.add(value);
        return;
      }

      if (key === "dataset") {
        Object.entries(value).forEach(([dataKey, dataValue]) => {
          element.dataset[dataKey] = dataValue;
        });
        return;
      }

      if (key === "text") {
        element.textContent = value;
        return;
      }

      element.setAttribute(key, value);
    });
    return element;
  }
}
