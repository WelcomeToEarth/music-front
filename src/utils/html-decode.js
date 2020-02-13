export default (s = '') => {
  if (!s) return s;
  s = s.replace(/&amp;/g, '&');
  s = s.replace(/&lt;/g, '<');
  s = s.replace(/&gt;/g, '>');
  s = s.replace(/&nbsp;/g, ' ');
  s = s.replace(/&#39;/g, '\'');
  s = s.replace(/&quot;/g, '\'');
  s = s.replace(/<br\/>/g, '\n');
  return s;
};
