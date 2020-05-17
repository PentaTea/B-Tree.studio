/***
 * Create by Dunba on 19/04/09
 * Copyright (c) 2019 syd. All rights reserved.
 * https://github.com/githubadun/ImgWallRandomArrange
 * *
 * based on jquery.js
 * *
 * 2020-05-16 Modified by PentaTea
 */
/**
 * 根据传入的数值随机生成1:1,1:2,2:1,2:2比例的单元格，并且将制定区域铺满
 * @param {String} container 符合js查询语法的字符串
 * @param {Number} hItemCount 水平单元格的最大可能数量
 * @param {Number} vItemCount 垂直单元格的最大可能数量
 * @param {Number} unitPixel 每一个单元格的单位所代表的像素值
 * @return null 
 */
module.exports = function imgWallArrange(container, unitPixel) {
	console.log($(container).width(), $(container).height())
	var hItemCount = ($(container).width() / unitPixel || 6).toFixed();
	var vItemCount = ($(container).height() / unitPixel || 3).toFixed();
	console.log(hItemCount, vItemCount)
	var unitPixel = unitPixel || 10;
	var itemArray = new Array();
	//保存数据的矩阵
	var matrix = new Array();
	for (var i = 0; i < hItemCount * vItemCount; i++) {
		itemArray.push(i);
	}

	while (itemArray.length >= 1) {
		//保存单元集合的数组
		var itemUnionArray = new Array();
		//1.获取数组中的最小元素
		var least = itemArray[0];
		//2.生成随机的单元格数值1~2
		var stretchX = Math.round(Math.random()) + 1;
		var stretchY = Math.round(Math.random()) + 1;
		var stretchXTwo = false;//是否横向扩展为两个
		//3.根据生成的横向和纵向数值进行处理
		if (stretchX == 1) {
			//3.1 准备占用一个单元格
			itemArray.splice(0, 1);//删除第一个
			itemUnionArray.push(least);

		} else {
			//3.2 准备占用了两个单元格，对情况进行判断
			//3.2.1 当前值的下一个值是否可以被使用
			var next = least + 1;//下一个值
			//(least+1)%hItemCount==0说明是一行中的最后一个值，
			//next是否存在于数组内，如果不存在，说明已经被占用了
			var nextItemIndex = itemArray.indexOf(next);
			if (((least + 1) % hItemCount != 0) && (nextItemIndex != -1)) {
				//3.2.2进入这里，说明不再行尾，且他的下一个元素也没有被占用
				//将第一个元素，与下一个元素进入数组
				itemUnionArray.push(least);
				itemUnionArray.push(next);
				itemArray.splice(0, 2);//将两个元素从数组内删除
				stretchXTwo = true;
			} else {
				//3.2.3进入这里，说明右侧的那个元素被占用了，则只能添加一个元素
				itemArray.splice(0, 1);//删除第一个
				itemUnionArray.push(least);
			}
		}
		//3.3 判断Y方向取值
		if (stretchY == 1) {
			//3.3.1 准备占用一个单元格
			//因为只占用一个，且上面已经添加了，所以不进行任何处理
		} else {
			//3.3.2 准备占用了两个单元格，对情况进行判断
			//3.2.1 当前值的下一行的元素值判断是否可以使用
			var leastY = least + hItemCount;//下一行的值
			var maxValue = itemArray[itemArray.length - 1];
			//如果leastY的值大于数组最大值，说明已经越界。
			if (leastY < maxValue) {
				console.log("下一行的值(" + leastY + ")是存在的");
				if (stretchXTwo) {//说明横向是两个
					itemUnionArray.push(leastY);
					itemUnionArray.push(leastY + 1);
					var leastYIndex = itemArray.indexOf(leastY);
					//进行删除处理
					itemArray.splice(leastYIndex, 2);
				} else {
					console.log("横向扩展为1，纵向扩展为2进行处理");
					//说明横向是一个
					//进入这里说明下一行的元素是存在的，进行增加处理
					itemUnionArray.push(leastY);
					var leastYIndex = itemArray.indexOf(leastY);
					//进行删除处理
					itemArray.splice(leastYIndex, 1);
				}

			} else {
				//进入这里说明下一行的值是不存在的，且判断x时已经添加过了，此处不进行任何处理
			}

		}
		matrix.push(itemUnionArray);
	}
	/**
	 * 产生随机整数，包含下限值，但不包括上限值
	 * @param {Number} lower 下限
	 * @param {Number} upper 上限
	 * @return {Number} 返回在下限到上限之间的一个随机整数
	 */
	function random(lower, upper) {
		return Math.floor(Math.random() * (upper - lower)) + lower;
	}
	var imgNewsArr = $(container).find(".img_news");
	//根据数据计算各个单元格所在的位置
	for (var i = 0; i < matrix.length; i++) {
		var r = random(0, 255);
		var g = random(0, 255);
		var b = random(0, 255);
		var itemUnion = matrix[i];
		var itemCount = itemUnion.length;//获取单元集合内有多少个元素
		var itemUnionLeast = itemUnion[0];//获取第一个元素
		var itemWith = 0;//初始化宽度
		var itemHeight = 0;//初始化高度
		if (itemCount == 1) {
			itemWith = unitPixel;
			itemHeight = unitPixel;
		} else if (itemCount == 2) {
			var maxValue = itemUnion[itemCount - 1];
			if ((maxValue - itemUnionLeast) == 1) {
				//说明是横向的
				itemWith = unitPixel * 2;
				itemHeight = unitPixel;
			} else {
				//说明是纵向的
				itemWith = unitPixel;
				itemHeight = unitPixel * 2;
			}
		} else if (itemCount == 4) {
			itemWith = unitPixel * 2;
			itemHeight = unitPixel * 2;
		}
		//根据元素的值判断所在的行和列
		var rows = Math.ceil((itemUnionLeast + 1) / hItemCount) - 1;//所在的行
		var columns = itemUnionLeast % hItemCount;//所在的列
		var fontSize = random(12, 60);

		var eq = imgNewsArr.eq(i);//$("<div class='eq"+i+"' style='background-color:rgb("+r+","+g+","+b+")'><img src='./bg.jpg'/>"+(i+1)+"</div>");
		eq.css("display", "block");
		console.log(eq);
		eq.animate({
			'position': 'absolute',
			'left': columns * unitPixel + 'px',
			'top': rows * unitPixel + 'px',
			'width': itemWith + 'px',
			'height': itemHeight + 'px',
			'fontSize': fontSize + 'px',
			'lineHeight': itemHeight + 'px',
			'textAlign': 'center'
		}, 800).css("display", "block");
		eq.find("img").animate({
			'height': (itemHeight - 4) + 'px',
			'width': (itemWith - 4) + 'px',
			'margin': '2px'
		}, 800);

	}
}
