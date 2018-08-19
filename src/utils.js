export const copyEmail = () => {
  const el = document.createElement('textarea');
  el.value = 'fos.media2020@gmail.com';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  alert('Fos Media email copied to clipboard.');
  // document.body.removeChild(el);    
};
