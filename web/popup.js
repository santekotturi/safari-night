(async () => {
 const config=await browser.storage.local.get({enabled:true,excluded:[]});
 const [tab]=await browser.tabs.query({active:true,currentWindow:true});
 const host=tab?.url ? new URL(tab.url).hostname : '';
 const toggle=document.getElementById('enabled');toggle.checked=config.enabled;
 toggle.onchange=()=>browser.storage.local.set({enabled:toggle.checked});
 const button=document.getElementById('site');
 function render(){button.checked=!config.excluded.includes(host);document.getElementById('host').textContent=host;}
 button.disabled=!host;button.onchange=async()=>{config.excluded=config.excluded.includes(host)?config.excluded.filter(x=>x!==host):[...config.excluded,host];await browser.storage.local.set({excluded:config.excluded});render();};render();
})();
