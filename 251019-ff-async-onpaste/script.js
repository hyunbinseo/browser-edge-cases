// Affected: https://hyunb.in/crop-image-twitter
{
	const pre = document.currentScript?.previousElementSibling;
	if (pre instanceof HTMLPreElement) {
		window.addEventListener('paste', async (e) => {
			for await (const item of e.clipboardData?.items ?? []) {
				console.log(item);
				pre.textContent += `@${Date.now()} | ${item.type}\n`;
			}
		});
	}
}
