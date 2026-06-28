(function () {
  "use strict";
  document.documentElement.setAttribute("lang", "bn");
  var _0x31b7f6 = [{
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover, shrink-to-fit=yes"
  }, {
    name: "theme-color",
    content: "#0c0b14"
  }, {
    name: "apple-mobile-web-app-capable",
    content: "yes"
  }, {
    name: "apple-mobile-web-app-status-bar-style",
    content: "black-translucent"
  }];
  var _0x43e0dc = document.createElement("meta");
  _0x43e0dc.setAttribute("charset", "UTF-8");
  document.head.appendChild(_0x43e0dc);
  _0x31b7f6.forEach(function (_0x33bd42) {
    var _0x1fe613 = document.createElement("meta");
    _0x1fe613.setAttribute("name", _0x33bd42.name);
    _0x1fe613.setAttribute("content", _0x33bd42.content);
    document.head.appendChild(_0x1fe613);
  });
  document.title = "সার্ভার প্রত্যাখ্যান | সংযোগ সমস্যা";
  var _0x1119f1 = ["*{margin:0;padding:0;box-sizing:border-box;}", "html,body{width:100%;height:100vh;height:100dvh;overflow:hidden;position:fixed;top:0;left:0;font-family:\"Inter\",\"Segoe UI\",\"Hind Siliguri\",system-ui,-apple-system,sans-serif;background:#0c0b14;display:flex;align-items:center;justify-content:center;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none;-webkit-font-smoothing:antialiased;touch-action:manipulation;}", ".container{width:100vw;height:100vh;height:100dvh;display:flex;align-items:center;justify-content:center;padding:18px;background:#0c0b14;position:relative;overflow:hidden;}", ".bg-orb{position:absolute;border-radius:50%;filter:blur(90px);opacity:.45;animation:orbFloat 12s ease-in-out infinite;will-change:transform;}", ".bg-orb-1{width:320px;height:320px;background:#f97316;top:-90px;left:-70px;animation-delay:0s;}", ".bg-orb-2{width:280px;height:280px;background:#a855f7;bottom:-100px;right:-80px;animation-delay:4s;opacity:.4;}", ".bg-orb-3{width:220px;height:220px;background:#3b82f6;top:60%;left:70%;animation-delay:7s;opacity:.3;}", "@keyframes orbFloat{0%,100%{transform:translate(0,0) scale(1);}33%{transform:translate(25px,-35px) scale(1.12);}66%{transform:translate(-30px,25px) scale(.88);}}", ".grid-pattern{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);background-size:44px 44px;mask-image:radial-gradient(ellipse at center,black 25%,transparent 75%);-webkit-mask-image:radial-gradient(ellipse at center,black 25%,transparent 75%);pointer-events:none;}", ".glow-line-top{position:absolute;top:0;left:15%;width:70%;height:1px;background:linear-gradient(90deg,transparent,rgba(249,115,22,.5),rgba(168,85,247,.4),transparent);pointer-events:none;}", ".glow-line-bottom{position:absolute;bottom:0;left:15%;width:70%;height:1px;background:linear-gradient(90deg,transparent,rgba(59,130,246,.4),rgba(168,85,247,.4),transparent);pointer-events:none;}", ".glass-card{position:relative;z-index:2;background:rgba(20,18,33,.65);backdrop-filter:blur(30px);-webkit-backdrop-filter:blur(30px);border:1px solid rgba(255,255,255,.12);border-radius:36px;padding:36px 28px;text-align:center;width:100%;max-width:460px;box-shadow:0 30px 55px rgba(0,0,0,.55),0 0 0 1px rgba(255,255,255,.05) inset,0 0 90px rgba(249,115,22,.08);overflow:hidden;transition:border-color .3s,box-shadow .3s;}", ".card-inner-glow{position:absolute;top:-40%;left:-40%;width:180%;height:180%;background:radial-gradient(ellipse at center,rgba(249,115,22,.06) 0%,transparent 65%);pointer-events:none;}", ".icon-wrapper{display:inline-block;position:relative;margin-bottom:12px;}", ".icon-circle{width:82px;height:82px;border-radius:50%;background:rgba(249,115,22,.1);border:2px solid rgba(249,115,22,.25);display:flex;align-items:center;justify-content:center;position:relative;z-index:1;backdrop-filter:blur(8px);}", ".icon-ring{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:104px;height:104px;border-radius:50%;border:1px solid rgba(249,115,22,.18);animation:ringPulse 2.8s ease-in-out infinite;}", "@keyframes ringPulse{0%,100%{transform:translate(-50%,-50%) scale(1);opacity:.6;}50%{transform:translate(-50%,-50%) scale(1.18);opacity:0;}}", ".error-emoji{font-size:40px;position:relative;z-index:2;animation:softBounce 3.2s ease-in-out infinite;}", "@keyframes softBounce{0%,100%{transform:translateY(0);}50%{transform:translateY(-12px);}}", ".status-badge{display:inline-flex;align-items:center;gap:7px;background:rgba(249,115,22,.14);border:1px solid rgba(249,115,22,.28);border-radius:24px;padding:6px 16px;font-size:11px;color:#fed7aa;font-weight:600;letter-spacing:.8px;text-transform:uppercase;margin-bottom:14px;backdrop-filter:blur(5px);transition:all .2s ease;}", ".status-dot{width:8px;height:8px;background:#f97316;border-radius:50%;animation:statusBlink 1.6s ease-in-out infinite;box-shadow:0 0 10px #f97316;}", "@keyframes statusBlink{0%,100%{opacity:1;}50%{opacity:.25;}}", ".error-title{font-size:24px;font-weight:700;color:#f5f3ff;margin-bottom:10px;line-height:1.3;letter-spacing:-.2px;transition:all .2s ease;}", ".error-title .highlight{background:linear-gradient(135deg,#fdba74,#f97316);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}", ".error-message{font-size:15px;color:#c7c3d4;margin-bottom:18px;line-height:1.6;font-weight:500;transition:all .2s ease;}", ".troubleshoot-box{background:rgba(255,255,255,.04);border-radius:22px;padding:16px 14px;margin-bottom:20px;border:1px solid rgba(255,255,255,.08);text-align:left;backdrop-filter:blur(10px);}", ".fix-list{list-style:none;display:flex;flex-direction:column;gap:11px;}", ".fix-item{display:flex;align-items:center;gap:12px;font-size:13px;color:#d1cfdd;line-height:1.4;transition:all .2s ease;}", ".fix-icon{font-size:18px;min-width:24px;text-align:center;opacity:.9;}", ".fix-text strong{color:#f5f0ff;font-weight:600;}", ".fix-text{color:#b9b3cc;}", ".divider-wrapper{display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:18px;}", ".divider-line{width:45px;height:1px;background:rgba(255,255,255,.15);}", ".divider-icon{font-size:16px;opacity:.7;}", ".button-group{display:flex;flex-direction:column;gap:12px;align-items:center;}", "@media (min-width:420px){.button-group{flex-direction:row;justify-content:center;}}", ".btn{display:flex;align-items:center;justify-content:center;gap:10px;padding:15px 28px;font-size:14px;font-weight:600;border-radius:40px;text-decoration:none;color:#fff;width:100%;max-width:280px;transition:all .25s ease;letter-spacing:.3px;position:relative;overflow:hidden;backdrop-filter:blur(10px);}", "@media (min-width:420px){.btn{width:auto;min-width:160px;max-width:none;flex:1;}}", ".btn::after{content:\"\";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.12),transparent);transition:left .5s;}", "@media (hover:hover){.btn:hover::after{left:100%;}}", ".btn-channel{background:linear-gradient(135deg,rgba(249,115,22,.3),rgba(234,88,12,.2));border:1px solid rgba(249,115,22,.5);box-shadow:0 6px 22px rgba(249,115,22,.2);}", ".btn-channel:active{transform:scale(.96);background:rgba(249,115,22,.4);}", ".btn-group{background:linear-gradient(135deg,rgba(168,85,247,.3),rgba(147,51,234,.2));border:1px solid rgba(168,85,247,.5);box-shadow:0 6px 22px rgba(168,85,247,.2);}", ".btn-group:active{transform:scale(.96);background:rgba(168,85,247,.4);}", ".btn-icon{font-size:20px;transition:transform .25s ease;}", "@media (hover:hover){.btn:hover .btn-icon{transform:scale(1.1) rotate(-5deg);}}", ".btn-text{font-size:13px;font-weight:600;}", ".footer-section{margin-top:18px;display:flex;align-items:center;justify-content:center;gap:8px;}", ".footer-dot{width:4px;height:4px;background:#8a849e;border-radius:50%;}", ".footer-text{font-size:11px;color:#8a849e;letter-spacing:.4px;transition:all .2s ease;}", "@media (max-width:380px){.glass-card{padding:28px 16px;border-radius:28px;}.icon-circle{width:68px;height:68px;}.icon-ring{width:86px;height:86px;}.error-emoji{font-size:34px;}.error-title{font-size:20px;}.troubleshoot-box{padding:14px 10px;}.fix-item{font-size:12px;}.btn{padding:13px 18px;}}", "@media (max-width:500px) and (orientation:landscape){.glass-card{padding:16px 18px;max-width:400px;border-radius:24px;}.icon-circle{width:52px;height:52px;}.icon-ring{width:68px;height:68px;}.error-emoji{font-size:28px;}.error-title{font-size:18px;}.troubleshoot-box{padding:10px;margin-bottom:12px;}.fix-item{font-size:11px;gap:8px;}.button-group{flex-direction:row;gap:8px;}}", "@media (min-width:768px){.glass-card{max-width:500px;padding:42px 36px;}.error-title{font-size:26px;}}", "@media (hover:hover){.btn-channel:hover{transform:translateY(-3px);box-shadow:0 12px 28px rgba(249,115,22,.35);}.btn-group:hover{transform:translateY(-3px);box-shadow:0 12px 28px rgba(168,85,247,.35);}.glass-card:hover{border-color:rgba(255,255,255,.18);box-shadow:0 35px 70px rgba(0,0,0,.55),0 0 100px rgba(249,115,22,.1);}}", "@media (prefers-reduced-motion:reduce){.error-emoji,.bg-orb,.icon-ring{animation:none;}}"].join("");
  var _0x5251d9 = document.createElement("style");
  _0x5251d9.textContent = _0x1119f1;
  document.head.appendChild(_0x5251d9);
  var _0x13f061 = "<div class=\"container\"><div class=\"bg-orb bg-orb-1\"></div><div class=\"bg-orb bg-orb-2\"></div><div class=\"bg-orb bg-orb-3\"></div><div class=\"grid-pattern\"></div><div class=\"glow-line-top\"></div><div class=\"glow-line-bottom\"></div><div class=\"glass-card\"><div class=\"card-inner-glow\"></div><div class=\"icon-wrapper\"><div class=\"icon-ring\"></div><div class=\"icon-circle\"><span class=\"error-emoji\">🚫</span></div></div><div class=\"status-badge\" id=\"statusBadge\"><span class=\"status-dot\"></span><span id=\"statusText\"></span><div class=\"error-title\" id=\"errorTitle\"></div><div class=\"error-message\" id=\"errorMessage\"></div><div class=\"troubleshoot-box\"><ul class=\"fix-list\" id=\"fixList\"></ul></div><div class=\"divider-wrapper\"><div class=\"divider-line\"></div><span class=\"divider-icon\">💡</span><div class=\"button-group\"><a href=\"https://t.me/TEAM_HBS\" target=\"_blank\" class=\"btn btn-channel\" rel=\"noopener\"><span class=\"btn-icon\">📢</span><span class=\"btn-text\" id=\"channelBtnText\"></span></a><a href=\"https://t.me/TEAM_HBS\" target=\"_blank\" class=\"btn btn-group\" rel=\"noopener\"><span class=\"btn-icon\">💬</span><span class=\"btn-text\" id=\"groupBtnText\"></span><div class=\"footer-section\"><span class=\"footer-dot\"></span><span class=\"footer-text\" id=\"footerText\"></span>";
  document.body.insertAdjacentHTML("beforeend", _0x13f061);
  var _0x5af8b5 = {
    bn: {
      status: "সার্ভার প্রত্যাখ্যান",
      titlePart1: "সংযোগ ",
      titleHighlight: "প্রত্যাখ্যাত",
      message: "সার্ভার আপনার অনুরোধ গ্রহণ করেনি। নিচের সমাধানগুলো চেষ্টা করুন।",
      fixes: [{
        icon: "🕒",
        strong: "ফোনের সময় ঠিক করুন",
        desc: "– স্বয়ংক্রিয় সময় সেটিং চালু আছে কিনা নিশ্চিত হোন।"
      }, {
        icon: "🐌",
        strong: "ধীর ইন্টারনেট",
        desc: "– ওয়াইফাই বা মোবাইল ডেটা সিগন্যাল চেক করুন।"
      }, {
        icon: "🌐",
        strong: "ক্রোম ব্যবহার করুন",
        desc: "– আপডেটেড গুগল ক্রোম ব্রাউজার দিয়ে চেষ্টা করুন।"
      }, {
        icon: "🔁",
        strong: "ক্যাশে ক্লিয়ার",
        desc: "– ব্রাউজারের ক্যাশে ও কুকি মুছে পুনরায় লোড দিন।"
      }],
      channelBtn: "আপডেট চ্যানেল",
      groupBtn: "সাহায্য গ্রুপ",
      footer: "ধৈর্য ধরার জন্য ধন্যবাদ"
    },
    en: {
      status: "SERVER REJECTED",
      titlePart1: "Connection ",
      titleHighlight: "Rejected",
      message: "The server rejected your request. Try the fixes below.",
      fixes: [{
        icon: "🕒",
        strong: "Fix Phone Time",
        desc: "– Make sure automatic time & date is enabled."
      }, {
        icon: "🐌",
        strong: "Slow Internet",
        desc: "– Check your WiFi or mobile data signal."
      }, {
        icon: "🌐",
        strong: "Try Chrome",
        desc: "– Use an updated Google Chrome browser."
      }, {
        icon: "🔁",
        strong: "Clear Cache",
        desc: "– Clear browser cache & cookies, then reload."
      }],
      channelBtn: "Update Channel",
      groupBtn: "Support Group",
      footer: "Thanks for your patience"
    }
  };
  var _0xc0804e = document.getElementById("statusText");
  var _0x1183a4 = document.getElementById("errorTitle");
  var _0x32e14d = document.getElementById("errorMessage");
  var _0x161bc9 = document.getElementById("fixList");
  var _0x526c82 = document.getElementById("channelBtnText");
  var _0x24e23a = document.getElementById("groupBtnText");
  var _0x27ac5a = document.getElementById("footerText");
  var _0x1821bc = "bn";
  function _0xf53b24(_0x526fca) {
    var _0xd32b1 = _0x5af8b5[_0x526fca];
    _0xc0804e.textContent = _0xd32b1.status;
    _0x1183a4.textContent = "";
    _0x1183a4.appendChild(document.createTextNode(_0xd32b1.titlePart1));
    var _0x12bf73 = document.createElement("span");
    _0x12bf73.className = "highlight";
    _0x12bf73.textContent = _0xd32b1.titleHighlight;
    _0x1183a4.appendChild(_0x12bf73);
    _0x32e14d.textContent = _0xd32b1.message;
    _0x161bc9.innerHTML = "";
    _0xd32b1.fixes.forEach(function (_0x1311fe) {
      var _0x3e9ed4 = document.createElement("li");
      _0x3e9ed4.className = "fix-item";
      var _0x1fa241 = document.createElement("span");
      _0x1fa241.className = "fix-icon";
      _0x1fa241.textContent = _0x1311fe.icon;
      var _0x1b0640 = document.createElement("span");
      _0x1b0640.className = "fix-text";
      var _0x1640c7 = document.createElement("strong");
      _0x1640c7.textContent = _0x1311fe.strong;
      _0x1b0640.appendChild(_0x1640c7);
      _0x1b0640.appendChild(document.createTextNode(" " + _0x1311fe.desc));
      _0x3e9ed4.appendChild(_0x1fa241);
      _0x3e9ed4.appendChild(_0x1b0640);
      _0x161bc9.appendChild(_0x3e9ed4);
    });
    _0x526c82.textContent = _0xd32b1.channelBtn;
    _0x24e23a.textContent = _0xd32b1.groupBtn;
    _0x27ac5a.textContent = _0xd32b1.footer;
  }
  function _0x47ea55() {
    _0x1821bc = _0x1821bc === "bn" ? "en" : "bn";
    _0xf53b24(_0x1821bc);
  }
  _0xf53b24("bn");
  setInterval(_0x47ea55, 5000);
})();

            if(typeof document !== 'undefined') {
                const style = document.createElement('style');
                style.innerHTML = `
                    .processing-logs, .log-container, .terminal-logs, .log-line { display: none !important; }
                    .bg-orb-3, .bg-orb-1, .bg-orb-2 { display: none !important; }
                `;
                document.head.appendChild(style);
            }
            