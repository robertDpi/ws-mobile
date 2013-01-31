(function($) {
	// Written this way to keep everything self contained an non-conflicting with your code.
	var bool = 1;

	$("#menu-toggle").click(function() {
		a = $(this).next();

		a.slideToggle(function() {
			if ((bool++ & 1) == 0)
				a.removeAttr('style');
		});
	});
})(jQuery);
