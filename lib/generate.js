const _0x14fc4a = _0xc4d6;
(function (_0x4bd98b, _0x259ade) {
  const _0xa91c8d = _0xc4d6,
    _0x2f14f6 = _0x4bd98b();
  while (!![]) {
    try {
      const _0xb92530 =
        (parseInt(_0xa91c8d(0x1bb)) / 0x1) *
          (parseInt(_0xa91c8d(0x1dc)) / 0x2) +
        (parseInt(_0xa91c8d(0x1c4)) / 0x3) *
          (parseInt(_0xa91c8d(0x1d7)) / 0x4) +
        (-parseInt(_0xa91c8d(0x1b4)) / 0x5) *
          (parseInt(_0xa91c8d(0x1ca)) / 0x6) +
        (parseInt(_0xa91c8d(0x1e1)) / 0x7) *
          (parseInt(_0xa91c8d(0x1cb)) / 0x8) +
        parseInt(_0xa91c8d(0x1e2)) / 0x9 +
        parseInt(_0xa91c8d(0x1e7)) / 0xa +
        -parseInt(_0xa91c8d(0x1b7)) / 0xb;
      if (_0xb92530 === _0x259ade) break;
      else _0x2f14f6["push"](_0x2f14f6["shift"]());
    } catch (_0x4b15d6) {
      _0x2f14f6["push"](_0x2f14f6["shift"]());
    }
  }
})(_0x4277, 0x946b8);
const _0x257445 = (function () {
    let _0x40f599 = !![];
    return function (_0x272b22, _0x17f269) {
      const _0x2c55d4 = _0x40f599
        ? function () {
            const _0x4fb704 = _0xc4d6;
            if (_0x17f269) {
              const _0x34f410 = _0x17f269[_0x4fb704(0x1d6)](
                _0x272b22,
                arguments
              );
              return (_0x17f269 = null), _0x34f410;
            }
          }
        : function () {};
      return (_0x40f599 = ![]), _0x2c55d4;
    };
  })(),
  _0x37de43 = _0x257445(this, function () {
    const _0x1cb803 = _0xc4d6;
    return _0x37de43["toString"]()
      [_0x1cb803(0x1c1)](_0x1cb803(0x1ce))
      [_0x1cb803(0x1be)]()
      [_0x1cb803(0x1bd)](_0x37de43)
      [_0x1cb803(0x1c1)]("(((.+)+)+)+$");
  });
_0x37de43();
const _0x14ff32 = (function () {
    let _0x43bd50 = !![];
    return function (_0x84225a, _0x3d131e) {
      const _0x4f202c = _0x43bd50
        ? function () {
            if (_0x3d131e) {
              const _0x46043d = _0x3d131e["apply"](_0x84225a, arguments);
              return (_0x3d131e = null), _0x46043d;
            }
          }
        : function () {};
      return (_0x43bd50 = ![]), _0x4f202c;
    };
  })(),
  _0x2cc361 = _0x14ff32(this, function () {
    const _0x5d1e4e = _0xc4d6,
      _0x56b53b = function () {
        const _0x4943f7 = _0xc4d6;
        let _0xa98498;
        try {
          _0xa98498 = Function(_0x4943f7(0x1d3) + _0x4943f7(0x1dd) + ");")();
        } catch (_0x24229d) {
          _0xa98498 = window;
        }
        return _0xa98498;
      },
      _0x5359cd = _0x56b53b(),
      _0x20e2b5 = (_0x5359cd[_0x5d1e4e(0x1cc)] =
        _0x5359cd[_0x5d1e4e(0x1cc)] || {}),
      _0x40c95 = [
        _0x5d1e4e(0x1c0),
        _0x5d1e4e(0x1d4),
        _0x5d1e4e(0x1c5),
        "error",
        "exception",
        _0x5d1e4e(0x1cd),
        "trace",
      ];
    for (
      let _0x2f8a18 = 0x0;
      _0x2f8a18 < _0x40c95[_0x5d1e4e(0x1e6)];
      _0x2f8a18++
    ) {
      const _0x3e357a =
          _0x14ff32[_0x5d1e4e(0x1bd)][_0x5d1e4e(0x1c8)][_0x5d1e4e(0x1db)](
            _0x14ff32
          ),
        _0x2b05b3 = _0x40c95[_0x2f8a18],
        _0x3d9d22 = _0x20e2b5[_0x2b05b3] || _0x3e357a;
      (_0x3e357a["__proto__"] = _0x14ff32["bind"](_0x14ff32)),
        (_0x3e357a["toString"] =
          _0x3d9d22["toString"][_0x5d1e4e(0x1db)](_0x3d9d22)),
        (_0x20e2b5[_0x2b05b3] = _0x3e357a);
    }
  });
_0x2cc361();
const fs = require("fs"),
  path = require("path"),
  { _0x435ffe: program } = require("commander"),
  prettier = require(_0x14fc4a(0x1b2)),
  quoteIfNeeded = function (_0x1064fd) {
    const _0x5ceb93 = _0x14fc4a;
    return /^[a-zA-Z_]\w*$/[_0x5ceb93(0x1d2)](_0x1064fd)
      ? _0x1064fd
      : "\x22" + _0x1064fd + "\x22";
  },
  saveInterfaces = function (_0x535842, _0xc0acc8) {
    const _0x37d589 = _0x14fc4a;
    try {
      fs[_0x37d589(0x1b6)](_0xc0acc8, _0x535842),
        console[_0x37d589(0x1c0)](
          _0x37d589(0x1e3),
          path[_0x37d589(0x1b3)](process[_0x37d589(0x1c9)](), _0xc0acc8)
        );
    } catch (_0x4f0295) {
      console[_0x37d589(0x1c7)](
        "Error\x20saving\x20interfaces\x20to\x20file:\x20",
        _0x4f0295
      );
    }
  };
