//Sun Jan 04 2026 16:08:07 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const _0x5e5d27 = function () {
  let _0x5dba6b = true;
  return function (_0x26e33d, _0x3b9e9b) {
    {
      const _0x18a2c6 = _0x5dba6b ? function () {
        {
          if (_0x3b9e9b) {
            {
              const _0x2dfcc8 = _0x3b9e9b.apply(_0x26e33d, arguments);
              _0x3b9e9b = null;
              return _0x2dfcc8;
            }
          }
        }
      } : function () {};
      _0x5dba6b = false;
      return _0x18a2c6;
    }
  };
}();
const _0x40b7ed = _0x5e5d27(this, function () {
  const _0x36d201 = function () {};
  const _0x11aa47 = function () {
    {
      let _0x2d174d;
      try {
        {
          _0x2d174d = Function("return (function() {}.constructor(\"return this\")( ));")();
        }
      } catch (_0x3c5b6a) {
        {
          _0x2d174d = window;
        }
      }
      return _0x2d174d;
    }
  };
  const _0x4de06b = _0x11aa47();
  if (!_0x4de06b.console) {
    {
      _0x4de06b.console = function (_0x163ee1) {
        {
          const _0x325044 = {
            log: _0x163ee1,
            warn: _0x163ee1,
            debug: _0x163ee1,
            info: _0x163ee1,
            error: _0x163ee1,
            exception: _0x163ee1,
            table: _0x163ee1,
            trace: _0x163ee1
          };
          return _0x325044;
        }
      }(_0x36d201);
    }
  } else {
    {
      _0x4de06b.console.log = _0x36d201;
      _0x4de06b.console.warn = _0x36d201;
      _0x4de06b.console.debug = _0x36d201;
      _0x4de06b.console.info = _0x36d201;
      _0x4de06b.console.error = _0x36d201;
      _0x4de06b.console.exception = _0x36d201;
      _0x4de06b.console.table = _0x36d201;
      _0x4de06b.console.trace = _0x36d201;
    }
  }
});
_0x40b7ed();
const article = document.getElementById("article");
const content = document.getElementById("content");
const controls = document.getElementById("controls");
const settingsIcon = document.getElementById("settings-icon");
const articleContent = document.getElementById("article-content");
let fontSize = parseInt(localStorage.getItem("fontSize")) || 16;
content.style.backgroundColor = localStorage.getItem("backgroundColor") || "#d0e8d0";
article.style.fontSize = fontSize + "px";
const urlParams = new URLSearchParams(window.location.search);
const book = urlParams.get("book");
const bookid = urlParams.get("bookid");
const imei = urlParams.get("imei");
const kouling = urlParams.get("kouling");
const secretKey = "97a88a411bf5f3b4bk21c7a7i107583c";
function encryptData(_0x361f5a, _0x6ecbdb) {
  const _0x12de91 = CryptoJS.enc.Utf8.parse(_0x6ecbdb);
  const _0x68e98a = CryptoJS.lib.WordArray.random(16);
  const _0x2c2b35 = CryptoJS.AES.encrypt(JSON.stringify(_0x361f5a), _0x12de91, {
    iv: _0x68e98a,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return _0x68e98a.concat(_0x2c2b35.ciphertext).toString(CryptoJS.enc.Base64);
}
function decryptData(_0xd15006, _0x3690d7) {
  try {
    {
      const _0x472f44 = CryptoJS.enc.Utf8.parse(_0x3690d7);
      const _0x30bed1 = CryptoJS.enc.Base64.parse(_0xd15006);
      const _0x50f410 = CryptoJS.lib.WordArray.create(_0x30bed1.words.slice(0, 4));
      const _0x81b6df = CryptoJS.lib.WordArray.create(_0x30bed1.words.slice(4));
      _0x50f410.sigBytes = 16;
      _0x81b6df.sigBytes = _0x30bed1.sigBytes - 16;
      const _0x3731c5 = {
        ciphertext: _0x81b6df
      };
      const _0x476e3e = CryptoJS.AES.decrypt(_0x3731c5, _0x472f44, {
        iv: _0x50f410,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });
      const _0x2a871d = _0x476e3e.toString(CryptoJS.enc.Utf8);
      if (!_0x2a871d) {
        throw new Error("解密结果为空字符串");
      }
      return _0x2a871d;
    }
  } catch (_0x1d007f) {
    {
      throw _0x1d007f;
    }
  }
}
async function fetchArticle() {
  if (!bookid) {
    {
      articleContent.innerHTML = "未提供有效的书籍 ID";
      return;
    }
  }
  try {
    {
      const _0x1478c5 = {
        bookid: bookid,
        imei: imei,
        kouling: kouling,
        book: book,
        time: Date.now()
      };
      const _0xc15b5e = encryptData(_0x1478c5, secretKey);
      const _0x1730b5 = await fetch("../api/content.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          endata: _0xc15b5e
        })
      });
      if (!_0x1730b5.ok) {
        throw new Error("网络响应错误: " + _0x1730b5.status);
      }
      const _0x4b7050 = await _0x1730b5.json();
      try {
        {
          const _0x106131 = decryptData(_0x4b7050.content, secretKey);
          articleContent.innerHTML = _0x106131;
        }
      } catch (_0xdd49ca) {
        {
          articleContent.innerHTML = _0x4b7050.content || "内容解密失败，但原始内容为空";
        }
      }
      const _0x5f4cf3 = localStorage.getItem("scrollPosition_" + bookid) || 0;
      setTimeout(() => {
        {
          content.scrollTop = _0x5f4cf3;
        }
      }, 0);
    }
  } catch (_0x1b7355) {
    {
      articleContent.innerHTML = "加载内容失败，请30秒后刷新重试！";
    }
  }
}
window.onload = fetchArticle;
content.addEventListener("scroll", () => {
  localStorage.setItem("scrollPosition_" + bookid, content.scrollTop);
});
window.addEventListener("beforeunload", () => {
  localStorage.setItem("backgroundColor", content.style.backgroundColor);
  localStorage.setItem("fontSize", fontSize);
});
function changeBackgroundColor(_0x5e8a16) {
  content.style.backgroundColor = _0x5e8a16;
}
function changeFontSize(_0xd712ce) {
  fontSize = Math.max(12, Math.min(36, fontSize + _0xd712ce));
  article.style.fontSize = fontSize + "px";
}
function toggleControls(_0x27ab33) {
  _0x27ab33.stopPropagation();
  controls.style.display = controls.style.display === "block" ? "none" : "block";
}
function toggleSettings(_0x22a0f1) {
  settingsIcon.style.display = settingsIcon.style.display === "none" || settingsIcon.style.display === "" ? "flex" : "none";
  if (settingsIcon.style.display === "none") {
    controls.style.display = "none";
  }
  _0x22a0f1.stopPropagation();
}
content.addEventListener("click", _0x1d306b => {
  settingsIcon.style.display = settingsIcon.style.display === "flex" ? "none" : "flex";
  if (settingsIcon.style.display === "none") {
    controls.style.display = "none";
  }
  _0x1d306b.stopPropagation();
});
settingsIcon.style.display = "none";