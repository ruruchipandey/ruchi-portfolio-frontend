/**
 * Ruchi Pandey - Resume Preview Modal
 */

window.openResumePreview = function() {
  const modal = document.getElementById('pdf-modal');
  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
};

window.closeResumePreview = function() {
  const modal = document.getElementById('pdf-modal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const downloadBtn = document.getElementById('modal-download-btn');

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeResumePreview();
    }
  });

  // Subtle feedback when Download Resume is clicked
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      const originalText = downloadBtn.textContent;
      downloadBtn.textContent = 'Downloading...';
      setTimeout(() => {
        downloadBtn.textContent = originalText;
      }, 1800);
    });
  }
});
