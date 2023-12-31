const _0x85dfef = _0x2703;
(function (_0x415aa8, _0x9dd4c7) {
  const _0x31c2a8 = _0x2703,
    _0x392c5a = _0x415aa8();
  while (!![]) {
    try {
      const _0x949094 =
        -parseInt(_0x31c2a8(0x86)) / 0x1 +
        parseInt(_0x31c2a8(0x83)) / 0x2 +
        (-parseInt(_0x31c2a8(0x7f)) / 0x3) *
          (-parseInt(_0x31c2a8(0x85)) / 0x4) +
        parseInt(_0x31c2a8(0x8a)) / 0x5 +
        -parseInt(_0x31c2a8(0x76)) / 0x6 +
        -parseInt(_0x31c2a8(0x7b)) / 0x7 +
        parseInt(_0x31c2a8(0x78)) / 0x8;
      if (_0x949094 === _0x9dd4c7) break;
      else _0x392c5a["push"](_0x392c5a["shift"]());
    } catch (_0x19623f) {
      _0x392c5a["push"](_0x392c5a["shift"]());
    }
  }
})(_0x15ba, 0xf3cec);
const fs = require("fs"),
  path = require(_0x85dfef(0x89)),
  { program } = require(_0x85dfef(0x7e)),
  prettier = require("prettier"),
  quoteIfNeeded = function (_0x254bb0) {
    return /^[a-zA-Z_]\w*$/["test"](_0x254bb0)
      ? _0x254bb0
      : "\x22" + _0x254bb0 + "\x22";
  },
  saveInterfaces = function (_0x514ce9, _0x2cb53c) {
    const _0x253da1 = _0x85dfef;
    try {
      fs[_0x253da1(0x88)](_0x2cb53c, _0x514ce9),
        console["log"](
          _0x253da1(0x95),
          path[_0x253da1(0x8e)](process[_0x253da1(0x87)](), _0x2cb53c)
        );
    } catch (_0x117911) {
      console["error"](_0x253da1(0x8f), _0x117911);
    }
  };
function _0x2703(_0x333f47, _0x358734) {
  const _0x15ba60 = _0x15ba();
  return (
    (_0x2703 = function (_0x270399, _0x1c2590) {
      _0x270399 = _0x270399 - 0x76;
      let _0x299320 = _0x15ba60[_0x270399];
      return _0x299320;
    }),
    _0x2703(_0x333f47, _0x358734)
  );
}
program[_0x85dfef(0x7c)](_0x85dfef(0x79), "Path\x20to\x20the\x20JSON\x20file")
  [_0x85dfef(0x7c)](
    _0x85dfef(0x91),
    "Path\x20to\x20the\x20output\x20TypeScript\x20file\x20(default:\x20outputInterfaces.ts)"
  )
  [_0x85dfef(0x77)](process[_0x85dfef(0x90)]);
function _0x15ba() {
  const _0x327739 = [
    "all",
    "push",
    "resolve",
    "Error\x20saving\x20interfaces\x20to\x20file:\x20",
    "argv",
    "-o,\x20--output\x20[outputFile]",
    "Error:\x20Path\x20to\x20the\x20JSON\x20file\x20is\x20required.\x20Use\x20-p\x20or\x20--path\x20option.",
    "utf-8",
    "object",
    "Interfaces\x20saved\x20to:\x20",
    "10363398cOUpJl",
    "parse",
    "8753456aCacxm",
    "-p,\x20--path\x20<filePath>",
    "entries",
    "3073168NXUFkp",
    "option",
    "join",
    "commander",
    "637368tdqcOa",
    "format",
    "error",
    "map",
    "1884492mWTbAo",
    "\x20{\x0a",
    "16GkOaLD",
    "1387379YubpJF",
    "cwd",
    "writeFileSync",
    "path",
    "8330100aeCZAs",
    "readFileSync",
  ];
  _0x15ba = function () {
    return _0x327739;
  };
  return _0x15ba();
}
const { path: filePath, output = "outputInterfaces.ts" } = program["opts"]();
!filePath && (console[_0x85dfef(0x81)](_0x85dfef(0x92)), program["help"]());
(async () => {
  const _0x2ae976 = _0x85dfef;
  try {
    const _0x8e4bd7 = JSON[_0x2ae976(0x77)](
        fs[_0x2ae976(0x8b)](filePath, _0x2ae976(0x93))
      ),
      _0x2321bd = await generateInterface(_0x8e4bd7);
    saveInterfaces(_0x2321bd, output);
  } catch (_0x1ffad4) {
    console[_0x2ae976(0x81)](_0x1ffad4);
  }
})();
async function generateInterface(_0x4283a4) {
  const _0x45f716 = _0x85dfef;
  try {
    const _0x4b14bf = [];
    for (const [_0x149640, _0x4111e9] of Object[_0x45f716(0x7a)](_0x4283a4)) {
      const _0x13ee03 =
        "interface\x20" +
        _0x149640 +
        "\x20" +
        (await generateInterfaceType(_0x4111e9)) +
        ";";
      _0x4b14bf[_0x45f716(0x8d)](_0x13ee03);
    }
    _0x4b14bf[_0x45f716(0x8d)](
      "export\x20default\x20interface\x20" +
        path["basename"](filePath, path["extname"](filePath)) +
        _0x45f716(0x84) +
        Object["entries"](_0x4283a4)
          [_0x45f716(0x82)](
            ([_0x1a9a84, _0x4d2321]) =>
              quoteIfNeeded(_0x1a9a84) + ":\x20" + quoteIfNeeded(_0x1a9a84)
          )
          [_0x45f716(0x7d)]("\x0a") +
        "\x0a}"
    );
    const _0x54e360 = _0x4b14bf[_0x45f716(0x7d)]("\x0a\x0a");
    return prettier[_0x45f716(0x80)](_0x54e360, { parser: "typescript" });
  } catch (_0x56d2c0) {
    throw new Error("Failed\x20to\x20generate\x20interfaces");
  }
}
async function generateInterfaceType(_0x2e998f, _0x1872bf = 0x2) {
  const _0x1ce862 = _0x85dfef;
  if (typeof _0x2e998f === _0x1ce862(0x94)) {
    const _0x569e02 = await Promise[_0x1ce862(0x8c)](
      Object[_0x1ce862(0x7a)](_0x2e998f)[_0x1ce862(0x82)](
        async ([_0x17ab84, _0x29b32e]) => {
          const _0x4c646e = await generateInterfaceType(
            _0x29b32e,
            _0x1872bf + 0x2
          );
          return quoteIfNeeded(_0x17ab84) + ":\x20" + _0x4c646e;
        }
      )
    );
    return "{\x0a" + _0x569e02[_0x1ce862(0x7d)](",\x0a") + "\x0a}";
  } else return typeof _0x2e998f;
}
