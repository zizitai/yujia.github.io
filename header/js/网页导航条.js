function codeCommentRemove(f) {　
    return f.toString().replace(/^[^\/]+\/\*!?\s?/, '').replace(/\*\/[^\/]+$/, '');
}
var menuHtml = codeCommentRemove(function () {
    /*
		<!-- 网页导航条开始 -->
		<nav id="导航条">
			<table id="导航条table">
				<tbody>
					<tr id="导航栏网站导航">
						<td>
							<strong style="font-size: 20px;">网站导航</strong>
						</td>
						<td>
							<div id="websitelink" style="text-align: left;">
								&nbsp;&nbsp;
								<a id="导航栏首页" href="./index.html">[首页]</a>
								&nbsp;&nbsp;
								<a id="镜海" href="./镜海.html">镜海</a>
								&nbsp;&nbsp;
								<a id="诺日朗瀑布" href="./诺日朗瀑布.html">诺日朗瀑布</a>
								&nbsp;&nbsp;
								<a id="五彩池" href="./五彩池">五彩池</a>
								&nbsp;&nbsp;
								<a id="扎如沟" href="./扎如沟冰瀑.html">扎如沟冰瀑</a>
							</div>
						</td>
					</tr>
					<tr id="导航栏友情链接">
						<td>
							<strong style="font-size: 20px;">相关链接</strong>
						</td>
						<td>
							<div id="friendlink" style="text-align: left;">
								&nbsp;&nbsp;
								<a target="_blank" href="https://https://developers.arcgis.com//">[Arcgis Developer]</a>
								&nbsp;&nbsp;
								<a target="_blank" href="https://www.runoob.com/">[菜鸟教程]</a>
								&nbsp;&nbsp;
								
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</nav>
		<!-- 网页导航条结束 -->
    */
});

document.write(menuHtml);