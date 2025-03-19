export class Button {
    constructor(text, options = {}) {
      this.text = text;
      this.options = {
        type: options.type || 'primary',
        onClick: options.onClick || (() => {}),
      };
      this.render();
    }
  
    render() {
      const button = document.createElement('button');
      button.innerText = this.text;
      button.className = `btn btn-${this.options.type}`;
      button.addEventListener('click', this.options.onClick);
      return button;
    }
  }