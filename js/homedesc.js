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
			/**
			 * homedesc  主要加载js
			 */
			this._init_homedesc_login();

		},
		_init_homedesc_login: function() {
			//加载页面 content 
			//加载页面 footer
			Rose.ajax.getHtml("tpl/homepage-desc-footer.tpl", function(html, status) {
				if (status) {
					var template = Handlebars.compile(html);
					$("#JS_STEP_3").html(template());
				};
			});

		}
	};

	module.exports = homedesc;
});