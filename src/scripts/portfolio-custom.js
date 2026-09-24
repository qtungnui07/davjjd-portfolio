const socialLinks = [
  ['Facebook', 'https://www.facebook.com/share/14pdYryv1HM/'],
  ['YouTube', 'https://www.youtube.com/@davjiid'],
  ['Instagram', 'https://www.instagram.com/rdavjd/'],
  ['osu!', 'https://osu.ppy.sh/users/34537896'],
];

function addSocialLinks() {
  const hero = document.querySelector('#hero');
  const oldCta = hero?.querySelector('a[href="#contact"]');

  if (!oldCta || oldCta.dataset.replaced) {
    return;
  }

  const socialRow = document.createElement('nav');
  socialRow.className = 'hero-socials';
  socialRow.setAttribute('aria-label', 'Social links');

  for (const [label, href] of socialLinks) {
    const link = document.createElement('a');
    link.href = href;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = label;
    socialRow.append(link);
  }

  oldCta.dataset.replaced = 'true';
  oldCta.replaceWith(socialRow);
}

function addVietnamFlag() {
  const badgeLabel = document.querySelector('#hero .card p');

  if (
    !badgeLabel ||
    badgeLabel.dataset.vietnamFlag ||
    !badgeLabel.textContent.includes('Vietnam')
  ) {
    return;
  }

  badgeLabel.dataset.vietnamFlag = 'true';
  badgeLabel.replaceChildren();

  const flag = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  flag.setAttribute('class', 'vietnam-flag');
  flag.setAttribute('viewBox', '0 0 28 20');
  flag.setAttribute('aria-hidden', 'true');

  const background = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  background.setAttribute('width', '28');
  background.setAttribute('height', '20');
  background.setAttribute('rx', '2');
  background.setAttribute('fill', '#da251d');

  const star = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  star.setAttribute(
    'd',
    'M14 3.1l2.05 6.3h6.63l-5.36 3.89 2.05 6.31L14 15.7 8.63 19.6l2.05-6.31L5.32 9.4h6.63L14 3.1z',
  );
  star.setAttribute('fill', '#ffdf00');

  flag.append(background, star);
  badgeLabel.append(flag, document.createTextNode('Vietnam'));
}

const root = document.querySelector('#root');
if (root) {
  new MutationObserver(() => {
    addSocialLinks();
    addVietnamFlag();
  }).observe(root, { childList: true, subtree: true });
}

addSocialLinks();
addVietnamFlag();
