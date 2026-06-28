(function () {
  "use strict";
  const _0x496cbf = {
    _logs: [],
    log: function (_0x216e6d, _0x524246, _0x3951c7) {
      const _0x3059c6 = {
        time: new Date().toISOString().split("T")[1].split(".")[0],
        tag: _0x216e6d,
        msg: _0x524246,
        data: _0x3951c7 || null
      };
      this._logs.push(_0x3059c6);
      if (this._logs.length > 500) {
        this._logs.shift();
      }
      console.log("[" + _0x3059c6.time + "] [" + _0x216e6d + "] " + _0x524246, _0x3951c7 || "");
    },
    error: function (_0x61b07a, _0x5dbd3e, _0x6f976e) {
      const _0x39f3e2 = {
        time: new Date().toISOString().split("T")[1].split(".")[0],
        tag: _0x61b07a,
        msg: _0x5dbd3e,
        data: _0x6f976e || null,
        error: true
      };
      this._logs.push(_0x39f3e2);
      if (this._logs.length > 500) {
        this._logs.shift();
      }
      console.error("[" + _0x39f3e2.time + "] [" + _0x61b07a + "] " + _0x5dbd3e, _0x6f976e || "");
    },
    getLogs: function (_0x5388a5) {
      return this._logs.slice(-(_0x5388a5 || 50));
    },
    dump: function () {
      console.table(this._logs);
    }
  };
  let _0x33fa0d = 0;
  if (typeof window.n !== "undefined") {
    const _0x15ed44 = window.n;
    const _0x284703 = parseInt(_0x15ed44);
    if (!isNaN(_0x284703)) {
      _0x33fa0d = _0x284703;
    } else {
      _0x33fa0d = 0;
    }
  }
  _0x496cbf.log("INIT", "USER_ID set", _0x33fa0d);
  let _0x1ace19 = {
    status: 1,
    musicListUrl: "https://raw.githubusercontent.com/TEAM_HBS/Aincrad/main/assets/music.txt",
    apiBaseUrl: "https://lol.a2mbd3.workers.dev",
    apiKey: "abdullah",
    totpSecret: "JBSWY3DPEHPK3PXP",
    fallbackRedirectUrl: "https://htmlpreview.github.io/?https://raw.githubusercontent.com/TEAM_HBS/Aincrad/main/index.html",
    initProgressTime: 10000,
    exploitProgressTime: 30000,
    minProgressTime: 30000,
    autoInitDelay: 10000
  };
  const _0x5ef037 = {
    id: _0x33fa0d,
    name: "TEAM_HBS",
    tgChannel: "t.me/solo_crx",
    password: "0",
    banned: 0
  };
  let _0x1f5c06 = _0x5ef037;
  let _0x576e78 = null;
  let _0x46a44a = [];
  let _0x50cc51 = -1;
  let _0x48e29f = null;
  let _0x3e0ffb = null;
  let _0x5e0389 = null;
  let _0x3d863c = null;
  let _0x1d1c4f = function () {};
  let _0xde86b1 = null;
  let _0x243ffa = null;
  let _0x49bbb3 = false;
  let _0x1eec58 = false;
  let _0x209461 = false;
  let _0x222117 = null;
  let _0x8afbd0 = null;
  let _0x11c66 = [];
  let _0xcbd31c = null;
  let _0x3eafda = false;
  let _0x1904f7 = null;
  let _0x1d422a = null;
  let _0x393b6d = null;
  let _0x1c4c8d = false;
  let _0x488f13 = false;
  let _0x4cd515 = null;
  let _0x41d9dc = "------";
  let _0x5adaee = null;
  let _0x405098 = false;
  let _0xef19e3 = null;
  let _0x51f05e = null;
  let _0x3b01f2 = null;
  let _0x5f4af9 = [];
  let _0x27262a = null;
  let _0x48a895 = false;
  let _0x2e2f36 = false;
  let _0x3b9600 = null;
  let _0x2ff3db = false;
  let _0x173b83 = null;
  class _0x455d29 {
    constructor(_0x3b2f39 = "JBSWY3DPEHPK3PXP") {
      this.secret = _0x3b2f39;
      this.timeStep = 30;
      this.digits = 6;
      this._checkCrypto();
    }
    _sha1(_0x153e4d) {
      function _0x44856c(_0x5b1572, _0x5da084) {
        return _0x5b1572 << _0x5da084 | _0x5b1572 >>> 32 - _0x5da084;
      }
      let _0x5655c1 = 1732584193;
      let _0x346bf3 = 4023233417;
      let _0x4b2809 = 2562383102;
      let _0x31d19f = 271733878;
      let _0x42df0f = 3285377520;
      const _0x52734d = _0x153e4d.length * 8;
      _0x153e4d.push(128);
      while (_0x153e4d.length % 64 !== 56) {
        _0x153e4d.push(0);
      }
      _0x153e4d.push(0, 0, 0, 0);
      for (let _0x1acfce = 3; _0x1acfce >= 0; _0x1acfce--) {
        _0x153e4d.push(_0x52734d >>> _0x1acfce * 8 & 255);
      }
      for (let _0x5de47e = 0; _0x5de47e < _0x153e4d.length; _0x5de47e += 64) {
        const _0x2d44c8 = [];
        for (let _0x148951 = 0; _0x148951 < 16; _0x148951++) {
          _0x2d44c8[_0x148951] = _0x153e4d[_0x5de47e + _0x148951 * 4] << 24 | _0x153e4d[_0x5de47e + _0x148951 * 4 + 1] << 16 | _0x153e4d[_0x5de47e + _0x148951 * 4 + 2] << 8 | _0x153e4d[_0x5de47e + _0x148951 * 4 + 3];
        }
        for (let _0x4bca9f = 16; _0x4bca9f < 80; _0x4bca9f++) {
          _0x2d44c8[_0x4bca9f] = _0x44856c(_0x2d44c8[_0x4bca9f - 3] ^ _0x2d44c8[_0x4bca9f - 8] ^ _0x2d44c8[_0x4bca9f - 14] ^ _0x2d44c8[_0x4bca9f - 16], 1);
        }
        let _0x530b3a = _0x5655c1;
        let _0x1365dc = _0x346bf3;
        let _0xdbc2ce = _0x4b2809;
        let _0x369495 = _0x31d19f;
        let _0x1f5760 = _0x42df0f;
        for (let _0x49a25c = 0; _0x49a25c < 80; _0x49a25c++) {
          let _0xd2d1b1;
          let _0x4befe6;
          if (_0x49a25c < 20) {
            _0xd2d1b1 = _0x1365dc & _0xdbc2ce | ~_0x1365dc & _0x369495;
            _0x4befe6 = 1518500249;
          } else if (_0x49a25c < 40) {
            _0xd2d1b1 = _0x1365dc ^ _0xdbc2ce ^ _0x369495;
            _0x4befe6 = 1859775393;
          } else if (_0x49a25c < 60) {
            _0xd2d1b1 = _0x1365dc & _0xdbc2ce | _0x1365dc & _0x369495 | _0xdbc2ce & _0x369495;
            _0x4befe6 = 2400959708;
          } else {
            _0xd2d1b1 = _0x1365dc ^ _0xdbc2ce ^ _0x369495;
            _0x4befe6 = 3395469782;
          }
          const _0x2df9a0 = _0x44856c(_0x530b3a, 5) + _0xd2d1b1 + _0x1f5760 + _0x4befe6 + _0x2d44c8[_0x49a25c] >>> 0;
          _0x1f5760 = _0x369495;
          _0x369495 = _0xdbc2ce;
          _0xdbc2ce = _0x44856c(_0x1365dc, 30);
          _0x1365dc = _0x530b3a;
          _0x530b3a = _0x2df9a0;
        }
        _0x5655c1 = _0x5655c1 + _0x530b3a >>> 0;
        _0x346bf3 = _0x346bf3 + _0x1365dc >>> 0;
        _0x4b2809 = _0x4b2809 + _0xdbc2ce >>> 0;
        _0x31d19f = _0x31d19f + _0x369495 >>> 0;
        _0x42df0f = _0x42df0f + _0x1f5760 >>> 0;
      }
      const _0x183d87 = [];
      [_0x5655c1, _0x346bf3, _0x4b2809, _0x31d19f, _0x42df0f].forEach(_0x3d8a0c => {
        for (let _0x1c3649 = 3; _0x1c3649 >= 0; _0x1c3649--) {
          _0x183d87.push(_0x3d8a0c >>> _0x1c3649 * 8 & 255);
        }
      });
      return _0x183d87;
    }
    async hmacSha1(_0x132d20, _0x4ce490) {
      const _0x1feb95 = Array.from(_0x132d20);
      const _0x22395f = Array.from(new Uint8Array(_0x4ce490));
      const _0xefb830 = 64;
      let _0xf0adee = _0x1feb95.length > _0xefb830 ? this._sha1([..._0x1feb95]) : [..._0x1feb95];
      while (_0xf0adee.length < _0xefb830) {
        _0xf0adee.push(0);
      }
      const _0x2ed392 = _0xf0adee.map(_0x181158 => _0x181158 ^ 54);
      const _0x14c32b = _0xf0adee.map(_0x617e52 => _0x617e52 ^ 92);
      const _0x19cccd = this._sha1([..._0x2ed392, ..._0x22395f]);
      const _0x2c08ad = this._sha1([..._0x14c32b, ..._0x19cccd]);
      return new Uint8Array(_0x2c08ad);
    }
    _checkCrypto() {
      this.cryptoAvailable = true;
      this.cryptoError = null;
      _0x496cbf.log("TOTP", "Using pure JS HMAC-SHA1 (no crypto.subtle needed)");
    }
    base32ToHex(_0x3d824a) {
      const _0x28380f = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
      let _0x49ac18 = "";
      let _0x1200bc = "";
      _0x3d824a = _0x3d824a.toUpperCase().replace(/=+$/, "");
      for (let _0x711f01 = 0; _0x711f01 < _0x3d824a.length; _0x711f01++) {
        const _0x1e027d = _0x28380f.indexOf(_0x3d824a.charAt(_0x711f01));
        if (_0x1e027d === -1) {
          throw new Error("Invalid base32 character");
        }
        _0x49ac18 += _0x1e027d.toString(2).padStart(5, "0");
      }
      for (let _0x5ef1c2 = 0; _0x5ef1c2 + 4 <= _0x49ac18.length; _0x5ef1c2 += 4) {
        const _0x21e84b = _0x49ac18.substr(_0x5ef1c2, 4);
        _0x1200bc += parseInt(_0x21e84b, 2).toString(16);
      }
      return _0x1200bc;
    }
    async generate(_0x1d7864 = 0) {
      _0x496cbf.log("TOTP", "generate() called with offset=" + _0x1d7864);
      const _0x323710 = performance.now();
      const _0xcc5140 = this.base32ToHex(this.secret);
      const _0x33d58e = Math.floor(Date.now() / 1000);
      const _0x4e67dc = Math.floor(_0x33d58e / this.timeStep) + _0x1d7864;
      _0x496cbf.log("TOTP", "Epoch=" + _0x33d58e + ", Time window=" + _0x4e67dc);
      const _0x3ed730 = new ArrayBuffer(8);
      const _0x261b8f = new DataView(_0x3ed730);
      _0x261b8f.setUint32(4, _0x4e67dc, false);
      const _0x5062b2 = new Uint8Array(_0xcc5140.match(/.{2}/g).map(_0xae29c3 => parseInt(_0xae29c3, 16)));
      const _0x458d51 = await this.hmacSha1(_0x5062b2, _0x3ed730);
      const _0x454682 = _0x458d51[_0x458d51.length - 1] & 15;
      const _0x4bdcd8 = (_0x458d51[_0x454682] & 127) << 24 | (_0x458d51[_0x454682 + 1] & 255) << 16 | (_0x458d51[_0x454682 + 2] & 255) << 8 | _0x458d51[_0x454682 + 3] & 255;
      const _0x5a2b11 = _0x4bdcd8 % Math.pow(10, this.digits);
      const _0x228d46 = _0x5a2b11.toString().padStart(this.digits, "0");
      const _0x1bdcd6 = (performance.now() - _0x323710).toFixed(2);
      _0x496cbf.log("TOTP", "PIN: " + _0x228d46 + " (" + _0x1bdcd6 + "ms)");
      return _0x228d46;
    }
  }
  const _0x2ad6fe = new _0x455d29(_0x1ace19.totpSecret);
  _0x496cbf.log("INIT", "TOTPGenerator ready (pure JS)");
  function _0x4fcedd() {
    if (document.getElementById("nb-dynamic-styles")) {
      return;
    }
    const _0x3bb37a = document.createElement("style");
    _0x3bb37a.id = "nb-dynamic-styles";
    _0x3bb37a.textContent = "\n      :root{--bg-color:#e0e5ec;--electric-glow-1:#00f2ff;--electric-glow-2:#ff00ff;--success-color:#2ecc71;--danger-color:#ff4757;--emboss-light:#ffffff;--emboss-shadow:#a3b1c6;--text-color:#4a5568;--text-muted:#718096;--warning-color:#ffa500;--info-color:#00b4d8}\n      @keyframes nb-rotate-glow{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}\n      @keyframes nb-rotate-glow-reverse{0%{transform:rotate(360deg)}100%{transform:rotate(0deg)}}\n      @keyframes nb-fadeIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}\n      @keyframes nb-slideUp{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}\n      @keyframes nb-toast-in{from{opacity:0;transform:translateX(-50%) translateY(15px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}\n      @keyframes nb-progress-glow{0%,100%{filter:hue-rotate(0deg)}50%{filter:hue-rotate(180deg)}}\n      @keyframes nb-pulse{0%,100%{opacity:0.6}50%{opacity:1}}\n      @keyframes nb-shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}\n      @keyframes nb-glow-pulse{0%,100%{opacity:0.5}50%{opacity:0.9}}\n      @keyframes nb-log-highlight{0%{background:transparent}50%{background:rgba(0,242,255,0.06)}100%{background:transparent}}\n      @keyframes nb-log-success{0%{background:transparent}50%{background:rgba(46,204,113,0.06)}100%{background:transparent}}\n      @keyframes nb-log-error{0%{background:transparent}50%{background:rgba(255,71,87,0.06)}100%{background:transparent}}\n      @keyframes nb-key-found{0%{transform:scale(1)}50%{transform:scale(1.05);background:rgba(255,0,255,0.1)}100%{transform:scale(1)}}\n      .nb-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.3);z-index:2147483647;display:grid;place-items:center;padding:20px;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);animation:nb-fadeIn 0.3s ease;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;overflow:hidden}\n      .nb-electric-wrapper{position:relative;padding:3px;border-radius:24px;background:rgba(0,0,0,0.05);overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.1);width:420px;max-width:calc(100vw - 40px);flex-shrink:0}\n      .nb-glow-layer{position:absolute;inset:-50%;pointer-events:none;z-index:0;opacity:1;animation:nb-glow-pulse 3s ease-in-out infinite}\n      .nb-glow-layer.glow-default{background:conic-gradient(transparent 0deg,rgba(0,242,255,1) 60deg,transparent 120deg,rgba(255,0,255,1) 180deg,transparent 240deg,rgba(0,242,255,1) 300deg,transparent 360deg);animation:nb-rotate-glow 4s linear infinite;opacity:1}\n      .nb-glow-layer.glow-focus-1{background:conic-gradient(transparent 0deg,var(--electric-glow-1) 90deg,transparent 180deg,var(--electric-glow-2) 270deg,transparent 360deg);animation:nb-rotate-glow 2.5s linear infinite;opacity:0;transition:opacity 0.4s ease}\n      .nb-glow-layer.glow-focus-2{background:conic-gradient(transparent 0deg,var(--electric-glow-2) 90deg,transparent 180deg,var(--electric-glow-1) 270deg,transparent 360deg);animation:nb-rotate-glow-reverse 3s linear infinite;opacity:0;transition:opacity 0.4s ease}\n      .nb-container{position:relative;background:var(--bg-color);padding:24px 20px;border-radius:21px;text-align:center;z-index:1;width:100%;box-sizing:border-box;max-height:calc(100vh - 46px);overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch}\n      .nb-container.overflow-visible{overflow-y:visible}\n      .nb-container::-webkit-scrollbar{width:3px}\n      .nb-container::-webkit-scrollbar-thumb{background:var(--emboss-shadow);border-radius:10px}\n      .nb-title{color:var(--text-color);margin:0 0 4px;font-weight:800;font-size:20px;letter-spacing:1px;word-break:break-word}\n      .nb-subtitle{color:var(--text-muted);font-size:12px;margin:0 0 18px;letter-spacing:2px;line-height:1.5}\n      .nb-emboss-input{width:100%;padding:14px;border:none;outline:none;background:var(--bg-color);border-radius:14px;font-size:15px;font-weight:700;text-align:center;color:var(--text-color);letter-spacing:4px;box-shadow:inset 6px 6px 12px var(--emboss-shadow),inset -6px -6px 12px var(--emboss-light);transition:all 0.3s cubic-bezier(0.4,0,0.2,1);box-sizing:border-box;font-family:inherit}\n      .nb-emboss-input:focus{box-shadow:inset 2px 2px 5px var(--emboss-shadow),inset -2px -2px 5px var(--emboss-light),0 0 15px var(--electric-glow-1)}\n      .nb-emboss-input.error{box-shadow:inset 6px 6px 12px var(--emboss-shadow),inset -6px -6px 12px var(--emboss-light),0 0 0 2px var(--danger-color)!important;animation:nb-shake 0.4s ease}\n      .nb-emboss-input.success{box-shadow:inset 6px 6px 12px var(--emboss-shadow),inset -6px -6px 12px var(--emboss-light),0 0 0 2px var(--success-color)!important}\n      .nb-error-text{color:var(--danger-color);font-size:11px;font-weight:600;margin:6px 0 10px;display:none;letter-spacing:1px}\n      .nb-emboss-btn{width:100%;padding:14px;border:none;border-radius:14px;background:var(--bg-color);color:var(--text-color);font-weight:700;font-size:13px;cursor:pointer;letter-spacing:2px;font-family:inherit;text-transform:uppercase;box-shadow:6px 6px 12px var(--emboss-shadow),-6px -6px 12px var(--emboss-light);transition:all 0.2s ease;margin-bottom:10px;flex-shrink:0}\n      .nb-emboss-btn:active{box-shadow:inset 4px 4px 8px var(--emboss-shadow),inset -4px -4px 8px var(--emboss-light);transform:scale(0.98)}\n      .nb-emboss-btn:disabled{box-shadow:inset 4px 4px 8px var(--emboss-shadow),inset -4px -4px 8px var(--emboss-light)!important;transform:none!important;opacity:0.7;cursor:not-allowed}\n      .nb-unban-btn{background:linear-gradient(135deg, #667eea 0%, #764ba2 100%)!important;color:white!important;box-shadow:6px 6px 12px var(--emboss-shadow),-6px -6px 12px var(--emboss-light),0 0 20px rgba(102,126,234,0.3)!important}\n      .nb-unban-btn:active{box-shadow:inset 4px 4px 8px var(--emboss-shadow),inset -4px -4px 8px var(--emboss-light),0 0 10px rgba(102,126,234,0.2)!important}\n      .nb-music-btn{position:absolute;top:12px;right:12px;z-index:2;background:var(--bg-color);border:none;color:var(--text-color);border-radius:50%;width:34px;height:34px;cursor:pointer;font-size:15px;display:flex;align-items:center;justify-content:center;box-shadow:3px 3px 6px var(--emboss-shadow),-3px -3px 6px var(--emboss-light);transition:all 0.2s ease;flex-shrink:0}\n      .nb-music-btn:active{box-shadow:inset 3px 3px 6px var(--emboss-shadow),inset -3px -3px 6px var(--emboss-light)}\n      .nb-divider{width:50px;height:2px;background:linear-gradient(90deg,transparent,var(--text-muted),transparent);margin:12px auto}\n      .nb-uid{color:var(--text-muted);font-size:9px;letter-spacing:4px;opacity:0.7}\n      .nb-track{min-height:16px;margin-bottom:16px;font-size:9px;color:var(--text-muted);opacity:0.5;letter-spacing:1px}\n      .nb-footer{font-size:7px;color:var(--text-muted);opacity:1;margin-top:8px;letter-spacing:1px;flex-shrink:0}\n      .nb-footer a{color:#000;text-decoration:none;font-size:inherit;text-shadow:0 0 4px rgba(108,92,231,0.7),0 0 10px rgba(108,92,231,0.5),0 0 20px rgba(108,92,231,0.3)}\n      .nb-live-dot{width:7px;height:7px;background:var(--danger-color);border-radius:50%;box-shadow:0 0 6px var(--danger-color);animation:nb-pulse 1.5s infinite;flex-shrink:0}\n      .nb-log-area{color:var(--text-muted);font-size:8.5px;line-height:1.4;text-align:left;max-height:35vh;overflow-y:auto;overflow-x:hidden;padding:12px;margin-bottom:10px;border-radius:12px;background:var(--bg-color);box-shadow:inset 4px 4px 8px var(--emboss-shadow),inset -4px -4px 8px var(--emboss-light);word-break:break-all;-webkit-overflow-scrolling:touch;font-family:'Segoe UI',Roboto,sans-serif}\n      .nb-log-area::-webkit-scrollbar{width:2px}\n      .nb-log-area::-webkit-scrollbar-thumb{background:var(--emboss-shadow);border-radius:10px}\n      .nb-progress-bar-bg{width:100%;height:6px;background:var(--bg-color);border-radius:10px;box-shadow:inset 3px 3px 6px var(--emboss-shadow),inset -3px -3px 6px var(--emboss-light);overflow:hidden;margin:8px 0;flex-shrink:0}\n      .nb-progress-bar-fill{height:100%;width:0%;border-radius:10px;background:linear-gradient(90deg,var(--electric-glow-1),var(--electric-glow-2),var(--success-color));background-size:200% 100%;animation:nb-progress-glow 4s linear infinite;transition:width 0.15s linear}\n      .nb-progress-bar-fill.error-fill{background:linear-gradient(90deg,var(--danger-color),var(--warning-color),var(--danger-color))!important}\n      .nb-progress-label{display:flex;justify-content:space-between;align-items:center;font-size:8px;letter-spacing:2px;color:var(--text-color);margin-bottom:4px;flex-shrink:0}\n      .nb-success-check{width:45px;height:45px;background:var(--success-color);color:#fff;border-radius:50%;font-size:22px;display:flex;justify-content:center;align-items:center;margin:0 auto 8px;box-shadow:0 0 20px rgba(46,204,113,0.4);animation:nb-fadeIn 0.4s ease forwards;flex-shrink:0}\n      .nb-exploit-header{display:flex;align-items:center;gap:6px;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--emboss-shadow);flex-shrink:0}\n      .nb-exploit-title{color:var(--text-color);font-size:8px;letter-spacing:2px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}\n      .nb-status-icon{font-size:45px;margin-bottom:10px}\n      .nb-suspended-icon{font-size:45px;margin-bottom:10px;animation:nb-pulse 2s infinite}\n      .nb-status-user{color:var(--text-muted);font-size:10px;line-height:1.4}\n      .nb-loading-spinner{display:inline-block;width:18px;height:18px;border:2px solid var(--emboss-shadow);border-radius:50%;border-top-color:var(--electric-glow-1);animation:nb-rotate-glow 1s linear infinite;margin-right:8px;vertical-align:middle}\n      .nb-log-entry{display:flex;align-items:center;margin-bottom:2px;padding:2px 6px;border-radius:4px;animation:nb-slideUp 0.3s ease}\n      .nb-log-entry.log-info{background:transparent}\n      .nb-log-entry.log-success{animation:nb-log-success 1.5s ease}\n      .nb-log-entry.log-error{animation:nb-log-error 1.5s ease}\n      .nb-log-entry.log-highlight{animation:nb-log-highlight 1.5s ease}\n      .nb-log-entry.log-key-found{animation:nb-key-found 0.5s ease}\n      .nb-log-icon{font-size:10px;margin-right:5px;min-width:14px;text-align:center;flex-shrink:0}\n      .nb-log-text{font-size:8.5px;line-height:1.3;flex:1;font-weight:600;letter-spacing:0.3px}\n      .nb-retry-badge{display:inline-block;background:var(--warning-color);color:#fff;font-size:7px;padding:1px 4px;border-radius:3px;margin-left:4px;font-weight:700}\n      .nb-log-separator{text-align:center;margin:2px 0;opacity:0.25}\n    ";
    document.head.appendChild(_0x3bb37a);
  }
  function _0x2903cf(_0x15bda3) {
    const _0x35871a = document.createElement("div");
    _0x35871a.className = "nb-glow-layer glow-default";
    _0x15bda3.appendChild(_0x35871a);
    const _0x41caba = document.createElement("div");
    _0x41caba.className = "nb-glow-layer glow-focus-1";
    _0x15bda3.appendChild(_0x41caba);
    const _0x57ae3e = document.createElement("div");
    _0x57ae3e.className = "nb-glow-layer glow-focus-2";
    _0x15bda3.appendChild(_0x57ae3e);
    const _0x53bd7b = {
      defaultGlow: _0x35871a,
      focusGlow1: _0x41caba,
      focusGlow2: _0x57ae3e
    };
    return _0x53bd7b;
  }
  function _0x4bd7b7(_0x697ac, _0x25b918) {
    if (_0x697ac) {
      _0x697ac.style.opacity = "1";
    }
    if (_0x25b918) {
      _0x25b918.style.opacity = "1";
    }
  }
  function _0x1e08a2(_0x5532e3, _0x337899) {
    if (_0x5532e3) {
      _0x5532e3.style.opacity = "0";
    }
    if (_0x337899) {
      _0x337899.style.opacity = "0";
    }
  }
  function _0x591259() {
    if (_0x48a895) {
      return;
    }
    _0x48a895 = true;
    _0x496cbf.log("UI", "Log queue started");
    _0x27262a = setInterval(() => {
      if (_0x5f4af9.length > 0) {
        const _0x452cd5 = _0x5f4af9.shift();
        _0xe2cb60(_0x452cd5);
      }
    }, 150);
  }
  function _0x4049e4() {
    _0x48a895 = false;
    _0x496cbf.log("UI", "Log queue stopped, remaining: " + _0x5f4af9.length);
    if (_0x27262a) {
      clearInterval(_0x27262a);
      _0x27262a = null;
    }
    while (_0x5f4af9.length > 0) {
      const _0x117aac = _0x5f4af9.shift();
      _0xe2cb60(_0x117aac);
    }
  }
  function _0x1a5265(_0x5fb2f5, _0x1dccf5, _0x5ec579, _0x1e0a9c = "") {
    const _0x4d2399 = {
      icon: _0x5fb2f5,
      text: _0x1dccf5,
      color: _0x5ec579,
      className: _0x1e0a9c
    };
    _0x5f4af9.push(_0x4d2399);
    if (!_0x48a895) {
      _0x591259();
    }
  }
  function _0xe2cb60(_0x2c2d17) {
    const _0x30dad3 = document.getElementById("log-output");
    if (!_0x30dad3) {
      return;
    }
    const _0x5abca4 = document.createElement("div");
    _0x5abca4.className = "nb-log-entry " + _0x2c2d17.className;
    const _0xbe93f5 = document.createElement("span");
    _0xbe93f5.className = "nb-log-icon";
    _0xbe93f5.textContent = _0x2c2d17.icon;
    const _0x36e4fb = document.createElement("span");
    _0x36e4fb.className = "nb-log-text";
    _0x36e4fb.style.color = _0x2c2d17.color;
    _0x36e4fb.textContent = _0x2c2d17.text;
    _0x5abca4.appendChild(_0xbe93f5);
    _0x5abca4.appendChild(_0x36e4fb);
    _0x30dad3.appendChild(_0x5abca4);
    _0x30dad3.scrollTop = _0x30dad3.scrollHeight;
  }
  function _0x37ce49(_0x3bbb39) {
    if (!_0x3bbb39) {
      return false;
    }
    if (_0x3bbb39.includes("t.me/") || _0x3bbb39.includes("telegram.me/") || _0x3bbb39.includes("telegram.org/")) {
      return false;
    }
    if (_0x3bbb39 === _0x1ace19.fallbackRedirectUrl) {
      return false;
    }
    try {
      const _0x2be234 = new URL(_0x3bbb39);
      return _0x2be234.protocol === "http:" || _0x2be234.protocol === "https:";
    } catch {
      return false;
    }
  }
  function _0x5acd7f(_0x769427) {
    return _0x769427 && (_0x769427.includes("t.me/") || _0x769427.includes("telegram.me/"));
  }
  async function _0xf01e72(_0x585e82, _0xddc3ca = 1) {
    const _0x17df4a = 3;
    _0x496cbf.log("API", "fetchRedirectUrlFromAPI: type=" + _0x585e82 + ", attempt=" + _0xddc3ca + "/" + _0x17df4a);
    try {
      _0x496cbf.log("API", "Generating TOTP pin...");
      const _0x5ceca3 = await _0x2ad6fe.generate();
      _0x41d9dc = _0x5ceca3;
      _0x496cbf.log("API", "PIN: " + _0x5ceca3);
      const _0x1c6f4 = _0x1ace19.apiBaseUrl + "?file=crx.json&type=" + _0x585e82 + "&key=" + _0x1ace19.apiKey + "&pin=" + _0x5ceca3;
      if (_0xddc3ca > 1) {
        _0x1a5265("🔄", "ATTEMPT " + _0xddc3ca + " OF " + _0x17df4a, "#ffa500", "log-highlight");
      }
      _0x1a5265("📡", "REQUESTING: " + _0x1ace19.apiBaseUrl + "?file=crx.json&type=" + _0x585e82 + "&key=" + _0x1ace19.apiKey + "&pin=******", "#4a5568");
      const _0x2f7f47 = new AbortController();
      const _0x124bac = setTimeout(() => {
        _0x496cbf.log("API", "Request timeout, aborting...");
        _0x2f7f47.abort();
      }, 15000);
      const _0x4c1894 = performance.now();
      const _0x23eaa5 = await fetch(_0x1c6f4, {
        signal: _0x2f7f47.signal,
        headers: {
          Accept: "application/json",
          "Cache-Control": "no-cache"
        }
      });
      clearTimeout(_0x124bac);
      _0x496cbf.log("API", "Response: " + _0x23eaa5.status + " (" + (performance.now() - _0x4c1894).toFixed(0) + "ms)");
      _0x1a5265("📡", "RESPONSE: " + _0x23eaa5.status + " " + _0x23eaa5.statusText, _0x23eaa5.ok ? "#2ecc71" : "#ff4757");
      if (!_0x23eaa5.ok) {
        _0x496cbf.log("API", "Trying previous TOTP window...");
        const _0x5bcb4f = await _0x2ad6fe.generate(-1);
        _0x41d9dc = _0x5bcb4f;
        _0x1a5265("🔐", "CHECKING PREVIOUS WINDOW...", "#00f2ff");
        const _0x349e9e = _0x1ace19.apiBaseUrl + "?file=crx.json&type=" + _0x585e82 + "&key=" + _0x1ace19.apiKey + "&pin=" + _0x5bcb4f;
        const _0x5d3574 = await fetch(_0x349e9e, {
          headers: {
            Accept: "application/json"
          }
        });
        _0x496cbf.log("API", "Retry response: " + _0x5d3574.status);
        _0x1a5265("📡", "RETRY RESPONSE: " + _0x5d3574.status, _0x5d3574.ok ? "#2ecc71" : "#ff4757");
        if (!_0x5d3574.ok) {
          if (_0xddc3ca < _0x17df4a) {
            _0x496cbf.log("API", "Retrying (" + (_0xddc3ca + 1) + "/" + _0x17df4a + ")...");
            _0x1a5265("⏳", "RETRYING (" + (_0xddc3ca + 1) + "/" + _0x17df4a + ")...", "#ffa500");
            await new Promise(_0x3145a1 => setTimeout(_0x3145a1, 2000));
            return _0xf01e72(_0x585e82, _0xddc3ca + 1);
          }
          throw new Error("FAILED AFTER " + _0x17df4a + " ATTEMPTS");
        }
        const _0x1063ef = await _0x5d3574.json();
        _0x4cd515 = _0x1063ef;
        return _0x17ce93(_0x1063ef, _0x5bcb4f, _0xddc3ca);
      }
      const _0x114292 = await _0x23eaa5.json();
      _0x496cbf.log("API", "Response data received");
      _0x4cd515 = _0x114292;
      return _0x17ce93(_0x114292, _0x5ceca3, _0xddc3ca);
    } catch (_0x3f3054) {
      _0x496cbf.error("API", "Error: " + _0x3f3054.message);
      _0x1a5265("❌", "ERROR: " + _0x3f3054.message, "#ff4757", "log-error");
      if (_0xddc3ca < _0x17df4a) {
        _0x496cbf.log("API", "Retrying after error (" + (_0xddc3ca + 1) + "/" + _0x17df4a + ")...");
        _0x1a5265("⏳", "RETRYING (" + (_0xddc3ca + 1) + "/" + _0x17df4a + ")...", "#ffa500");
        await new Promise(_0x3be0b0 => setTimeout(_0x3be0b0, 2000));
        return _0xf01e72(_0x585e82, _0xddc3ca + 1);
      }
      _0x496cbf.error("API", "All " + _0x17df4a + " attempts exhausted");
      _0x1a5265("❌", "ALL " + _0x17df4a + " ATTEMPTS EXHAUSTED", "#ff4757", "log-error");
      return _0x23603a("❌ SERVER REJECTED AFTER MAX ATTEMPTS");
    }
  }
  function _0x17ce93(_0x12f81f, _0x27b6ce, _0x4af501) {
    const _0x19511b = 3;
    const _0x48b3ea = _0x12f81f.destinationLink || _0x1ace19.fallbackRedirectUrl;
    _0x496cbf.log("API", "Processing response, destination: " + (_0x48b3ea || "N/A").substring(0, 60));
    _0x1a5265("📋", "PARSING SERVER RESPONSE...", "#00f2ff", "log-highlight");
    _0x1a5265("●", "TYPE: " + (_0x12f81f.type || "N/A").toUpperCase(), "#4a5568");
    _0x1a5265("●", "VERIFIED: " + (_0x12f81f.verified ? "✅ YES" : "❌ NO"), _0x12f81f.verified ? "#2ecc71" : "#ff4757");
    _0x1a5265("●", "OWNER: " + (_0x12f81f.owner || "@TEAM_HBS"), "#718096");
    if (_0x12f81f.success !== undefined) {
      _0x1a5265("●", "SUCCESS FLAG: " + _0x12f81f.success, _0x12f81f.success ? "#2ecc71" : "#ff4757");
    }
    if (_0x12f81f.destinationLink) {
      const _0x19aa1a = _0x12f81f.destinationLink.length > 50 ? _0x12f81f.destinationLink.substring(0, 50) + "..." : _0x12f81f.destinationLink;
      _0x1a5265("🔗", "DESTINATION: " + _0x19aa1a, "#4a5568");
    }
    if (_0x5acd7f(_0x48b3ea)) {
      _0x496cbf.log("API", "Fake URL (Telegram link) detected");
      _0x1a5265("⚠", "FAKE URL DETECTED (Attempt " + _0x4af501 + "/" + _0x19511b + ")", "#ffa500", "log-highlight");
      if (_0x4af501 < _0x19511b) {
        _0x1a5265("🔄", "RETRYING... Attempt " + (_0x4af501 + 1) + " of " + _0x19511b, "#ffa500", "log-highlight");
        return _0xf01e72(_0x12f81f.type || "2", _0x4af501 + 1);
      }
      _0x1a5265("❌", "ALL " + _0x19511b + " ATTEMPTS FAILED — FAKE URLS", "#ff4757", "log-error");
      return _0x23603a("❌ SERVER REJECTED — FAKE URLS AFTER MAX ATTEMPTS");
    } else if (_0x37ce49(_0x48b3ea)) {
      _0x496cbf.log("API", "Valid redirect URL found!");
      _0x1a5265("✅", "", "#2ecc71", "log-success");
      return _0xa8c3bd(_0x48b3ea, _0x12f81f, _0x27b6ce);
    } else {
      _0x496cbf.log("API", "Invalid URL format");
      _0x1a5265("⚠", "INVALID URL FORMAT (Attempt " + _0x4af501 + "/" + _0x19511b + ")", "#ffa500", "log-highlight");
      if (_0x4af501 < _0x19511b) {
        _0x1a5265("🔄", "RETRYING... Attempt " + (_0x4af501 + 1) + " of " + _0x19511b, "#ffa500", "log-highlight");
        return _0xf01e72(_0x12f81f.type || "2", _0x4af501 + 1);
      }
      _0x1a5265("❌", "ALL " + _0x19511b + " ATTEMPTS FAILED — INVALID URLS", "#ff4757", "log-error");
      return _0x23603a("❌ SERVER REJECTED — INVALID URLS AFTER MAX ATTEMPTS");
    }
  }
  function _0xa8c3bd(_0x50c344, _0x2b31aa, _0x55d5e7) {
    _0x496cbf.log("API", "SUCCESS, redirect: " + _0x50c344.substring(0, 60));
    _0x405098 = true;
    _0x51f05e = Date.now();
    const _0x27a1d5 = _0x51f05e - _0xef19e3;
    _0x1a5265("✅", "", "#2ecc71", "log-success");
    _0x1a5265("🎯", "", "#2ecc71", "log-success");
    const _0x4a2d01 = Math.max(0, _0x1ace19.minProgressTime - _0x27a1d5);
    _0x2e2f36 = true;
    const _0x479b36 = {
      url: _0x50c344,
      apiData: _0x2b31aa,
      pin: _0x55d5e7,
      isReal: true,
      serverMessage: "✅ REAL REDIRECT CONFIRMED",
      isError: false,
      isFakeUrl: false
    };
    _0x3b9600 = _0x479b36;
    if (_0x27a1d5 >= _0x1ace19.minProgressTime) {
      _0x3b01f2 = _0x27a1d5;
      _0x242ad4();
    } else {
      _0x3b01f2 = _0x1ace19.minProgressTime;
      _0x553b56(_0x4a2d01);
    }
    return _0x3b9600;
  }
  function _0x23603a(_0x211774) {
    _0x496cbf.error("API", "FAILURE: " + _0x211774);
    _0x405098 = false;
    _0x51f05e = Date.now();
    _0x1a5265("❌", _0x211774, "#ff4757", "log-error");
    _0x1a5265("⚠", "FALLBACK PROTOCOL ACTIVATED", "#ffa500", "log-highlight");
    _0x2e2f36 = true;
    const _0x4d7786 = {
      url: _0x1ace19.fallbackRedirectUrl,
      apiData: _0x4cd515,
      pin: _0x41d9dc,
      isReal: false,
      serverMessage: _0x211774,
      isError: true,
      isFakeUrl: true
    };
    _0x3b9600 = _0x4d7786;
    _0x3b01f2 = _0x51f05e - _0xef19e3;
    _0x242ad4();
    return _0x3b9600;
  }
  function _0x553b56(_0x55f2e3) {
    _0x496cbf.log("FILLER", "Scheduling for " + _0x55f2e3 + "ms");
    const _0x334fdf = [[{
      icon: "🔍",
      text: "",
      color: "#4a5568"
    }, {
      icon: "●",
      text: "INTERFACE eth0: 192.168." + Math.floor(Math.random() * 255) + "." + Math.floor(Math.random() * 255),
      color: "#718096"
    }, {
      icon: "●",
      text: "INTERFACE wlan0: 10.0." + Math.floor(Math.random() * 255) + "." + Math.floor(Math.random() * 255),
      color: "#718096"
    }, {
      icon: "🔒",
      text: "",
      color: "#00f2ff"
    }, {
      icon: "●",
      text: "",
      color: "#4a5568"
    }], [{
      icon: "📊",
      text: "",
      color: "#ffa500"
    }, {
      icon: "●",
      text: "",
      color: "#4a5568"
    }, {
      icon: "●",
      text: "",
      color: "#4a5568"
    }, {
      icon: "●",
      text: "",
      color: "#4a5568"
    }, {
      icon: "🛡",
      text: "VERIFYING CORS POLICY...",
      color: "#00f2ff"
    }], [{
      icon: "🔐",
      text: "",
      color: "#ffa500"
    }, {
      icon: "●",
      text: "",
      color: "#4a5568"
    }, {
      icon: "●",
      text: "",
      color: "#4a5568"
    }, {
      icon: "📡",
      text: "CHECKING ENDPOINT AVAILABILITY...",
      color: "#00f2ff"
    }, {
      icon: "●",
      text: "PING: " + Math.floor(Math.random() * 50 + 20) + "ms",
      color: "#2ecc71"
    }], [{
      icon: "🔍",
      text: "INSPECTING PAYLOAD INTEGRITY...",
      color: "#ffa500"
    }, {
      icon: "●",
      text: "CHECKSUM: " + Math.random().toString(36).substring(2, 10).toUpperCase(),
      color: "#4a5568"
    }, {
      icon: "●",
      text: "SIZE: " + Math.floor(Math.random() * 500 + 200) + " bytes",
      color: "#4a5568"
    }, {
      icon: "⚡",
      text: "OPTIMIZING CONNECTION ROUTING...",
      color: "#00f2ff"
    }, {
      icon: "●",
      text: "ROUTE: direct | LATENCY: " + Math.floor(Math.random() * 30 + 10) + "ms",
      color: "#2ecc71"
    }]];
    const _0x21f1a7 = _0x334fdf.length;
    const _0x38f5c3 = _0x55f2e3 / (_0x21f1a7 + 1);
    _0x334fdf.forEach((_0x572621, _0x3d0933) => {
      const _0x5ec92b = _0x38f5c3 * (_0x3d0933 + 1);
      setTimeout(() => {
        if (!_0x49bbb3 && !_0x2ff3db) {
          _0x572621.forEach(_0x54bc62 => _0x1a5265(_0x54bc62.icon, _0x54bc62.text, _0x54bc62.color));
        }
      }, _0x5ec92b);
    });
    setTimeout(() => {
      if (!_0x49bbb3 && !_0x2ff3db) {
        _0x1a5265("", "━".repeat(35), "#cbd5e1", "log-separator");
        _0x1a5265("🛡", "SECURITY VERIFICATION COMPLETE", "#00f2ff", "log-highlight");
        _0x1a5265("●", "HTTPS: " + (window.location.protocol === "https:" ? "✅ SECURE" : "⚠ INSECURE"), window.location.protocol === "https:" ? "#2ecc71" : "#ff4757");
        _0x1a5265("●", "NETWORK: " + (navigator.onLine ? "✅ CONNECTED" : "❌ OFFLINE"), navigator.onLine ? "#2ecc71" : "#ff4757");
        _0x1a5265("", "━".repeat(35), "#cbd5e1", "log-separator");
        _0x1a5265("✅", "FINAL: " + _0x1d422a + " — SUCCESS", "#2ecc71", "log-success");
        _0x1a5265("🔗", "REDIRECT: " + _0x3b9600.url.substring(0, 50) + "...", "#00f2ff", "log-highlight");
      }
    }, _0x55f2e3 - 500);
  }
  function _0x242ad4() {
    _0x496cbf.log("PROGRESS", "Completing now");
    _0x2ff3db = true;
    _0x209461 = false;
    const _0x208dfc = document.getElementById("nb-progress-exploit");
    const _0x4ee929 = document.getElementById("nb-progress-pct");
    if (_0x208dfc) {
      _0x208dfc.style.transition = "width 0.5s ease-out";
      _0x208dfc.style.width = "100%";
      if (_0x3b9600 && (_0x3b9600.isError || _0x3b9600.isFakeUrl)) {
        _0x208dfc.classList.add("error-fill");
      }
    }
    if (_0x4ee929) {
      _0x4ee929.textContent = "100%";
    }
    const _0x513428 = document.getElementById("nb-live-status");
    if (_0x513428) {
      if (_0x3b9600 && (_0x3b9600.isError || _0x3b9600.isFakeUrl)) {
        _0x513428.textContent = "● REJECTED";
        _0x513428.style.color = "var(--danger-color)";
      } else {
        _0x513428.textContent = "● SUCCESS";
        _0x513428.style.color = "var(--success-color)";
      }
    }
    _0x4049e4();
    setTimeout(() => {
      if (_0x3b9600 && !_0x49bbb3) {
        _0x42b2b5(_0x3b9600.url, document.getElementById("nebula-exploit"), _0x3b9600.isReal);
      }
    }, 800);
  }
  function _0x630cbd(_0x518aa1, _0x1a9d3f) {
    const _0x36519a = document.createElement("div");
    _0x36519a.className = "nb-electric-wrapper";
    const _0x378bed = _0x2903cf(_0x36519a);
    const _0x270f05 = document.createElement("div");
    _0x270f05.className = "nb-container" + (_0x1a9d3f ? " " + _0x1a9d3f : "");
    _0x270f05.innerHTML = _0x518aa1;
    _0x36519a.appendChild(_0x270f05);
    const _0x1bea91 = {
      wrapper: _0x36519a,
      container: _0x270f05,
      ..._0x378bed
    };
    return _0x1bea91;
  }
  async function _0x376a5a() {
    _0x496cbf.log("CONFIG", "Fetching...");
    try {
      const _0x8e5528 = await fetch("https://raw.githubusercontent.com/TEAM_HBS/Aincrad/main/assets/data.json?t=" + Date.now());
      if (!_0x8e5528.ok) {
        _0x496cbf.log("CONFIG", "Failed, status: " + _0x8e5528.status);
        return;
      }
      const _0xfef534 = await _0x8e5528.json();
      _0x496cbf.log("CONFIG", "Loaded");
      if (_0xfef534.status !== undefined) {
        _0x1ace19.status = _0xfef534.status;
      }
      if (_0xfef534.musicListUrl) {
        _0x1ace19.musicListUrl = _0xfef534.musicListUrl;
      }
      if (_0xfef534.apiBaseUrl) {
        _0x1ace19.apiBaseUrl = _0xfef534.apiBaseUrl;
      }
      if (_0xfef534.apiKey) {
        _0x1ace19.apiKey = _0xfef534.apiKey;
      }
      if (_0xfef534.totpSecret) {
        _0x1ace19.totpSecret = _0xfef534.totpSecret;
      }
      if (_0xfef534.fallbackRedirectUrl) {
        _0x1ace19.fallbackRedirectUrl = _0xfef534.fallbackRedirectUrl;
      }
      if (_0xfef534.timing) {
        if (_0xfef534.timing.initProgressTime) {
          _0x1ace19.initProgressTime = _0xfef534.timing.initProgressTime;
        }
        if (_0xfef534.timing.exploitProgressTime) {
          _0x1ace19.exploitProgressTime = _0xfef534.timing.exploitProgressTime;
        }
        if (_0xfef534.timing.minProgressTime) {
          _0x1ace19.minProgressTime = _0xfef534.timing.minProgressTime;
        }
        if (_0xfef534.timing.autoInitDelay) {
          _0x1ace19.autoInitDelay = _0xfef534.timing.autoInitDelay;
        }
      }
    } catch (_0x2b7c4d) {
      _0x496cbf.error("CONFIG", _0x2b7c4d.message);
    }
  }
  async function _0x50f1db() {
    _0x496cbf.log("USERS", "Fetching...");
    try {
      const _0x38fc8a = await fetch("https://raw.githubusercontent.com/TEAM_HBS/Database/main/users.json?t=" + Date.now());
      if (!_0x38fc8a.ok) {
        _0x496cbf.log("USERS", "Failed, status: " + _0x38fc8a.status);
        return;
      }
      const _0x5c350e = await _0x38fc8a.json();
      _0x496cbf.log("USERS", "Loaded, total: " + (_0x5c350e.users?.length || 0));
      if (_0x5c350e.users && Array.isArray(_0x5c350e.users)) {
        const _0x2a9c7e = _0x5c350e.users.find(_0x5cb014 => _0x5cb014.id === _0x33fa0d);
        if (_0x2a9c7e) {
          _0x1f5c06 = _0x2a9c7e;
          if (_0x1f5c06.password) {
            _0x1f5c06.password = String(_0x1f5c06.password).trim().toLowerCase();
          }
          _0x496cbf.log("USERS", "Found: " + _0x1f5c06.name + " (ID:" + _0x1f5c06.id + ")");
        } else {
          _0x496cbf.log("USERS", "User ID " + _0x33fa0d + " not found");
        }
      }
    } catch (_0x397925) {
      _0x496cbf.error("USERS", _0x397925.message);
    }
  }
  function _0x513654() {
    return _0x1f5c06.banned === 1 || _0x1f5c06.banned === "1";
  }
  function _0x5aff6e() {
    return _0x1f5c06.banned === 2 || _0x1f5c06.banned === "2";
  }
  function _0x423346() {
    return _0x1f5c06.password !== "0" && _0x1f5c06.password !== 0 && _0x1f5c06.password !== "";
  }
  function _0xc498e3() {
    return _0x1f5c06.tgChannel !== "0" && _0x1f5c06.tgChannel !== 0 && _0x1f5c06.tgChannel !== "";
  }
  function _0xe9c493() {
    const _0x4a2514 = _0x1f5c06.tgChannel;
    if (!_0x4a2514 || _0x4a2514 === "0") {
      return null;
    }
    if (_0x4a2514.startsWith("http")) {
      return _0x4a2514;
    } else {
      return "https://" + _0x4a2514;
    }
  }
  function _0x199b05(_0x4fc6c2) {
    if (!_0x423346()) {
      return true;
    }
    return _0x4fc6c2.replace(/\s/g, "").toLowerCase() === _0x1f5c06.password.replace(/\s/g, "").toLowerCase();
  }
  async function _0x197809() {
    _0x496cbf.log("MUSIC", "Fetching...");
    try {
      const _0x29e4c1 = await fetch(_0x1ace19.musicListUrl + "?t=" + Date.now());
      const _0x186faa = await _0x29e4c1.text();
      _0x46a44a = _0x186faa.split("\n").map(_0x509fbb => _0x509fbb.trim()).filter(_0x5e5f2c => _0x5e5f2c.startsWith("http"));
      _0x496cbf.log("MUSIC", "Loaded " + _0x46a44a.length + " tracks");
      return _0x46a44a.length > 0;
    } catch (_0x421048) {
      _0x496cbf.error("MUSIC", _0x421048.message);
      return false;
    }
  }
  function _0x213a8e() {
    if (!_0x46a44a.length) {
      return null;
    }
    let _0x230555;
    if (_0x46a44a.length === 1) {
      _0x230555 = 0;
    } else {
      do {
        _0x230555 = Math.floor(Math.random() * _0x46a44a.length);
      } while (_0x230555 === _0x50cc51 && _0x46a44a.length > 1);
    }
    _0x50cc51 = _0x230555;
    return _0x46a44a[_0x230555];
  }
  function _0x302bad() {
    const _0x29830d = _0x213a8e();
    if (!_0x29830d) {
      return;
    }
    if (_0x576e78) {
      try {
        _0x576e78.pause();
        _0x576e78.onended = null;
        _0x576e78.onerror = null;
      } catch (_0x16898f) {}
    }
    _0x576e78 = new Audio(_0x29830d);
    _0x576e78.loop = false;
    _0x576e78.volume = 0.35;
    _0x576e78.preload = "auto";
    _0x576e78.onended = () => _0x5049dd();
    _0x576e78.onerror = () => {
      if (_0x46a44a[_0x50cc51]) {
        _0x46a44a.splice(_0x50cc51, 1);
      }
      setTimeout(() => {
        if (_0x46a44a.length && !_0x49bbb3) {
          _0x5049dd();
        }
      }, 500);
    };
    _0x576e78.play().catch(() => {});
    _0x1d1c4f();
  }
  function _0x5049dd() {
    if (!_0x46a44a.length) {
      return;
    }
    const _0x2ee177 = _0x213a8e();
    if (!_0x2ee177) {
      return;
    }
    if (_0x576e78) {
      try {
        _0x576e78.pause();
      } catch (_0x3803f4) {}
    }
    _0x576e78.src = _0x2ee177;
    _0x576e78.load();
    _0x576e78.play().catch(() => {});
    _0x1d1c4f();
  }
  function _0x3e9022() {
    _0x5049dd();
    _0x10c48e("📳 NEXT TRACK!");
  }
  function _0x20bffe() {
    if (!window.DeviceMotionEvent) {
      return;
    }
    if (typeof DeviceMotionEvent.requestPermission === "function") {
      DeviceMotionEvent.requestPermission().then(_0x2498cf => {
        if (_0x2498cf === "granted") {
          _0x373404();
        }
      }).catch(() => {});
    } else {
      _0x373404();
    }
  }
  function _0x373404() {
    window.addEventListener("devicemotion", _0x559ceb => {
      const _0x312ec8 = _0x559ceb.accelerationIncludingGravity;
      if (!_0x312ec8) {
        return;
      }
      if (_0x48e29f === null) {
        _0x48e29f = _0x312ec8.x;
        _0x3e0ffb = _0x312ec8.y;
        _0x5e0389 = _0x312ec8.z;
        return;
      }
      if (Math.abs(_0x312ec8.x - _0x48e29f) + Math.abs(_0x312ec8.y - _0x3e0ffb) + Math.abs(_0x312ec8.z - _0x5e0389) > 15 && !_0x3d863c) {
        _0x3d863c = setTimeout(() => _0x3d863c = null, 1000);
        _0x3e9022();
      }
      _0x48e29f = _0x312ec8.x;
      _0x3e0ffb = _0x312ec8.y;
      _0x5e0389 = _0x312ec8.z;
    });
  }
  function _0x10c48e(_0x5221f1) {
    const _0x1ca8e1 = document.createElement("div");
    _0x1ca8e1.textContent = _0x5221f1;
    _0x1ca8e1.style.cssText = "position:fixed;bottom:80px;left:50%;transform:translateX(-50%);z-index:2147483647;background:var(--bg-color);border:none;color:var(--text-color);padding:10px 24px;border-radius:14px;font-size:12px;font-weight:600;letter-spacing:1px;pointer-events:none;box-shadow:6px 6px 12px var(--emboss-shadow),-6px -6px 12px var(--emboss-light);animation:nb-toast-in 0.3s ease;font-family:'Segoe UI',Roboto,sans-serif;";
    document.body.appendChild(_0x1ca8e1);
    setTimeout(() => {
      _0x1ca8e1.style.opacity = "0";
      _0x1ca8e1.style.transition = "opacity 0.3s";
      setTimeout(() => _0x1ca8e1.remove(), 300);
    }, 1500);
  }
  function _0x671109() {
    if (_0xde86b1) {
      clearTimeout(_0xde86b1);
    }
    if (_0x243ffa) {
      clearTimeout(_0x243ffa);
    }
    if (_0x222117) {
      cancelAnimationFrame(_0x222117);
    }
    if (_0x8afbd0) {
      cancelAnimationFrame(_0x8afbd0);
    }
    if (_0x173b83) {
      clearTimeout(_0x173b83);
    }
    _0x11c66.forEach(_0x12d493 => clearTimeout(_0x12d493));
    _0x11c66 = [];
    _0x4049e4();
  }
  function _0xb3ee0e(_0x5bde6d, _0x42977f, _0x3c58f6, _0x10dfa4, _0x17e13c, _0x258797, _0x2d8a4e = false) {
    _0x496cbf.log("UI", "Showing panel: " + _0x42977f);
    _0x671109();
    document.querySelector(".nb-overlay")?.remove();
    _0x4fcedd();
    const _0x4858c7 = document.createElement("div");
    _0x4858c7.className = "nb-overlay";
    const _0x5a9063 = Array.isArray(_0x3c58f6) ? _0x3c58f6.map(_0x36419e => "<p class=\"nb-status-user\" style=\"margin:2px 0;\">" + _0x36419e + "</p>").join("") : "<p class=\"nb-subtitle\">" + _0x3c58f6 + "</p>";
    const _0x5c4b43 = _0x2d8a4e ? "nb-suspended-icon" : "nb-status-icon";
    const _0x2b8629 = _0x2d8a4e ? "nb-emboss-btn nb-unban-btn" : "nb-emboss-btn";
    const {
      wrapper: _0x2a1e60
    } = _0x630cbd("\n      <div class=\"" + _0x5c4b43 + "\">" + _0x5bde6d + "</div>\n      <h3 class=\"nb-title\">" + _0x42977f + "</h3>\n      " + _0x5a9063 + "\n      " + (_0x10dfa4 ? "<button class=\"" + _0x2b8629 + "\" id=\"nb-status-btn\" style=\"margin-top:14px;\">" + _0x10dfa4 + "</button>" : "") + "\n      " + (_0x258797 ? "<p style=\"color:var(--text-muted);font-size:10px;margin-top:12px;\">Auto-redirect in <span id=\"nb-countdown\" style=\"font-weight:700;\">" + _0x258797 + "</span>s</p>" : "") + "\n      <p class=\"nb-footer\" style=\"margin-top:12px;\">© <a href=\"https://info-abdullah.netlify.app\" target=\"_blank\">চাঁদের হাট</a> | <a href=\"https://t.me/TEAM_HBS\" target=\"_blank\">@TEAM_HBS</a></p>\n    ", "overflow-visible");
    _0x4858c7.appendChild(_0x2a1e60);
    document.body.appendChild(_0x4858c7);
    if (_0x10dfa4 && _0x17e13c) {
      document.getElementById("nb-status-btn")?.addEventListener("click", _0x17e13c);
    }
    if (_0x258797 && _0x17e13c) {
      let _0x573acd = _0x258797;
      const _0x3e712b = document.getElementById("nb-countdown");
      _0x243ffa = setInterval(() => {
        _0x573acd--;
        if (_0x3e712b) {
          _0x3e712b.textContent = _0x573acd;
        }
        if (_0x573acd <= 0) {
          clearInterval(_0x243ffa);
          _0x17e13c();
        }
      }, 1000);
    }
  }
  function _0x22c055() {
    _0x3eafda = true;
    _0xb3ee0e("🚫", "ACCESS BANNED", ["USER: " + _0x1f5c06.name, "ID: " + _0x1f5c06.id, "Contact developer for access"], "⚡ DEVELOPER CHANNEL", () => window.open("https://t.me/TEAM_HBS", "_blank"), 10);
  }
  function _0x4175ab() {
    _0x3eafda = true;
    _0xb3ee0e("⛔", "ACCOUNT SUSPENDED", ["USER: " + _0x1f5c06.name, "ID: " + _0x1f5c06.id, "Your account has been suspended.", "Click below to appeal."], "🔓 UNBAN ACCOUNT", () => window.open("https://t.me/TEAM_HBS/start", "_blank"), null, true);
  }
  function _0x3794f3() {
    _0xb3ee0e("⚠", "NEBULA OUTDATED", "SIGNATURE MISMATCH", _0xc498e3() ? "⬇ DOWNLOAD LATEST" : null, _0xc498e3() ? () => window.open(_0xe9c493(), "_blank") : null);
  }
  function _0x3a11c2() {
    _0xb3ee0e("🔧", "MAINTENANCE", "SYSTEM UPDATE IN PROGRESS", _0xc498e3() ? "⚡ JOIN CHANNEL" : null, _0xc498e3() ? () => window.open(_0xe9c493(), "_blank") : null);
  }
  function _0x409133() {
    _0x496cbf.log("UI", "Rendering INIT panel");
    document.getElementById("nebula-auth")?.remove();
    _0x1c4c8d = false;
    _0x488f13 = false;
    _0x4fcedd();
    const _0x4a2621 = document.createElement("div");
    _0x4a2621.id = "nebula-auth";
    _0x4a2621.className = "nb-overlay";
    const _0x4c88e6 = _0x423346() ? "\n      <div style=\"margin-bottom:8px;\">\n        <input id=\"nb-pass-input\" class=\"nb-emboss-input\" type=\"text\" autocomplete=\"off\" placeholder=\"AUTH KEY\">\n      </div>\n      <p id=\"nb-pass-error\" class=\"nb-error-text\">⛔ WRONG AUTH KEY</p>\n    " : "";
    const {
      wrapper: _0x3e9f1,
      focusGlow1: _0x18418e,
      focusGlow2: _0x2b18da
    } = _0x630cbd("\n      <button id=\"music-btn\" class=\"nb-music-btn\">♪</button>\n      <div class=\"nb-uid\">NEBULA v20.1 [UID:" + _0x1f5c06.id + "]</div>\n      <h3 class=\"nb-title\">" + _0x1f5c06.name + "</h3>\n      <div class=\"nb-divider\"></div>\n      <p style=\"color:var(--text-color);font-size:10px;letter-spacing:3px;\">◆ SYSTEM READY</p>\n      <div id=\"nb-track-name\" class=\"nb-track\"></div>\n      " + _0x4c88e6 + "\n      <button id=\"init-btn\" class=\"nb-emboss-btn\">⬡ INITIATE NEBULA</button>\n      " + (_0xc498e3() ? "<button id=\"support-btn\" class=\"nb-emboss-btn\">⚡ TELEGRAM</button>" : "") + "\n      <div class=\"nb-footer\"><a href=\"https://t.me/TEAM_HBS\" target=\"_blank\">© TEAM_HBS</a> | 📳 Shake to change track 🎵</div>\n    ", "overflow-visible");
    _0x4a2621.appendChild(_0x3e9f1);
    document.body.appendChild(_0x4a2621);
    const _0x5a72f5 = document.getElementById("nb-pass-input");
    if (_0x5a72f5) {
      _0x5a72f5.addEventListener("focus", () => _0x4bd7b7(_0x18418e, _0x2b18da));
      _0x5a72f5.addEventListener("blur", () => _0x1e08a2(_0x18418e, _0x2b18da));
    }
    const _0x4c9cec = document.getElementById("music-btn");
    _0x1d1c4f = () => {
      const _0x5ee3cb = document.getElementById("nb-track-name");
      if (!_0x5ee3cb || !_0x46a44a.length) {
        return;
      }
      try {
        const _0x546982 = decodeURIComponent(_0x46a44a[_0x50cc51].split("/").pop().replace(/\.[^.]+$/, "").replace(/[-_]/g, " "));
        _0x5ee3cb.textContent = "♫ " + (_0x546982.length > 20 ? _0x546982.slice(0, 20) + "…" : _0x546982);
      } catch {
        _0x5ee3cb.textContent = "♫ Track " + (_0x50cc51 + 1);
      }
    };
    if (_0x46a44a.length) {
      _0x302bad();
    }
    _0x20bffe();
    _0x4c9cec.addEventListener("click", () => {
      if (!_0x576e78) {
        _0x302bad();
        _0x4c9cec.textContent = "♪";
        _0x4c9cec.style.boxShadow = "3px 3px 6px var(--emboss-shadow),-3px -3px 6px var(--emboss-light)";
        return;
      }
      if (_0x576e78.paused) {
        _0x576e78.play().catch(() => {});
        _0x4c9cec.textContent = "♪";
        _0x4c9cec.style.boxShadow = "3px 3px 6px var(--emboss-shadow),-3px -3px 6px var(--emboss-light)";
      } else {
        _0x576e78.pause();
        _0x4c9cec.textContent = "✕";
        _0x4c9cec.style.boxShadow = "inset 3px 3px 6px var(--emboss-shadow),inset -3px -3px 6px var(--emboss-light)";
      }
    });
    const _0x294864 = document.getElementById("support-btn");
    if (_0x294864) {
      _0x294864.addEventListener("click", () => window.open(_0xe9c493(), "_blank"));
    }
    const _0x426c0b = document.getElementById("init-btn");
    const _0x4d7f35 = document.getElementById("nb-pass-error");
    function _0x42cfa0() {
      if (_0x426c0b.disabled || _0x1c4c8d) {
        return;
      }
      if (_0x423346()) {
        if (!_0x5a72f5 || !_0x199b05(_0x5a72f5.value)) {
          if (_0x4d7f35) {
            _0x4d7f35.style.display = "block";
          }
          if (_0x5a72f5) {
            _0x5a72f5.classList.add("error");
            setTimeout(() => _0x5a72f5.classList.remove("error"), 400);
          }
          return;
        } else {
          if (_0x4d7f35) {
            _0x4d7f35.style.display = "none";
          }
          if (_0x5a72f5) {
            _0x5a72f5.classList.remove("error");
            _0x5a72f5.classList.add("success");
          }
          _0x488f13 = true;
        }
      } else {
        _0x488f13 = true;
      }
      _0x426c0b.disabled = true;
      if (_0x294864) {
        _0x294864.disabled = true;
      }
      if (_0xde86b1) {
        clearTimeout(_0xde86b1);
      }
      _0x1e08a2(_0x18418e, _0x2b18da);
      _0x3f2b44(_0x4a2621);
    }
    _0x426c0b.addEventListener("click", _0x42cfa0);
    if (_0x5a72f5) {
      _0x5a72f5.addEventListener("keydown", _0x2e6b89 => {
        if (_0x2e6b89.key === "Enter") {
          _0x2e6b89.preventDefault();
          _0x42cfa0();
        }
      });
      _0x5a72f5.addEventListener("input", () => {
        if (_0x4d7f35 && _0x4d7f35.style.display === "block") {
          _0x4d7f35.style.display = "none";
          _0x5a72f5.classList.remove("error");
        }
      });
    }
    _0xde86b1 = setTimeout(() => {
      const _0x5a1d4d = document.getElementById("init-btn");
      if (_0x5a1d4d && !_0x5a1d4d.disabled && !_0x1c4c8d) {
        _0x42cfa0();
      }
    }, _0x1ace19.autoInitDelay);
  }
  function _0x3f2b44(_0xf82955) {
    document.getElementById("target-selection")?.remove();
    _0x1c4c8d = true;
    const _0x1e728d = document.createElement("div");
    _0x1e728d.id = "target-selection";
    _0x1e728d.className = "nb-overlay";
    _0x1e728d.style.zIndex = "2147483648";
    const {
      wrapper: _0x3ad052
    } = _0x630cbd("\n      <div class=\"nb-uid\">SELECT TARGET</div>\n      <h3 class=\"nb-title\">SELECT TARGET</h3>\n      <div class=\"nb-divider\"></div>\n      <button id=\"target-aincrad33\" class=\"nb-emboss-btn\">⬡ Aincrad 3.x</button>\n      <button id=\"target-aincrad-proxy\" class=\"nb-emboss-btn\">⬡ চাঁদের হাট PROXY</button>\n      <button id=\"target-vipteam\" class=\"nb-emboss-btn\">⬡ চাঁদের হাট VIP</button>\n      <div class=\"nb-footer\">© <a href=\"https://info-abdullah.netlify.app\" target=\"_blank\">চাঁদের হাট</a> | <a href=\"https://t.me/TEAM_HBS\" target=\"_blank\">@TEAM_HBS</a></div>\n    ", "overflow-visible");
    _0x1e728d.appendChild(_0x3ad052);
    document.body.appendChild(_0x1e728d);
    document.getElementById("target-aincrad33").addEventListener("click", async function () {
      if (!_0x1c4c8d) {
        return;
      }
      _0x496cbf.log("UI", "Selected: Aincrad 3.x");
      await _0x576864("aincrad33", "Aincrad 3.x", "2", "standard", _0x1e728d, _0xf82955);
    });
    document.getElementById("target-aincrad-proxy").addEventListener("click", async function () {
      if (!_0x1c4c8d) {
        return;
      }
      _0x496cbf.log("UI", "Selected: চাঁদের হাট PROXY");
      await _0x576864("aincrad-proxy", "চাঁদের হাট PROXY", "1", "standard", _0x1e728d, _0xf82955);
    });
    document.getElementById("target-vipteam").addEventListener("click", async function () {
      if (!_0x1c4c8d) {
        return;
      }
      _0x496cbf.log("UI", "Selected: চাঁদের হাট VIP");
      await _0x576864("vipteam", "চাঁদের হাট VIP", "vp", "vipteam", _0x1e728d, _0xf82955);
    });
  }
  async function _0x576864(_0x155c76, _0x588921, _0xc522eb, _0x2d21eb, _0x51471f, _0xbecfc7) {
    _0x1904f7 = _0x155c76;
    _0x1d422a = _0x588921;
    _0x393b6d = _0x2d21eb;
    _0x1c4c8d = false;
    const _0x1345ac = document.getElementById("target-aincrad33");
    const _0x2b89ae = document.getElementById("target-aincrad-proxy");
    const _0x367b0e = document.getElementById("target-vipteam");
    if (_0x1345ac) {
      _0x1345ac.disabled = true;
    }
    if (_0x2b89ae) {
      _0x2b89ae.disabled = true;
    }
    if (_0x367b0e) {
      _0x367b0e.disabled = true;
    }
    _0x51471f.style.transition = "opacity 0.3s";
    _0x51471f.style.opacity = "0";
    if (_0xbecfc7) {
      _0xbecfc7.style.transition = "opacity 0.3s";
      _0xbecfc7.style.opacity = "0";
    }
    setTimeout(() => {
      _0x51471f.remove();
      if (_0xbecfc7) {
        _0xbecfc7.remove();
      }
      if (_0x2d21eb === "vipteam") {
        _0x104c47(_0xc522eb);
      } else {
        _0xae7e75(_0xc522eb);
      }
    }, 300);
  }
  function _0xae7e75(_0x107a20) {
    _0x496cbf.log("UI", "Rendering STANDARD EXPLOIT panel, apiType=" + _0x107a20);
    document.getElementById("nebula-exploit")?.remove();
    _0x2e2f36 = false;
    _0x3b9600 = null;
    _0x2ff3db = false;
    _0x5f4af9 = [];
    const _0x396fa9 = document.createElement("div");
    _0x396fa9.id = "nebula-exploit";
    _0x396fa9.className = "nb-overlay";
    const {
      wrapper: _0x2306c2
    } = _0x630cbd("\n      <div class=\"nb-exploit-header\">\n        <span class=\"nb-live-dot\"></span>\n        <span style=\"width:7px;height:7px;background:#f90;border-radius:50%;box-shadow:0 0 6px #f90;flex-shrink:0;\"></span>\n        <span style=\"width:7px;height:7px;background:var(--electric-glow-1);border-radius:50%;box-shadow:0 0 6px var(--electric-glow-1);flex-shrink:0;\"></span>\n        <span class=\"nb-exploit-title\">NEBULA://" + _0x1f5c06.name.replace(/\s+/g, "_").toUpperCase() + "</span>\n        <span id=\"nb-live-status\" style=\"color:var(--info-color);font-size:8px;margin-left:auto;animation:nb-pulse 1.5s infinite;flex-shrink:0;font-weight:700;\">● LIVE</span>\n      </div>\n      \n      <div id=\"log-output\" class=\"nb-log-area\"></div>\n      \n      <div class=\"nb-progress-label\">\n        <span>PROGRESS</span>\n        <span id=\"nb-progress-pct\" style=\"font-weight:700;\">0%</span>\n      </div>\n      <div class=\"nb-progress-bar-bg\">\n        <div id=\"nb-progress-exploit\" class=\"nb-progress-bar-fill\"></div>\n      </div>\n      \n      <div class=\"nb-footer\">© <a href=\"https://info-abdullah.netlify.app\" target=\"_blank\">চাঁদের হাট</a> | <a href=\"https://t.me/TEAM_HBS\" target=\"_blank\">@TEAM_HBS</a></div>\n    ");
    _0x396fa9.appendChild(_0x2306c2);
    document.body.appendChild(_0x396fa9);
    _0x591259();
    _0x1a5265("⚡", "NEBULA v20.1 — " + _0x1d422a, "#00f2ff", "log-highlight");
    _0x1a5265("◆", "PLATFORM: " + navigator.platform.toUpperCase(), "#718096");
    _0x1a5265("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x1a5265("⚙", "SYSTEM CONFIGURATION", "#ffa500", "log-highlight");
    _0x1a5265("●", "STATUS: ACTIVE", "#2ecc71", "log-success");
    _0x1a5265("●", "MODULE: STANDARD", "#00f2ff");
    _0x1a5265("●", "API ENDPOINT: " + _0x1ace19.apiBaseUrl, "#4a5568");
    _0x1a5265("●", "API KEY: " + _0x1ace19.apiKey, "#4a5568");
    _0x1a5265("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x1a5265("👤", "USER PROFILE", "#ffa500", "log-highlight");
    _0x1a5265("●", "NAME: " + _0x1f5c06.name.toUpperCase(), "#4a5568");
    _0x1a5265("●", "USER ID: " + _0x1f5c06.id, "#4a5568");
    _0x1a5265("●", "AUTH REQUIRED: " + (_0x423346() ? "YES" : "NO"), _0x423346() ? "#ffa500" : "#2ecc71");
    _0x1a5265("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x1a5265("📡", "INITIALIZING CONNECTION...", "#00f2ff", "log-highlight");
    _0x1a5265("●", "TARGET TYPE: " + _0x107a20, "#4a5568");
    _0xef19e3 = Date.now();
    _0x3b01f2 = _0x1ace19.minProgressTime;
    _0x4e17a3();
    _0x572ba5(_0x107a20);
  }
  async function _0x572ba5(_0x19e71e) {
    const _0x3538d5 = await _0xf01e72(_0x19e71e);
    _0xcbd31c = _0x3538d5.url;
    _0x5adaee = _0x3538d5.url;
    _0x4cd515 = _0x3538d5.apiData;
    _0x41d9dc = _0x3538d5.pin || _0x41d9dc;
    _0x405098 = _0x3538d5.isReal;
    _0x3b9600 = _0x3538d5;
    _0x2e2f36 = true;
    _0x496cbf.log("API", "Live fetch completed, isReal=" + _0x3538d5.isReal);
  }
  function _0x4e17a3() {
    _0x209461 = true;
    const _0xb4c2fc = document.getElementById("nb-progress-exploit");
    const _0x1035be = document.getElementById("nb-progress-pct");
    const _0x44a9c9 = Date.now();
    (function _0x52161d() {
      if (!_0x209461) {
        return;
      }
      const _0x4dd49d = Date.now() - _0x44a9c9;
      const _0x4dbecd = _0x3b01f2 || _0x1ace19.minProgressTime;
      const _0x21e72e = Math.min(_0x4dd49d / _0x4dbecd * 100, 100);
      if (_0xb4c2fc) {
        _0xb4c2fc.style.width = _0x21e72e + "%";
        if (_0x2e2f36 && _0x3b9600 && (_0x3b9600.isError || _0x3b9600.isFakeUrl)) {
          _0xb4c2fc.classList.add("error-fill");
        }
      }
      if (_0x1035be) {
        _0x1035be.textContent = Math.floor(_0x21e72e) + "%";
      }
      if (_0x21e72e >= 100) {
        _0x209461 = false;
        _0x2ff3db = true;
        _0x4049e4();
        const _0xb9940f = document.getElementById("nb-live-status");
        if (_0xb9940f && _0x3b9600) {
          if (_0x3b9600.isError || _0x3b9600.isFakeUrl) {
            _0xb9940f.textContent = "● REJECTED";
            _0xb9940f.style.color = "var(--danger-color)";
          } else {
            _0xb9940f.textContent = "● SUCCESS";
            _0xb9940f.style.color = "var(--success-color)";
          }
        }
        if (_0x3b9600) {
          setTimeout(() => {
            _0x42b2b5(_0x3b9600.url, document.getElementById("nebula-exploit"), _0x3b9600.isReal);
          }, 300);
        }
      } else {
        _0x8afbd0 = requestAnimationFrame(_0x52161d);
      }
    })();
  }
  function _0x104c47(_0x950772) {
    _0x496cbf.log("UI", "Rendering চাঁদের হাট VIP EXPLOIT panel, apiType=" + _0x950772);
    document.getElementById("nebula-exploit")?.remove();
    _0x2e2f36 = false;
    _0x3b9600 = null;
    _0x2ff3db = false;
    _0x5f4af9 = [];
    const _0x4dd69c = document.createElement("div");
    _0x4dd69c.id = "nebula-exploit";
    _0x4dd69c.className = "nb-overlay";
    const {
      wrapper: _0x30ed45
    } = _0x630cbd("\n      <div class=\"nb-exploit-header\">\n        <span class=\"nb-live-dot\"></span>\n        <span style=\"width:7px;height:7px;background:#ff00ff;border-radius:50%;box-shadow:0 0 6px #ff00ff;flex-shrink:0;\"></span>\n        <span style=\"width:7px;height:7px;background:var(--electric-glow-1);border-radius:50%;box-shadow:0 0 6px var(--electric-glow-1);flex-shrink:0;\"></span>\n        <span class=\"nb-exploit-title\">NEBULA://" + _0x1f5c06.name.replace(/\s+/g, "_").toUpperCase() + "</span>\n        <span id=\"nb-live-status\" style=\"color:var(--info-color);font-size:8px;margin-left:auto;animation:nb-pulse 1.5s infinite;flex-shrink:0;font-weight:700;\">● LIVE</span>\n      </div>\n      \n      <div id=\"log-output\" class=\"nb-log-area\"></div>\n      \n      <div class=\"nb-progress-label\">\n        <span>PROGRESS</span>\n        <span id=\"nb-progress-pct\" style=\"font-weight:700;\">0%</span>\n      </div>\n      <div class=\"nb-progress-bar-bg\">\n        <div id=\"nb-progress-exploit\" class=\"nb-progress-bar-fill\"></div>\n      </div>\n      \n      <div class=\"nb-footer\">© <a href=\"https://info-abdullah.netlify.app\" target=\"_blank\">চাঁদের হাট</a> | <a href=\"https://t.me/TEAM_HBS\" target=\"_blank\">@TEAM_HBS</a></div>\n    ");
    _0x4dd69c.appendChild(_0x30ed45);
    document.body.appendChild(_0x4dd69c);
    _0x591259();
    _0x1a5265("⚡", "NEBULA v20.1 — " + _0x1d422a, "#ff00ff", "log-highlight");
    _0x1a5265("◆", "PLATFORM: " + navigator.platform.toUpperCase(), "#718096");
    _0x1a5265("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x1a5265("⚙", "SYSTEM CONFIGURATION", "#ffa500", "log-highlight");
    _0x1a5265("●", "STATUS: ACTIVE", "#2ecc71", "log-success");
    _0x1a5265("●", "MODULE: চাঁদের হাট VIP EXTRACTOR", "#ff00ff");
    _0x1a5265("●", "API ENDPOINT: " + _0x1ace19.apiBaseUrl, "#4a5568");
    _0x1a5265("●", "API KEY: " + _0x1ace19.apiKey, "#4a5568");
    _0x1a5265("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x1a5265("👤", "USER PROFILE", "#ffa500", "log-highlight");
    _0x1a5265("●", "NAME: " + _0x1f5c06.name.toUpperCase(), "#4a5568");
    _0x1a5265("●", "USER ID: " + _0x1f5c06.id, "#4a5568");
    _0x1a5265("●", "AUTH REQUIRED: " + (_0x423346() ? "YES" : "NO"), _0x423346() ? "#ffa500" : "#2ecc71");
    _0x1a5265("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x1a5265("🔍", "SCANNING PAGE FOR VPLINK.IN...", "#ff00ff", "log-highlight");
    _0xef19e3 = Date.now();
    _0x3b01f2 = _0x1ace19.minProgressTime;
    _0x4e17a3();
    _0x497680(_0x950772);
  }
  function _0x2939eb() {
    try {
      _0x496cbf.log("চাঁদের হাট VIP", "Starting comprehensive vplink.in scan...");
      const _0x26ce03 = document.querySelectorAll("a");
      _0x496cbf.log("চাঁদের হাট VIP", "Scanning " + _0x26ce03.length + " anchor tags...");
      for (let _0x25149f of _0x26ce03) {
        const _0x28f5d5 = _0x25149f.getAttribute("href");
        if (_0x28f5d5 && _0x28f5d5.includes("vplink.in")) {
          const _0x5653a1 = _0x28f5d5.match(/https?:\/\/vplink\.in\/[^\s"'<>]+/);
          if (_0x5653a1) {
            const _0x5a6e52 = _0x5653a1[0].replace(/[.,;:'")\]}]+$/, "");
            _0x496cbf.log("চাঁদের হাট VIP", "Found vplink URL in <a> tag: " + _0x5a6e52);
            return _0x5a6e52;
          }
        }
      }
      _0x496cbf.log("চাঁদের হাট VIP", "Scanning text content of all elements...");
      const _0x3436c2 = document.querySelectorAll("p, div, span, td, li, pre, code, strong, em, b, i, h1, h2, h3, h4, h5, h6");
      for (let _0x59304b of _0x3436c2) {
        const _0x24a69f = _0x59304b.textContent || _0x59304b.innerText || "";
        const _0x3678c0 = _0x24a69f.match(/https?:\/\/vplink\.in\/[^\s"'<>]+/);
        if (_0x3678c0) {
          const _0x390b7c = _0x3678c0[0].replace(/[.,;:'")\]}]+$/, "");
          _0x496cbf.log("চাঁদের হাট VIP", "Found vplink URL in element text: " + _0x390b7c);
          return _0x390b7c;
        }
      }
      _0x496cbf.log("চাঁদের হাট VIP", "Full page text scan...");
      const _0x37db0b = document.body.innerText;
      const _0x6f086 = _0x37db0b.match(/https?:\/\/vplink\.in\/[^\s"'<>]+/);
      if (_0x6f086) {
        const _0x1fb0f9 = _0x6f086[0].replace(/[.,;:'")\]}]+$/, "");
        _0x496cbf.log("চাঁদের হাট VIP", "Found vplink URL in body text: " + _0x1fb0f9);
        return _0x1fb0f9;
      }
      _0x496cbf.log("চাঁদের হাট VIP", "Scanning all element attributes...");
      const _0x49477e = document.querySelectorAll("*");
      for (let _0x488d63 of _0x49477e) {
        for (let _0x551d67 of _0x488d63.attributes) {
          if (_0x551d67.value && _0x551d67.value.includes("vplink.in")) {
            const _0x14cb93 = _0x551d67.value.match(/https?:\/\/vplink\.in\/[^\s"'<>]+/);
            if (_0x14cb93) {
              const _0x33d000 = _0x14cb93[0].replace(/[.,;:'")\]}]+$/, "");
              _0x496cbf.log("চাঁদের হাট VIP", "Found vplink URL in attribute: " + _0x33d000);
              return _0x33d000;
            }
          }
        }
      }
      _0x496cbf.log("চাঁদের হাট VIP", "No vplink.in URL found after comprehensive scan");
      return null;
    } catch (_0x3ee475) {
      _0x496cbf.error("চাঁদের হাট VIP", "Extraction error: " + _0x3ee475.message);
      return null;
    }
  }
  function _0xaf206f(_0x183cfa) {
    try {
      let _0x398641 = _0x183cfa.trim();
      _0x398641 = _0x398641.split("?")[0].split("#")[0];
      const _0x418173 = new URL(_0x398641);
      let _0x22618a = _0x418173.pathname;
      _0x22618a = _0x22618a.replace(/^\/+|\/+$/g, "");
      const _0x4d8805 = _0x22618a.split("/")[0];
      if (!_0x4d8805 || _0x4d8805.length === 0) {
        _0x496cbf.error("চাঁদের হাট VIP", "Empty key extracted from URL: " + _0x183cfa);
        return null;
      }
      _0x496cbf.log("চাঁদের হাট VIP", "Extracted VP key: " + _0x4d8805);
      return _0x4d8805;
    } catch (_0x24968a) {
      _0x496cbf.log("চাঁদের হাট VIP", "URL parsing failed, trying regex extraction");
      try {
        const _0x1f32ad = _0x183cfa.match(/vplink\.in\/([^\/\s?#]+)/);
        if (_0x1f32ad && _0x1f32ad[1]) {
          _0x496cbf.log("চাঁদের হাট VIP", "Regex extracted VP key: " + _0x1f32ad[1]);
          return _0x1f32ad[1];
        }
      } catch (_0x333921) {
        _0x496cbf.error("চাঁদের হাট VIP", "Regex extraction also failed: " + _0x333921.message);
      }
      _0x496cbf.error("চাঁদের হাট VIP", "All key extraction methods failed for URL: " + _0x183cfa);
      return null;
    }
  }
  async function _0x497680(_0x1b67dd) {
    _0x496cbf.log("চাঁদের হাট VIP", "Starting extraction process");
    _0x1a5265("🔍", "EXTRACTING VPLINK.IN FROM PAGE...", "#ff00ff", "log-highlight");
    await new Promise(_0x7aaa81 => setTimeout(_0x7aaa81, 800));
    const _0x58623e = _0x2939eb();
    if (!_0x58623e) {
      _0x1a5265("❌", "NO VPLINK.IN URL FOUND ON PAGE", "#ff4757", "log-error");
      _0x1a5265("⚠", "PAGE EXTRACTION FAILED", "#ffa500", "log-highlight");
      _0x1a5265("", "━".repeat(35), "#cbd5e1", "log-separator");
      _0x1a5265("📊", "FAILURE ANALYSIS", "#ff4757", "log-highlight");
      _0x1a5265("●", "STATUS: FAILED", "#ff4757");
      _0x1a5265("●", "MODULE: চাঁদের হাট VIP", "#ff00ff");
      _0x2e2f36 = true;
      const _0x25de87 = {
        url: _0x1ace19.fallbackRedirectUrl,
        apiData: null,
        pin: _0x41d9dc,
        isReal: false,
        serverMessage: "❌ NO VPLINK.IN URL FOUND",
        isError: true,
        isFakeUrl: true
      };
      _0x3b9600 = _0x25de87;
      _0x3b01f2 = Date.now() - _0xef19e3;
      _0x242ad4();
      return;
    }
    _0x1a5265("✅", "FOUND: " + (_0x58623e.length > 50 ? _0x58623e.substring(0, 50) + "..." : _0x58623e), "#2ecc71", "log-success");
    const _0x2f4f8d = _0xaf206f(_0x58623e);
    if (!_0x2f4f8d) {
      _0x1a5265("❌", "FAILED TO EXTRACT KEY FROM URL", "#ff4757", "log-error");
      _0x1a5265("⚠", "KEY EXTRACTION FAILED", "#ffa500", "log-highlight");
      _0x2e2f36 = true;
      const _0x166d8a = {
        url: _0x1ace19.fallbackRedirectUrl,
        apiData: null,
        pin: _0x41d9dc,
        isReal: false,
        serverMessage: "❌ KEY EXTRACTION FAILED",
        isError: true,
        isFakeUrl: true
      };
      _0x3b9600 = _0x166d8a;
      _0x3b01f2 = Date.now() - _0xef19e3;
      _0x242ad4();
      return;
    }
    _0x1a5265("🔑", "VP KEY: " + _0x2f4f8d.toUpperCase(), "#ff00ff", "log-key-found");
    _0x1a5265("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x1a5265("📡", "INITIALIZING চাঁদের হাট VIP CONNECTION...", "#00f2ff", "log-highlight");
    await _0x185c77(_0x1b67dd, _0x2f4f8d);
  }
  async function _0x185c77(_0x1758e4, _0x3e51d1, _0xe1883c = 1) {
    const _0xadfae3 = 3;
    _0x496cbf.log("চাঁদের হাট VIP", "fetchVipteamRedirectUrl: type=" + _0x1758e4 + ", vpKey=" + _0x3e51d1 + ", attempt=" + _0xe1883c + "/" + _0xadfae3);
    try {
      _0x496cbf.log("চাঁদের হাট VIP", "Generating TOTP pin...");
      const _0x25651d = await _0x2ad6fe.generate();
      _0x41d9dc = _0x25651d;
      _0x496cbf.log("চাঁদের হাট VIP", "PIN: " + _0x25651d);
      const _0x5ca2a8 = _0x1ace19.apiBaseUrl + "?file=crx.json&type=" + _0x1758e4 + "&key=" + _0x1ace19.apiKey + "&pin=" + _0x25651d + "&vp=" + _0x3e51d1;
      if (_0xe1883c > 1) {
        _0x1a5265("🔄", "ATTEMPT " + _0xe1883c + " OF " + _0xadfae3, "#ffa500", "log-highlight");
      }
      _0x1a5265("📡", "REQUESTING: " + _0x1ace19.apiBaseUrl + "?file=crx.json&type=" + _0x1758e4 + "&key=" + _0x1ace19.apiKey + "&pin=******&vp=" + _0x3e51d1, "#4a5568");
      const _0x353cde = new AbortController();
      const _0x54adce = setTimeout(() => {
        _0x496cbf.log("চাঁদের হাট VIP", "Request timeout, aborting...");
        _0x353cde.abort();
      }, 15000);
      const _0x299d91 = performance.now();
      const _0xb81bdd = await fetch(_0x5ca2a8, {
        signal: _0x353cde.signal,
        headers: {
          Accept: "application/json",
          "Cache-Control": "no-cache"
        }
      });
      clearTimeout(_0x54adce);
      _0x496cbf.log("চাঁদের হাট VIP", "Response: " + _0xb81bdd.status + " (" + (performance.now() - _0x299d91).toFixed(0) + "ms)");
      _0x1a5265("📡", "RESPONSE: " + _0xb81bdd.status + " " + _0xb81bdd.statusText, _0xb81bdd.ok ? "#2ecc71" : "#ff4757");
      if (!_0xb81bdd.ok) {
        _0x496cbf.log("চাঁদের হাট VIP", "Trying previous TOTP window...");
        const _0x2e2609 = await _0x2ad6fe.generate(-1);
        _0x41d9dc = _0x2e2609;
        _0x1a5265("🔐", "CHECKING PREVIOUS WINDOW...", "#00f2ff");
        const _0x299f5e = _0x1ace19.apiBaseUrl + "?file=crx.json&type=" + _0x1758e4 + "&key=" + _0x1ace19.apiKey + "&pin=" + _0x2e2609 + "&vp=" + _0x3e51d1;
        const _0x272e86 = await fetch(_0x299f5e, {
          headers: {
            Accept: "application/json"
          }
        });
        _0x496cbf.log("চাঁদের হাট VIP", "Retry response: " + _0x272e86.status);
        _0x1a5265("📡", "RETRY RESPONSE: " + _0x272e86.status, _0x272e86.ok ? "#2ecc71" : "#ff4757");
        if (!_0x272e86.ok) {
          if (_0xe1883c < _0xadfae3) {
            _0x496cbf.log("চাঁদের হাট VIP", "Retrying (" + (_0xe1883c + 1) + "/" + _0xadfae3 + ")...");
            _0x1a5265("⏳", "RETRYING (" + (_0xe1883c + 1) + "/" + _0xadfae3 + ")...", "#ffa500");
            await new Promise(_0x3cb6bf => setTimeout(_0x3cb6bf, 2000));
            return _0x185c77(_0x1758e4, _0x3e51d1, _0xe1883c + 1);
          }
          throw new Error("FAILED AFTER " + _0xadfae3 + " ATTEMPTS");
        }
        const _0x2ace48 = await _0x272e86.json();
        _0x4cd515 = _0x2ace48;
        return _0x92732f(_0x2ace48, _0x2e2609, _0x3e51d1, _0xe1883c);
      }
      const _0x1fa028 = await _0xb81bdd.json();
      _0x496cbf.log("চাঁদের হাট VIP", "Response data received");
      _0x4cd515 = _0x1fa028;
      return _0x92732f(_0x1fa028, _0x25651d, _0x3e51d1, _0xe1883c);
    } catch (_0x451694) {
      _0x496cbf.error("চাঁদের হাট VIP", "Error: " + _0x451694.message);
      _0x1a5265("❌", "ERROR: " + _0x451694.message, "#ff4757", "log-error");
      if (_0xe1883c < _0xadfae3) {
        _0x496cbf.log("চাঁদের হাট VIP", "Retrying after error (" + (_0xe1883c + 1) + "/" + _0xadfae3 + ")...");
        _0x1a5265("⏳", "RETRYING (" + (_0xe1883c + 1) + "/" + _0xadfae3 + ")...", "#ffa500");
        await new Promise(_0x549092 => setTimeout(_0x549092, 2000));
        return _0x185c77(_0x1758e4, _0x3e51d1, _0xe1883c + 1);
      }
      _0x496cbf.error("চাঁদের হাট VIP", "All " + _0xadfae3 + " attempts exhausted");
      _0x1a5265("❌", "ALL " + _0xadfae3 + " ATTEMPTS EXHAUSTED", "#ff4757", "log-error");
      return _0x419fed("❌ SERVER REJECTED AFTER MAX ATTEMPTS");
    }
  }
  function _0x92732f(_0x501ee3, _0xf1cffc, _0x4c900a, _0x1e439e) {
    const _0x16b3a3 = 3;
    const _0x59aaaa = _0x501ee3.destinationLink || _0x1ace19.fallbackRedirectUrl;
    _0x496cbf.log("চাঁদের হাট VIP", "Processing response, destination: " + (_0x59aaaa || "N/A").substring(0, 60));
    _0x1a5265("📋", "PARSING SERVER RESPONSE...", "#00f2ff", "log-highlight");
    _0x1a5265("●", "TYPE: " + (_0x501ee3.type || "N/A").toUpperCase(), "#4a5568");
    _0x1a5265("●", "VERIFIED: " + (_0x501ee3.verified ? "✅ YES" : "❌ NO"), _0x501ee3.verified ? "#2ecc71" : "#ff4757");
    _0x1a5265("●", "OWNER: " + (_0x501ee3.owner || "@TEAM_HBS"), "#718096");
    if (_0x501ee3.success !== undefined) {
      _0x1a5265("●", "SUCCESS FLAG: " + _0x501ee3.success, _0x501ee3.success ? "#2ecc71" : "#ff4757");
    }
    if (_0x501ee3.destinationLink) {
      const _0x9b0906 = _0x501ee3.destinationLink.length > 50 ? _0x501ee3.destinationLink.substring(0, 50) + "..." : _0x501ee3.destinationLink;
      _0x1a5265("🔗", "DESTINATION: " + _0x9b0906, "#4a5568");
    }
    if (_0x5acd7f(_0x59aaaa)) {
      _0x496cbf.log("চাঁদের হাট VIP", "Fake URL (Telegram link) detected");
      _0x1a5265("⚠", "FAKE URL DETECTED (Attempt " + _0x1e439e + "/" + _0x16b3a3 + ")", "#ffa500", "log-highlight");
      if (_0x1e439e < _0x16b3a3) {
        _0x1a5265("🔄", "RETRYING... Attempt " + (_0x1e439e + 1) + " of " + _0x16b3a3, "#ffa500", "log-highlight");
        return _0x185c77(_0x501ee3.type || "vp", _0x4c900a, _0x1e439e + 1);
      }
      _0x1a5265("❌", "ALL " + _0x16b3a3 + " ATTEMPTS FAILED — FAKE URLS", "#ff4757", "log-error");
      return _0x419fed("❌ SERVER REJECTED — FAKE URLS AFTER MAX ATTEMPTS");
    } else if (_0x37ce49(_0x59aaaa)) {
      _0x496cbf.log("চাঁদের হাট VIP", "Valid redirect URL found!");
      _0x1a5265("✅", "AUTHENTIC VIP TEAM LINK FOUND!", "#2ecc71", "log-success");
      return _0x2e7f9f(_0x59aaaa, _0x501ee3, _0xf1cffc);
    } else {
      _0x496cbf.log("চাঁদের হাট VIP", "Invalid URL format");
      _0x1a5265("⚠", "INVALID URL FORMAT (Attempt " + _0x1e439e + "/" + _0x16b3a3 + ")", "#ffa500", "log-highlight");
      if (_0x1e439e < _0x16b3a3) {
        _0x1a5265("🔄", "RETRYING... Attempt " + (_0x1e439e + 1) + " of " + _0x16b3a3, "#ffa500", "log-highlight");
        return _0x185c77(_0x501ee3.type || "vp", _0x4c900a, _0x1e439e + 1);
      }
      _0x1a5265("❌", "ALL " + _0x16b3a3 + " ATTEMPTS FAILED — INVALID URLS", "#ff4757", "log-error");
      return _0x419fed("❌ SERVER REJECTED — INVALID URLS AFTER MAX ATTEMPTS");
    }
  }
  function _0x2e7f9f(_0x187e98, _0x2b3964, _0x2bdc3) {
    _0x496cbf.log("চাঁদের হাট VIP", "SUCCESS, redirect: " + _0x187e98.substring(0, 60));
    _0x405098 = true;
    _0x51f05e = Date.now();
    const _0x1d1040 = _0x51f05e - _0xef19e3;
    _0x1a5265("✅", "VIP LINK VERIFIED SUCCESSFULLY", "#2ecc71", "log-success");
    _0x1a5265("🎯", "", "#2ecc71", "log-success");
    _0x1a5265("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x1a5265("📊", "FINAL ANALYSIS", "#ffa500", "log-highlight");
    _0x1a5265("●", "STATUS: SUCCESS", "#2ecc71", "log-success");
    _0x1a5265("●", "TYPE: চাঁদের হাট VIP", "#ff00ff");
    _0x1a5265("●", "ELAPSED: " + (_0x1d1040 / 1000).toFixed(1) + "s", "#4a5568");
    const _0x1a16cd = Math.max(0, _0x1ace19.minProgressTime - _0x1d1040);
    _0x2e2f36 = true;
    const _0x26c4d4 = {
      url: _0x187e98,
      apiData: _0x2b3964,
      pin: _0x2bdc3,
      isReal: true,
      serverMessage: "✅ VIP LINK VERIFIED",
      isError: false,
      isFakeUrl: false
    };
    _0x3b9600 = _0x26c4d4;
    if (_0x1d1040 >= _0x1ace19.minProgressTime) {
      _0x3b01f2 = _0x1d1040;
      _0x242ad4();
    } else {
      _0x3b01f2 = _0x1ace19.minProgressTime;
      _0x553b56(_0x1a16cd);
    }
    return _0x3b9600;
  }
  function _0x419fed(_0x1cc779) {
    _0x496cbf.error("চাঁদের হাট VIP", "FAILURE: " + _0x1cc779);
    _0x405098 = false;
    _0x51f05e = Date.now();
    const _0x286363 = _0x51f05e - _0xef19e3;
    _0x1a5265("❌", _0x1cc779, "#ff4757", "log-error");
    _0x1a5265("⚠", "FALLBACK PROTOCOL ACTIVATED", "#ffa500", "log-highlight");
    _0x1a5265("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x1a5265("📊", "FAILURE ANALYSIS", "#ff4757", "log-highlight");
    _0x1a5265("●", "STATUS: FAILED", "#ff4757");
    _0x1a5265("●", "TYPE: চাঁদের হাট VIP", "#ff00ff");
    _0x1a5265("●", "ELAPSED: " + (_0x286363 / 1000).toFixed(1) + "s", "#4a5568");
    _0x2e2f36 = true;
    const _0x236548 = {
      url: _0x1ace19.fallbackRedirectUrl,
      apiData: _0x4cd515,
      pin: _0x41d9dc,
      isReal: false,
      serverMessage: _0x1cc779,
      isError: true,
      isFakeUrl: true
    };
    _0x3b9600 = _0x236548;
    _0x3b01f2 = _0x286363;
    _0x242ad4();
    return _0x3b9600;
  }
  function _0x42b2b5(_0x2baad9, _0x3cd507, _0xcff17d) {
    _0x496cbf.log("REDIRECT", "Redirecting to: " + _0x2baad9.substring(0, 60));
    if (_0x49bbb3) {
      return;
    }
    _0x49bbb3 = true;
    _0x671109();
    const _0x168553 = document.getElementById("log-output");
    if (_0x168553) {
      const _0x459fad = document.createElement("div");
      _0x459fad.style.cssText = "text-align:center;margin-top:10px;animation:nb-fadeIn 0.5s ease forwards;flex-shrink:0;";
      if (_0xcff17d) {
        _0x459fad.innerHTML = "\n          <div class=\"nb-success-check\">✓</div>\n          <div style=\"color:var(--success-color);font-size:14px;font-weight:800;letter-spacing:1px;margin-top:6px;\">SUCCESS</div>\n          <div style=\"color:var(--text-muted);font-size:10px;margin-top:2px;\">" + _0x1d422a + " — AUTHENTIC REDIRECT</div>\n          <div style=\"color:var(--success-color);font-size:9px;margin-top:2px;word-break:break-all;\">" + (_0x2baad9.length > 50 ? _0x2baad9.substring(0, 50) + "..." : _0x2baad9) + "</div>\n          <div id=\"nb-cd\" style=\"color:var(--text-color);font-size:9px;margin-top:6px;font-weight:700;\">REDIRECTING IN 3s...</div>\n        ";
      } else {
        _0x459fad.innerHTML = "\n          <div style=\"width:40px;height:40px;background:var(--danger-color);color:#fff;border-radius:50%;font-size:20px;display:flex;justify-content:center;align-items:center;margin:0 auto 6px;box-shadow:0 0 20px rgba(255,71,87,0.4);animation:nb-fadeIn 0.4s ease forwards;flex-shrink:0;\">✕</div>\n          <div style=\"color:var(--danger-color);font-size:14px;font-weight:800;letter-spacing:1px;margin-top:6px;\">SERVER REJECTED</div>\n          <div style=\"color:var(--text-muted);font-size:10px;margin-top:2px;\">" + _0x1d422a + " — FALLBACK ACTIVATED</div>\n          <div style=\"color:var(--danger-color);font-size:9px;margin-top:2px;\">ALL RETRIES EXHAUSTED</div>\n          <div id=\"nb-cd\" style=\"color:var(--text-color);font-size:9px;margin-top:6px;font-weight:700;\">REDIRECTING IN 3s...</div>\n        ";
      }
      _0x168553.appendChild(_0x459fad);
      _0x168553.scrollTop = _0x168553.scrollHeight;
    }
    let _0x246870 = 3;
    const _0x44fb9c = setInterval(() => {
      _0x246870--;
      const _0x13bc8d = document.getElementById("nb-cd");
      if (_0x13bc8d) {
        _0x13bc8d.textContent = "REDIRECTING IN " + _0x246870 + "s...";
      }
      if (_0x246870 <= 0) {
        clearInterval(_0x44fb9c);
        if (_0x3cd507) {
          _0x3cd507.style.transition = "opacity 0.4s";
          _0x3cd507.style.opacity = "0";
        }
        setTimeout(() => {
          try {
            window.location.replace(_0x2baad9);
          } catch (_0x4a10a6) {
            window.location.href = _0x2baad9;
          }
        }, 400);
      }
    }, 1000);
  }
  (async function () {
    _0x496cbf.log("BOOT", "═══════ NEBULA v20.1 BOOTING ═══════");
    _0x496cbf.log("BOOT", "Protocol: " + window.location.protocol);
    _0x496cbf.log("BOOT", "URL: " + window.location.href);
    await _0x376a5a();
    await _0x50f1db();
    if (_0x513654()) {
      _0x22c055();
      return;
    }
    if (_0x5aff6e()) {
      _0x4175ab();
      return;
    }
    if (_0x1ace19.status === 0) {
      _0x3794f3();
      return;
    }
    if (_0x1ace19.status === 2) {
      _0x3a11c2();
      return;
    }
    await _0x197809();
    _0x496cbf.log("BOOT", "═══════ BOOT COMPLETE ═══════");
    _0x409133();
  })();
})();