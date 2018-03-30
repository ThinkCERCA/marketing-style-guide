document.addEventListener("DOMContentLoaded", () => {
	$(".nav-link").click((e) => {
		$(".nav-link").removeClass('active');
		$(e.currentTarget).addClass('active');
	})
})