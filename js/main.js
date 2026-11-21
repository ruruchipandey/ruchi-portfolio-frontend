/**
 * Ruchi Pandey - Minimalist Recruiter Portfolio Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initCopyEmail();
});

function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const label = document.getElementById('theme-label');
  const storedTheme = localStorage.getItem('site-theme');

  // Set default theme: light is cleanest for recruiters, but honors user saved preference
  const activeTheme = storedTheme || 'light';
  document.documentElement.setAttribute('data-theme', activeTheme);
  updateButtonLabel(activeTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('site-theme', nextTheme);
      updateButtonLabel(nextTheme);
    });
  }

  function updateButtonLabel(theme) {
    if (label) {
      label.textContent = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
    }
  }
}

function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  const email = 'ruchipandeytouka@gmail.com';

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(email).then(() => {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '✅ Copied!';
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
        }, 2200);
      }).catch(() => {
        window.location.href = `mailto:${email}`;
      });
    });
  }
}
