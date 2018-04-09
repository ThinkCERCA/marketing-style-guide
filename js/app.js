document.addEventListener("DOMContentLoaded", () => {
	// NavLink and NavSection active links
	$(".nav-link").click((e) => {
		$(".nav-link").removeClass('active');
		$(e.currentTarget).addClass('active');
	})

	$(".nav-section").click((e) => {
		$(".nav-section").removeClass('active');
		$(e.currentTarget).addClass('active');
	})

	// ClipboardJS plugin settings to copy hexcodes
	const clipboard = new ClipboardJS(".copy-hex");


	// Tooltip hide/show functions
	const setTooltip = (btn, message) => {
		$(btn).tooltip('hide')
			.attr('data-original-title', message)
			.tooltip('show');
	}

	const hideTooltip = (btn) => {
		setTimeout(() => {
			$(btn).tooltip('hide');
		}, 2000);
	}

	clipboard.on('success', (e) => {
		setTooltip(e.trigger, 'Copied!');
		hideTooltip(e.trigger);
	})

	clipboard.on('error', (e) => {
		setTooltip(e.trigger, 'Failed!');
		hideTooltip(e.trigger);
	})
})