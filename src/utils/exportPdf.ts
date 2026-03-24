export function exportToPdf() {
  // Temporarily expand all textareas to show full content
  const textareas = document.querySelectorAll('textarea');
  const originalStyles: { el: HTMLTextAreaElement; height: string; overflow: string }[] = [];

  textareas.forEach((ta) => {
    originalStyles.push({
      el: ta,
      height: ta.style.height,
      overflow: ta.style.overflow,
    });
    ta.style.height = ta.scrollHeight + 'px';
    ta.style.overflow = 'visible';
  });

  window.print();

  // Restore original styles after print dialog
  setTimeout(() => {
    originalStyles.forEach(({ el, height, overflow }) => {
      el.style.height = height;
      el.style.overflow = overflow;
    });
  }, 500);
}
