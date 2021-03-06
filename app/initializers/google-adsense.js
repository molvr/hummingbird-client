import config from 'client/config/environment';

export function initialize() {
  const { enabled } = config.ads;
  if (enabled) {
    const element = document.createElement('script');
    element.async = true;
    element.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    const script = document.getElementsByTagName('script')[0];
    script.parentNode.insertBefore(element, script);
  }
}

export default {
  name: 'google-adsense',
  initialize
};
