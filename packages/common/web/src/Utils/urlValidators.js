import linkifyIt from 'linkify-it';
const linkify = linkifyIt();

export const isValidUrl = url => url[0] !== '#' && linkify.test(url);

export const getUrlMatches = text => linkify.match(text) || [];

export const normalizeUrl = url => (linkify.match(url) || [{}])[0].url;

export const startsWithHttps = url => /^https:/.test(url);

export const hasProtocol = url => /^[a-z]+:/i.test(url);

export const isValidImgSrc = url => {
  return new Promise(resolve => {
    const image = document.createElement('img');
    image.src = url;
    image.onload = () => {
      resolve(true);
    };
    image.onerror = () => {
      resolve(false);
    };
  });
};