program[_0x14fc4a(0x1c2)](_0x14fc4a(0x1de), _0x14fc4a(0x1df))
  ["_0xe3eece"](_0x14fc4a(0x1da), _0x14fc4a(0x1b5))
  [_0x14fc4a(0x1bf)](process["_0x3f490a"]);
function _0xc4d6(_0x24e712, _0x3e7bae) {
  const _0x591815 = _0x4277();
  return (
    (_0xc4d6 = function (_0x2cc361, _0x14ff32) {
      _0x2cc361 = _0x2cc361 - 0x1b0;
      let _0x5f039f = _0x591815[_0x2cc361];
      return _0x5f039f;
    }),
    _0xc4d6(_0x24e712, _0x3e7bae)
  );
}
const { path: filePath, _0x59e6e5: output = _0x14fc4a(0x1d8) } =
  program[_0x14fc4a(0x1bc)]();
!filePath &&
  (console[_0x14fc4a(0x1c7)](_0x14fc4a(0x1d9)), program[_0x14fc4a(0x1e0)]());
(async () => {
  const _0x299429 = _0x14fc4a;
  try {
    const _0xb08d11 = JSON[_0x299429(0x1bf)](
        fs[_0x299429(0x1b1)](filePath, "utf-8")
      ),
      _0x2442b6 = await generateInterface(_0xb08d11);
    saveInterfaces(_0x2442b6, output);
  } catch (_0x3bc7d8) {
    console[_0x299429(0x1c7)](_0x3bc7d8);
  }
})();
async function generateInterface(_0x36df73) {
  const _0x31ef94 = _0x14fc4a;
  try {
    const _0x2e66b6 = [];
    for (const [_0xf04a32, _0x1eaa7b] of Object["entries"](_0x36df73)) {
      const _0x24937f =
        _0x31ef94(0x1d1) +
        _0xf04a32 +
        "\x20" +
        (await generateInterfaceType(_0x1eaa7b)) +
        ";";
      _0x2e66b6[_0x31ef94(0x1e5)](_0x24937f);
    }
    _0x2e66b6[_0x31ef94(0x1e5)](
      _0x31ef94(0x1d1) +
        path[_0x31ef94(0x1d0)](filePath, path[_0x31ef94(0x1b9)](filePath)) +
        _0x31ef94(0x1c6) +
        Object[_0x31ef94(0x1b8)](_0x36df73)
          ["map"](
            ([_0x2c1e46, _0x12644d]) =>
              quoteIfNeeded(_0x2c1e46) + ":\x20" + quoteIfNeeded(_0x2c1e46)
          )
          [_0x31ef94(0x1ba)]("\x0a") +
        "\x0a}"
    );
    const _0x288590 = _0x2e66b6["join"]("\x0a\x0a");
    return prettier[_0x31ef94(0x1cf)](_0x288590, { _0x1c5c48: "typescript" });
  } catch (_0x24896c) {
    throw new Error(_0x31ef94(0x1b0));
  }
}
async function generateInterfaceType(_0x3b9b9c, _0x1bcba7 = 0x2) {
  const _0x2bbbbc = _0x14fc4a;
  if (typeof _0x3b9b9c === _0x2bbbbc(0x1d5)) {
    const _0x596e03 = await Promise[_0x2bbbbc(0x1c3)](
      Object[_0x2bbbbc(0x1b8)](_0x3b9b9c)[_0x2bbbbc(0x1e4)](
        async ([_0x598e7b, _0x2a3f05]) => {
          const _0x397048 = await generateInterfaceType(
            _0x2a3f05,
            _0x1bcba7 + 0x2
          );
          return quoteIfNeeded(_0x598e7b) + ":\x20" + _0x397048;
        }
      )
    );
    return "{\x0a" + _0x596e03["join"](",\x0a") + "\x0a}";
  } else return typeof _0x3b9b9c;
}
function _0x4277() {
  const _0x2f22c9 = [
    "1204165tcShZh",
    "Path\x20to\x20the\x20output\x20TypeScript\x20file\x20(default:\x20outputInterfaces.ts)",
    "_0x199bf8",
    "20147655wtJHEZ",
    "entries",
    "_0x3c2dc9",
    "join",
    "580646cdPZPH",
    "_0x30641b",
    "constructor",
    "toString",
    "parse",
    "log",
    "search",
    "_0xe3eece",
    "all",
    "133422NDBDeJ",
    "info",
    "\x20{\x0a",
    "error",
    "prototype",
    "_0x57b8ed",
    "18TDuWbM",
    "3827640fAZKzq",
    "console",
    "table",
    "(((.+)+)+)+$",
    "format",
    "_0x174715",
    "interface\x20",
    "test",
    "return\x20(function()\x20",
    "warn",
    "object",
    "apply",
    "28cWeKms",
    "outputInterfaces.ts",
    "Error:\x20Path\x20to\x20the\x20JSON\x20file\x20is\x20required.\x20Use\x20-p\x20or\x20--path\x20option.",
    "-o,\x20--output\x20[outputFile]",
    "bind",
    "2dPeSbX",
    "{}.constructor(\x22return\x20this\x22)(\x20)",
    "-p,\x20--path\x20<filePath>",
    "Path\x20to\x20the\x20JSON\x20file",
    "_0x2a3aa7",
    "7CcwvaD",
    "9086886APmDsA",
    "Interfaces\x20saved\x20to:\x20",
    "map",
    "push",
    "length",
    "7819590VCgeDs",
    "Failed\x20to\x20generate\x20interfaces",
    "_0x376c2b",
    "prettier",
    "resolve",
  ];
  _0x4277 = function () {
    return _0x2f22c9;
  };
  return _0x4277();
}
