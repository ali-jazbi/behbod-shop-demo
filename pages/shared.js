(() => {
  const pages = [
    ['01-order-success.html', 'نتیجهٔ سفارش'],
    ['02-cart.html', 'سبد خرید'],
    ['03-home.html', 'صفحهٔ اصلی'],
    ['04-account-dashboard.html', 'پیشخوان حساب کاربری'],
    ['05-shipping-details.html', 'مشخصات ارسال'],
    ['06-cart-variant.html', 'سبد خرید · نسخهٔ دوم'],
    ['07-leather-authenticity-guide.html', 'راهنمای تشخیص چرم'],
    ['08-karen-messenger-bag.html', 'کیف دوشی کارن'],
    ['09-login.html', 'ورود و عضویت'],
    ['10-bags-collection.html', 'مجموعهٔ کیف‌ها'],
    ['11-home-variant.html', 'صفحهٔ اصلی · نسخهٔ دوم'],
    ['12-karen-messenger-bag-variant.html', 'کیف کارن · نسخهٔ دوم'],
    ['13-journal.html', 'مجله و مقالات'],
    ['14-bags-collection-variant.html', 'مجموعهٔ کیف‌ها · نسخهٔ دوم'],
  ];
  const current = decodeURIComponent(location.pathname.split('/').pop() || '').toLowerCase();
  const root = document.createElement('div');
  root.id = 'site-pages-nav';
  root.innerHTML = `
    <button class="site-pages-nav__trigger" type="button" aria-label="باز کردن فهرست صفحه‌ها" aria-expanded="false" aria-controls="site-pages-nav-panel">
      <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="4" width="7" height="6.5" rx="1.5"></rect><rect x="13.5" y="4" width="7" height="6.5" rx="1.5"></rect><rect x="3.5" y="13.5" width="7" height="6.5" rx="1.5"></rect><rect x="13.5" y="13.5" width="7" height="6.5" rx="1.5"></rect></svg>
    </button>
    <nav class="site-pages-nav__panel" id="site-pages-nav-panel" aria-label="پیمایش صفحه‌های پروژه">
      <h2 class="site-pages-nav__heading">جابجایی بین صفحه‌ها</h2>
      <ul class="site-pages-nav__list">${pages.map(([file, label]) => {
        const active = file.toLowerCase() === current;
        return `<li><a class="site-pages-nav__link" href="${file}"${active ? ' aria-current="page"' : ''}><span>${label}</span>${active ? '<span class="site-pages-nav__current" aria-hidden="true"></span>' : ''}</a></li>`;
      }).join('')}</ul>
    </nav>`;
  document.body.append(root);

  const button = root.querySelector('.site-pages-nav__trigger');
  const setOpen = (open) => {
    root.classList.toggle('is-open', open);
    button.setAttribute('aria-expanded', String(open));
  };
  button.addEventListener('click', () => setOpen(!root.classList.contains('is-open')));
  root.addEventListener('focusin', (event) => {
    if (event.target !== button) setOpen(true);
  });
  root.addEventListener('focusout', (event) => {
    if (!root.contains(event.relatedTarget) && !root.matches(':hover')) setOpen(false);
  });
  
  document.addEventListener('pointerdown', (event) => {
    if (!root.contains(event.target)) setOpen(false);
  });
  root.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setOpen(false);
      button.focus();
    }
  });
})();




