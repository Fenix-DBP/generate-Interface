const _0x83afa = _0x44c7;
(function (_0x35215e, _0x175a7c) {
  const _0x45a7b7 = _0x44c7,
    _0x289132 = _0x35215e();
  while (!![]) {
    try {
      const _0x22cecb =
        (parseInt(_0x45a7b7(0xce)) / 0x1) * (parseInt(_0x45a7b7(0xb8)) / 0x2) +
        (-parseInt(_0x45a7b7(0xcf)) / 0x3) *
          (-parseInt(_0x45a7b7(0xc6)) / 0x4) +
        -parseInt(_0x45a7b7(0xbc)) / 0x5 +
        (-parseInt(_0x45a7b7(0xc2)) / 0x6) *
          (-parseInt(_0x45a7b7(0xc1)) / 0x7) +
        -parseInt(_0x45a7b7(0xc8)) / 0x8 +
        (-parseInt(_0x45a7b7(0xd0)) / 0x9) * (parseInt(_0x45a7b7(0xb6)) / 0xa) +
        (parseInt(_0x45a7b7(0xb7)) / 0xb) * (parseInt(_0x45a7b7(0xd7)) / 0xc);
      if (_0x22cecb === _0x175a7c) break;
      else _0x289132["push"](_0x289132["shift"]());
    } catch (_0x598486) {
      _0x289132["push"](_0x289132["shift"]());
    }
  }
})(_0x2a73, 0x468a6);
const fs = require("fs"),
  path = require(_0x83afa(0xd1)),
  { program } = require(_0x83afa(0xbd)),
  prettier = require(_0x83afa(0xb3)),
  quoteIfNeeded = function (_0x5a0ef6) {
    const _0x2be6dc = _0x83afa;
    return /^[a-zA-Z_]\w*$/[_0x2be6dc(0xc4)](_0x5a0ef6)
      ? _0x5a0ef6
      : "\x22" + _0x5a0ef6 + "\x22";
  },
  saveInterfaces = function (_0x4c24e7, _0x1638ad) {
    const _0x3972e4 = _0x83afa;
    try {
      fs["writeFileSync"](_0x1638ad, _0x4c24e7),
        console["log"](
          _0x3972e4(0xb9),
          path[_0x3972e4(0xb2)](process["cwd"](), _0x1638ad)
        );
    } catch (_0x5027ad) {
      console["error"](_0x3972e4(0xc7), _0x5027ad);
    }
  };
function _0x44c7(_0x55c623, _0x43705f) {
  const _0x2a7352 = _0x2a73();
  return (
    (_0x44c7 = function (_0x44c721, _0x7ccba7) {
      _0x44c721 = _0x44c721 - 0xb2;
      let _0x445cd3 = _0x2a7352[_0x44c721];
      return _0x445cd3;
    }),
    _0x44c7(_0x55c623, _0x43705f)
  );
}
program["option"](_0x83afa(0xd6), "Path\x20to\x20the\x20JSON\x20file")
  [_0x83afa(0xd4)](
    _0x83afa(0xc0),
    "Path\x20to\x20the\x20output\x20TypeScript\x20file\x20(default:\x20outputInterfaces.ts)"
  )
  [_0x83afa(0xc5)](process["argv"]);
const { path: filePath, output = _0x83afa(0xbe) } = program["opts"]();
!filePath && (console[_0x83afa(0xd3)](_0x83afa(0xca)), program["help"]());
(async () => {
  const _0x4fb003 = _0x83afa;
  try {
    const _0xa6ac45 = JSON[_0x4fb003(0xc5)](
        fs[_0x4fb003(0xb5)](filePath, _0x4fb003(0xd2))
      ),
      _0x4637ff = await generateInterface(_0xa6ac45);
    saveInterfaces(_0x4637ff, output);
  } catch (_0xd6c0f2) {
    console[_0x4fb003(0xd3)](_0xd6c0f2);
  }
})();
async function generateInterface(_0x3ce948) {
  const _0x2b879a = _0x83afa;
  try {
    const _0x316290 = [];
    for (const [_0x318aeb, _0x516c48] of Object[_0x2b879a(0xc3)](_0x3ce948)) {
      const _0x370264 =
        _0x2b879a(0xd5) +
        _0x318aeb +
        "\x20" +
        (await generateInterfaceType(_0x516c48)) +
        ";";
      _0x316290[_0x2b879a(0xbb)](_0x370264);
    }
    _0x316290[_0x2b879a(0xbb)](
      _0x2b879a(0xd5) +
        path["basename"](filePath, path[_0x2b879a(0xbf)](filePath)) +
        _0x2b879a(0xb4) +
        Object[_0x2b879a(0xc3)](_0x3ce948)
          [_0x2b879a(0xcc)](
            ([_0x4f18b6, _0x38e433]) =>
              quoteIfNeeded(_0x4f18b6) + ":\x20" + quoteIfNeeded(_0x4f18b6)
          )
          [_0x2b879a(0xcd)]("\x0a") +
        "\x0a}"
    );
    const _0x56d64a = _0x316290[_0x2b879a(0xcd)]("\x0a\x0a");
    return prettier["format"](_0x56d64a, { parser: "typescript" });
  } catch (_0x45014b) {
    throw new Error(_0x2b879a(0xc9));
  }
}
async function generateInterfaceType(_0x1039ad, _0x19ea46 = 0x2) {
  const _0x3e83c4 = _0x83afa;
  if (typeof _0x1039ad === _0x3e83c4(0xcb)) {
    const _0x4a734c = await Promise[_0x3e83c4(0xba)](
      Object[_0x3e83c4(0xc3)](_0x1039ad)[_0x3e83c4(0xcc)](
        async ([_0x45d45f, _0x162b42]) => {
          const _0x205784 = await generateInterfaceType(
            _0x162b42,
            _0x19ea46 + 0x2
          );
          return quoteIfNeeded(_0x45d45f) + ":\x20" + _0x205784;
        }
      )
    );
    return "{\x0a" + _0x4a734c[_0x3e83c4(0xcd)](",\x0a") + "\x0a}";
  } else return typeof _0x1039ad;
}
function _0x2a73() {
  const _0x3117f0 = [
    "-p,\x20--path\x20<filePath>",
    "1005528NRmIWO",
    "resolve",
    "prettier",
    "\x20{\x0a",
    "readFileSync",
    "2676770FtyvGO",
    "11jkNbyL",
    "1830rbIHzz",
    "Interfaces\x20saved\x20to:\x20",
    "all",
    "push",
    "2158185ElGlGW",
    "commander",
    "outputInterfaces.ts",
    "extname",
    "-o,\x20--output\x20[outputFile]",
    "3691016VGdAqW",
    "6LSeEXc",
    "entries",
    "test",
    "parse",
    "8VOYRCh",
    "Error\x20saving\x20interfaces\x20to\x20file:\x20",
    "3511080NYeePm",
    "Failed\x20to\x20generate\x20interfaces",
    "Error:\x20Path\x20to\x20the\x20JSON\x20file\x20is\x20required.\x20Use\x20-p\x20or\x20--path\x20option.",
    "object",
    "map",
    "join",
    "477xsJIbF",
    "569394LagkZB",
    "9haDHJe",
    "path",
    "utf-8",
    "error",
    "option",
    "interface\x20",
  ];
  _0x2a73 = function () {
    return _0x3117f0;
  };
  return _0x2a73();
}
