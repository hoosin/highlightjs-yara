/**
 * Language: Yara
 * Description: YARA is a tool aimed at (but not limited to) helping malware researchers to identify and classify malware samples. With YARA you can create descriptions of malware families (or whatever you want to describe) based on textual or binary patterns. Each description, a.k.a. rule, consists of a set of strings and a boolean expression which determine its logic.
 * Website: https://github.com/Yara-Rules/rules
 * Category: common, malware, security, IoC
 * Contributors:
 *   Deniz Demirci <deniz@binalyze.com>
 * Refs:
 *  https://github.com/infosec-intern/vscode-yara/blob/main/yara/syntaxes/yara.tmLanguage.json
 *  https://github.com/blacktop/language-yara/blob/master/grammars/yara.cson
 */

module.exports = function (hljs)
{
  const ATTRIBUTE = {
    className: 'attr',
    begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
    relevance: 1.01
  };
  const VARIABLE = {
    className: 'variable',
    match: '(\\$|#|@)[a-zA-Z0-9_*]*',
    relevance: 1.01
  };
  const PUNCTUATION = {
    match: '/[()]/|/[{}]/|/\[\[/|/[[\]]/|/\\/|/,/',
    className: "punctuation",
    relevance: 0
  };

  const NUMBER_YARA = {
    match: /\b[0-9A-Fa-f]{2}\b/g,
    className: "number",
    relevance: 0
  }
  const OPERATOR = {
    className: 'operator',
    relevance: 0,
    begin: /=/
  };

  const KEYWORDS = {
    beginKeywords: [
      "true","false","private","global","rule","strings","meta","condition","and","or","none","not","filesize","in","at","of","for","all","any","nocase","fullword","wide","ascii","base64","base64wide","xor","entrypoint","them","int8","int16","int32","int8be","int16be","int32be","uint8","uint16","uint32","uint8be","uint16be","uint32be","include","import","matches","contains","icontains","endswith","iendswith","startswith","istartswith","iequals",
    ].join(" ")
  };

  return {
    name: 'YARA',
    contains: [
      ATTRIBUTE,
      VARIABLE,
      PUNCTUATION,
      NUMBER_YARA,
      hljs.QUOTE_STRING_MODE,
      KEYWORDS,
      OPERATOR,
      hljs.C_NUMBER_MODE,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      
    ],
    illegal: '\\S'
  };
}
