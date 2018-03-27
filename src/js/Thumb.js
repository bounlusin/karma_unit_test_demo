/*
*	Thumb
*	@class
*/

import PraiseButton from './PraiseButton.js';

class Thumb extends PraiseButton{

	constructor(selector){
		super();

		this.container = $(selector);
		this.textNode = $(`<div class="counter-container"><span>${this.counter}</span></div>`);
		
		const buttonNode = $(`<div class="button-container"><div class="praise-button"></div></div>`);
		let buttonTemplate = ``;

		for (var i=0; i<8; i++) {
			buttonTemplate += '<div class="button-child"></div>';
		}
		buttonNode.find('.praise-button').append(buttonTemplate);

		const wrapper = $(`<div class="wrapper"></div>`);
		wrapper.append(buttonNode).append(this.textNode);
		this.container.append(wrapper);

		this.container.find('.praise-button').on('click', this.onPlusOne.bind(this));
	}

	onPlusOne(){
		this.container.find('.praise-button').addClass('shake');
		this.container.find('.praise-button').on('animationend', () => this.container.find('.praise-button').removeClass('shake'));
		this.plusOne();
	}

	changeText(number){
		this.textNode.find('span').text(number);
	}
}

export default Thumb;