/**
*	PraiseButton
*	@class
*/

class PraiseButton{

	constructor(counter){
		this.counter = counter || 0;
	}

	plusOne(){
		this.counter++;
		this.changeText(this.counter);
	}

	changeText(){

	}

	getCounter(){
		return this.counter;
	}

}

export default PraiseButton;