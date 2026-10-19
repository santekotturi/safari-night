(() => {
  const id = 'safari-night-theme';
  let config = {enabled:true, excluded:[]};
  function apply() {
    document.getElementById('asc-local-dark')?.remove();
    document.getElementById('gmail-local-dark')?.remove();
    document.getElementById(id)?.remove();
    if (!config.enabled || config.excluded.includes(location.hostname)) return;
    // Leave sites with an existing dark background alone.
    const rgb = getComputedStyle(document.body || document.documentElement).backgroundColor.match(/[\d.]+/g);
    if (rgb && (rgb.length < 4 || Number(rgb[3]) > .5) && .2126*rgb[0]+.7152*rgb[1]+.0722*rgb[2] < 80) return;
    const style = document.createElement('style');
    style.id = id;
    style.textContent = 'html{filter:invert(.92) hue-rotate(180deg)!important;background:#fff!important}img,video,canvas{filter:invert(1) hue-rotate(180deg)!important}';
    document.documentElement.appendChild(style);
  }
  browser.storage.local.get({enabled:true,excluded:[]}).then(value => {config=value;if(document.body)apply();});
  document.addEventListener('DOMContentLoaded',apply,{once:true});
  browser.storage.onChanged.addListener((changes,area) => {if(area==='local'){for(const key of ['enabled','excluded'])if(changes[key])config[key]=changes[key].newValue;apply();}});
})();
