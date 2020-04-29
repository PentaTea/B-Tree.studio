<template>
  <div>
    <el-row :gutter="50">
      <el-col :span="12">
        <el-input
          autofocus
          :rows="17"
          clearable
          type="textarea"
          placeholder="请输入明文"
          show-word-limit
          v-model="Plaintext"
        ></el-input>
      </el-col>

      <el-col :span="12">
        <el-input
          :rows="17"
          clearable
          type="textarea"
          show-word-limit
          placeholder="请输入密文"
          v-model="Ciphertext"
        ></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
const ClipboardJS = require("clipboard");
var ZhouYi;
var Plaintext;
var Ciphertext;
axios.get("/assets/txt/ZhouYi.txt").then(response => {
  ZhouYi = response.data;
});
export default {
  name: "ZhouYiEncode",
  data() {
    return {
      plaintext: "",
      ciphertext: ""
    };
  },
  computed: {
    Plaintext: {
      set: function(value) {
        this.plaintext = value;
        this.ciphertext = value && ZhouYi ? base64encode(utf16to8(value)) : "";
      },
      get: function() {
        return this.plaintext;
      }
    },
    Ciphertext: {
      set: function(value) {
        this.plaintext = value && ZhouYi ? utf8to16(base64decode(value)) : "";
        this.ciphertext = value;
      },
      get: function() {
        return this.ciphertext;
      }
    }
  },
  mounted() {},
  module: {}
};

/* utf.js - UTF-8 <=> UTF-16 convertion
 *
 * Copyright (C) 1999 Masanao Izumo <iz@onicos.co.jp>
 * Version: 1.0
 * LastModified: Dec 25 1999
 * This library is free. You can redistribute it and/or modify it.
 */

/*
 * Interfaces:
 * utf8 = utf16to8(utf16);
 * utf16 = utf8to16(utf8);
 */

function utf16to8(str) {
  var out, i, len, c;

  out = "";
  len = str.length;
  for (i = 0; i < len; i++) {
    c = str.charCodeAt(i);
    if (c >= 0x0001 && c <= 0x007f) {
      out += str.charAt(i);
    } else if (c > 0x07ff) {
      out += String.fromCharCode(0xe0 | ((c >> 12) & 0x0f));
      out += String.fromCharCode(0x80 | ((c >> 6) & 0x3f));
      out += String.fromCharCode(0x80 | ((c >> 0) & 0x3f));
    } else {
      out += String.fromCharCode(0xc0 | ((c >> 6) & 0x1f));
      out += String.fromCharCode(0x80 | ((c >> 0) & 0x3f));
    }
  }
  return out;
}

function utf8to16(str) {
  var out, i, len, c;
  var char2, char3;

  out = "";
  len = str.length;
  i = 0;
  while (i < len) {
    c = str.charCodeAt(i++);
    switch (c >> 4) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        // 0xxxxxxx
        out += str.charAt(i - 1);
        break;
      case 12:
      case 13:
        // 110x xxxx 10xx xxxx
        char2 = str.charCodeAt(i++);
        out += String.fromCharCode(((c & 0x1f) << 6) | (char2 & 0x3f));
        break;
      case 14:
        // 1110 xxxx 10xx xxxx 10xx xxxx
        char2 = str.charCodeAt(i++);
        char3 = str.charCodeAt(i++);
        out += String.fromCharCode(
          ((c & 0x0f) << 12) | ((char2 & 0x3f) << 6) | ((char3 & 0x3f) << 0)
        );
        break;
    }
  }

  return out;
}

/*
 * Base on 1999 Masanao Izumo <iz@onicos.co.jp>
 */

/*
 * Interfaces:
 * b64 = base64encode(data);
 * data = base64decode(b64);
 */

