;
/**
 * [description]
 * @AuthorHTL                                                xianfei
 * @DateTime  2016-06-23T08:34:33+0800
 * @param     {[type]}                 require               [description]
 * @param     {[type]}                 exports               [description]
 * @param     {Object}                 module)               {		var       homedesc                                          [description]
 * @param     {[type]}                 _init_homedesc_login: function()    {			console.log(1212121);		}	};	module.exports [description]
 * @return    {[type]}                                       [description]
 */
define(function(require, exports, module) {


	var homedesc = {
		init: function() {
			//初始化HandleBar是帮助类
			initHandlebarsHelpers();
			//homedesc  主要加载js
			homedesc._init_homedesc_login();
		},
		_init_homedesc_login: function() {
			//加载页面 content 
			//加载页面 footer
			//http://localhost:9999/hg_xianfei_v2.4/homepage-description.html?index=1
			/**
			 * [contIndex description] contIndex 为选中的展示模块的索引
			 * @type {[type]}
			 */
			var contIndex = Rose.browser.getParameter("index");
			Rose.ajax.getHtml("tpl/homepage-desc-footer.tpl", function(html, status) {
				if (status) {
					var template = Handlebars.compile(html);
					$("#JS_STEP_3").html(template());
				};
			});
			Rose.ajax.getHtml("tpl/homepage-desc-navi.tpl", function(html, status) {
				if (status) {
					var template = Handlebars.compile(html);
					$("#navigate").html(template());

					if (!isNaN(contIndex) && contIndex > -1) {
						$("#navigate").find(".nav").eq(contIndex).addClass("nav-active");
					}

					homedesc._init_homedesc_loadcont(contIndex);
					$("#navigate").find(".nav").each(function(index, element) {
						$(this).unbind().bind("click", function() {
							$("#navigate").find(".nav").removeClass("nav-active").eq(index).addClass("nav-active");
							homedesc._init_homedesc_loadcont(index);
						});


					});

				};
			});


		},
		/**
		 * [_init_homedesc_loadcont description]
		 * @AuthorHTL                                  xianfei
		 * @DateTime    2016-06-23T15:19:38+0800
		 * @description [description]        加载子页面的  方法
		 * @param       {[type]}                 index [description]
		 * @return      {[type]}                       [description]
		 */
		_init_homedesc_loadcont: function(index) {
			index == undefined ? (index = 0) : ('');
			//子页面的处理逻辑和函数都在这里面
			//homepage-desc-cont0.tpl
			var htmlStr = "tpl/homepage-desc-cont" + index + ".tpl";
			Rose.ajax.getHtml(htmlStr, function(html, status) {
				if (status) {
					var template1 = Handlebars.compile(html);
					$("#JS_STEP_2").html(template1(index));
				};
			});


		},
	};

	module.exports = homedesc;
});


/**
 * [initHandlebarsHelpers description]
 * @AuthorHTL                                          xianfei
 * @DateTime    2016-06-23T15:53:08+0800
 * @description        注册模板 出事化类
 * @return      {[type]}                 [description]
 */
function initHandlebarsHelpers() {
	/**
	 * [description]
	 * @AuthorHTL                                 xianfei
	 * @DateTime    2016-06-23T16:00:53+0800
	 * @description [description]   各个页面的标题  模板处理
	 * @param       {[type]}                 data [description]
	 * @param       {String}                 fn)  {		var       str [description]
	 * @return      {[type]}                      [description]
	 */
	Handlebars.registerHelper('getHomeTitle', function(data, fn) {
		// <img src="img/icon/green-line.png" class="section2-line "><p class="title-one ">产品优势</p><p class="title-two ">PRODUCT ADVANTAGE</p>

		var info = getTitleInfo(data);
		var str = '<img src="img/icon/green-line.png" class="section2-line "><p class="title-one">';
		str += info[0];
		str += '</p><p class="title-two ">';
		str += info[1] + '</p>';

		return new Handlebars.SafeString(str);
	});


}


/*common  method start*/
/**
 * [getTitleInfo description]
 * @AuthorHTL                                 xianfei
 * @DateTime    2016-06-23T16:04:28+0800
 * @description   获取标题的公共方法
 * @param       {[type]}                 data [description]
 * @return      {[type]}                      [description]
 */
function getTitleInfo(data) {
	switch (data) {
		case 0:
			return ["新闻中心", "NEWS CENTER"];
			break;
		case 1:
			return ["关于我们", "ABOUT US"];
			break;
		case 2:
			return ["加入我们", "JOIN US"];
			break;
		case 3:
			return ["产品分类", "PRODUCT CATEGORIES"];
			break;
		case 4:
			return ["成功案例", "SUCCESSFUL CASES"];
			break;
		case 5:
			return ["详细介绍", "DETAILED INTRODUCTION"];
			break;
		default:
	}
}

/*common  method end*/