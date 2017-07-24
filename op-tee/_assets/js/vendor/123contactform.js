$.fn.makeSelect = function() {
	var els = $(this);

	$.each(els, function() {

		var el = $(this);

		var is_touch_device = 'ontouchstart' in document.documentElement;


		if(typeof window.disableTouchDetect != 'undefined' && window.disableTouchDetect )
			is_touch_device=false;

		if (
			el.hasClass('force-searchable')
			|| ((el.hasClass("js-dropdown-searchable")) && (!is_touch_device))
		)  { // searchable dropdwon will be that custom select2

			el.select2();

			el.on("select2-opening", function(e) {
				$('.focus').removeClass('focus');
				$(this).parents('.fieldcontainer').last().find('.hidden_instruction').removeClass('hidden_instruction');
				$(this).closest('.currentPageActive.fieldcontainer').closest('.currentPageActive.fieldcontainer:not(.rowdown)').addClass("focus");

			});
			el.on("select2-close", function(e) {
				$('.body').css({
					width: "auto"
				});
				var choice_parent = $(this).parent().find('.select2-container');
				if ($(this).val() != "")
					if (!choice_parent.hasClass('no-validation-error')) choice_parent.addClass('no-validation-error');
				$(this).closest('.currentPageActive.fieldcontainer').closest('.currentPageActive.fieldcontainer:not(.rowdown)').addClass("focus");
			});

			el.on("select2-open", function() {
				var el_parent = $(this).parent().find('.select2-container');

				var el_parent_width = el_parent.width();

				var el_max_width = el_parent.parent().width();
				if ($(this).hasClass('force-searchable')) {
					var position_left = el.offset().left;
					el_max_width = $(window).width() - position_left-10;
					el_parent_width = el_max_width - position_left-10;
					if (!$('#select2-drop').hasClass('force-searchable-container'))
						$('#select2-drop').addClass('force-searchable-container');
				}

				if ($('.select2-search').length > 0)
					$('.select2-search').css({
						width: el_parent_width
					});



				if ((document.getElementById('thisisjsform') != null) || (typeof(Wix) !== 'undefined')) {
					RefreshFrameHeight(0);
					$('#select2-drop').css({
						minWidth: el_parent_width,
						maxWidth: el_max_width,
						width: "auto"
					});

					var form_height = $('.form').height();
					var el_top = el_parent.position().top;
					var max_height = Math.min(Math.max(form_height - el_top, el_top) - 80, 265);
					$('#select2-drop .select2-results').css({
						maxHeight: max_height
					});
					RefreshFrameHeight(0);
				} else {
					$('#select2-drop').css({
						minWidth: el_parent_width,
						maxWidth: el_max_width,
						width: "auto"
					});
				}

			});

		} else { // non searchable dropdown will be that simpleSelect , original + new layout
			el.selectSimple();
		}
		if (el.hasClass('disabled-control'))
			if (el.prev().hasClass('select2-container')) {
				el.prev().addClass('disabled-label');
			}
	});
};

/* selectSimple - this function creates a select dropdown replacer (design related)   */

$.fn.selectSimple = function() {

	var el = $(this);

	var el_id = el.attr("id");
	var el_val = el.val();
	var el_text = el.find('option:selected').text();
	var extra_classes = "";
	if (el.hasClass('select2-updated')) return;
	if (el.hasClass("no-validation-error"))
		extra_classes += " no-validation-error";
	el.addClass("select2-updated");
	if (el.prev().hasClass('select2-container')) return false;

	var new_element = $('<div class="select2-container select2-extra class123-select' + extra_classes + '" id="s2id_' + el_id + '"><a tabindex="-1" class="select2-choice no-text-decoration" onclick="return false;" href="javascript:void(0)"><span class="select2-chosen no-text-decoration">' + el_text + '</span><abbr class="select2-search-choice-close"></abbr><span class="select2-arrow"><b></b></span></a></div>');
	var ex_classes = el.prop("class").replace("class123-select", "");
	var needToShow = false;
	if(!el.is(':visible')){
		el.show();
		needToShow = true;
	}
	new_element.css("width", el.css("width"));
	if(needToShow)
		el.hide();
	if (ex_classes != "") new_element.addClass(ex_classes);
	new_element.insertBefore(el);

	//new_element=el.prev('.select2-container');
	var margin_top = new_element.position().top == 0 ? -32 : "";
	var new_top = new_element.position().top == 0 ? "" : new_element.position().top;

	var have_width_inline = false;
	if (typeof(el.attr("style")) != "undefined")
		if (el.attr("style").indexOf("width") == -1) have_width_inline = true;

	var new_width = (new_element.width() == 0 || have_width_inline) ? "100%" : new_element.width();

	el.css({
		position: "absolute",
		maxWidth: "100%",
		opacity: 0.001,
		height: 32,
		width: new_width,
		top: new_top,
		marginTop: margin_top,
		/* left:new_element.parent().css("padding-left"),*/
		display: "block",
	}).on("mouseenter", function() {

		var select_element = $(this);
		var el = select_element.prev('.select2-container');
		select_element.css({
			width: el.width(),
			height: el.height(),
			left: el.position().left,
			top: el.position().top,
			margin: "0px"
		});
	})

	.on("change", function() {
		var el = $(this);

		var el_val = el.val();
		var el_text = el.find('option:selected').text();
		el.prev('.select2-container').find('.select2-chosen').html(el_text);
	}).on("focus", function() {
		$('.focus').removeClass('focus');

		$(this).parents('.fieldcontainer').last().find('.hidden_instruction').removeClass('hidden_instruction');
		$(this).closest('.currentPageActive.fieldcontainer').closest('.currentPageActive.fieldcontainer:not(.rowdown)').addClass("focus");
	}).on("click", function(e) {
		var el = $(this);

		if (el.hasClass('select2-arrow')) el = el.parent();

		if (e.target.nodeName == "OPTION") {
			el.prev('.select2-container').toggleClass('select2-dropdown-open');
		}
		var choice_parent = el.prev('.select2-container').first();
		var prev_element = el.prev();

		if (prev_element.prop('tagName') == "SELECT") {
			if (prev_element.height() == 0) { // fix for rules
				prev_element.css({
					height: el.height(),
					top: el.position().top,
					left: el.position().left,
				});


			}
		}

		if ($(this).val() != "")
			if (!choice_parent.hasClass('no-validation-error')) choice_parent.addClass('no-validation-error');
		$(this).closest('.currentPageActive.fieldcontainer').closest('.currentPageActive.fieldcontainer:not(.rowdown)').addClass("focus");
	}).on("blur", function() {
		var el = $(this);
		el.prev('.select2-container').removeClass('select2-dropdown-open');
	});

	new_element.css({
			width: new_width
		})
		.on("mouseenter", function() {
			var el = $(this);
			var select_element = $(this).next('select:first');

			select_element.css({
				width: el.width(),
				height: el.height(),
				left: el.position().left,
				top: el.position().top,
				margin: "0px"
			});
		});
}

window.addEventListener("load", function(){
window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#0084ab",
      "color":"#FFF"
    },
    "button": {
      "background": "#FFF",
      "color":"#000"
    }
  },
  "theme": "classic",
  "position": "bottom-left",
  "content": {
    "href": "/legal/"
  }
})});
window.cookieconsent.hasTransition = false;