var base64EncodeChars = [
  "乾为天",
  "坤为地",
  "水雷屯",
  "山水蒙",
  "水天需",
  "天水讼",
  "地水师",
  "水地比",
  "风天小畜",
  "天泽履",
  "天地泰",
  "天地否",
  "天火同人",
  "火天大有",
  "地山谦",
  "雷地豫",
  "泽雷随",
  "山风蛊",
  "地泽临",
  "风地观",
  "火雷噬嗑",
  "山火贲",
  "山地剥",
  "地雷复",
  "天雷无妄",
  "山天大畜",
  "山雷颐",
  "泽风大过",
  "坎为水",
  "离为火",
  "泽山咸",
  "雷风恒",
  "天山遯",
  "雷天大壮",
  "火地晋",
  "地火明夷",
  "风火家人",
  "火泽睽",
  "水山蹇",
  "雷水解",
  "山泽损",
  "风雷益",
  "泽天夬",
  "天风姤",
  "泽地萃",
  "地风升",
  "泽水困",
  "水风井",
  "泽火革",
  "火风鼎",
  "震为雷",
  "艮为山",
  "风山渐",
  "雷泽归妹",
  "雷火丰",
  "火山旅",
  "巽为风",
  "兑为泽",
  "风水涣",
  "水泽节",
  "风泽中孚",
  "雷山小过",
  "水火既济",
  "火水未济"
];
function GuaCi(str) {
  if (str) {
    console.log(str);
    return (
      "卦" +
      str +
      "，" +
      new RegExp(
        str +
          ".*?\\n.*?\\n.*?\\n.*?[^象曰]：(.*?。.*?\\n).*?[^象曰]：(.*?。.*?\\n).*?[^象曰]：(.*?。.*?\\n).*?[^象曰]：(.*?。.*?\\n).*?[^象曰]：(.*?。.*?\\n).*?[^象曰]：(.*?。.*?\\n).*?",
        "gs"
      ).exec(ZhouYi)[Math.floor(Math.random() * 6 + 1)]
    );
  }
  return 0;
}

function base64encode(str) {
  var out, i, len;
  var c1, c2, c3;

  len = str.length;
  i = 0;
  out = "";
  while (i < len) {
    c1 = str.charCodeAt(i++) & 0xff;
    if (i == len) {
      out += GuaCi(base64EncodeChars[c1 >> 2]);
      out += GuaCi(base64EncodeChars[(c1 & 0x3) << 4]);
      out += "卦终。";
      break;
    }
    c2 = str.charCodeAt(i++);
    if (i == len) {
      out += GuaCi(base64EncodeChars[c1 >> 2]);
      out += GuaCi(base64EncodeChars[((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4)]);
      out += GuaCi(base64EncodeChars[(c2 & 0xf) << 2]);
      out += "卦终。";
      break;
    }
    c3 = str.charCodeAt(i++);
    out += GuaCi(base64EncodeChars[c1 >> 2]);
    out += GuaCi(base64EncodeChars[((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4)]);
    out += GuaCi(base64EncodeChars[((c2 & 0xf) << 2) | ((c3 & 0xc0) >> 6)]);
    out += GuaCi(base64EncodeChars[c3 & 0x3f]);
  }
  return out;
}

function base64decode(str) {
  str = str.match(/(?<=卦).*?(?=，)|卦终/gm);

  var c1, c2, c3, c4;
  var i, len, out;

  len = str.length;
  i = 0;
  out = "";
  while (i < len) {
    /* c1 */
    do {
      c1 = base64EncodeChars.indexOf(str[i++]);
    } while (i < len && c1 == -1);
    if (c1 == -1) break;

    /* c2 */
    do {
      c2 = base64EncodeChars.indexOf(str[i++]);
    } while (i < len && c2 == -1);
    if (c2 == -1) break;

    out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

    /* c3 */
    do {
      c3 = str[i++];
      if (c3 == "卦终。") return out;
      c3 = base64EncodeChars.indexOf(c3);
    } while (i < len && c3 == -1);
    if (c3 == -1) break;

    out += String.fromCharCode(((c2 & 0xf) << 4) | ((c3 & 0x3c) >> 2));

    /* c4 */
    do {
      c4 = str[i++];
      if (c4 == "卦终。") return out;
      c4 = base64EncodeChars.indexOf(c4);
    } while (i < len && c4 == -1);
    if (c4 == -1) break;
    out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
  }
  return out;
}
</script>

<style>
.el-textarea__inner {
  font-size: 1.5em;
}
</style>
