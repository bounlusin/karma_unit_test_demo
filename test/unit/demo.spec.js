import PraiseButton from '../../../src/js/PraiseButton.js';

describe("demo karma单元测试", function(){
	it("初始化测试", function(){
		const praiseButton = new PraiseButton();
		expect(praiseButton.getCounter()).toBe(0);	
	});

	it("plus 1 次测试", function(){
		const praiseButton = new PraiseButton();

		praiseButton.plusOne();
		expect(praiseButton.getCounter()).toBe(1);	
	});

	it("plus 2 次测试", function(){
		const praiseButton = new PraiseButton();

		praiseButton.plusOne();
		praiseButton.plusOne();
		expect(praiseButton.getCounter()).toBe(2);	
	});
});
