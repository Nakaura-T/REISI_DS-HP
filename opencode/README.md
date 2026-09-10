# フロントエンド制作スキル

[Qiitaの記事](https://qiita.com/kamome_susume/items/41300417840aa107472e)を参考に、この研究室HPで使うスキルをOpenCode向けに導入しました。

## 有効化

**OpenCodeを終了して、このプロジェクトで再起動してください。** 起動済みセッションは設定・スキル一覧を再読み込みしません。

同期できるよう、先頭にドットのない `opencode/skills/` に配置しています。プロジェクトルートの `opencode.json` が読み込み先を指定し、プロジェクトスコープで利用します。

**`opencode/` フォルダと `opencode.json` を一緒に同期してください。** フォルダを既定名に戻したり、環境変数を設定したりする必要はありません。

```text
opencode.json                スキルとコマンドの登録
opencode/
  README.md                  この説明書
  SITE_BRIEF.md              研究室HPの目的と方針
  skills/                    6つのスキル
  commands/                  コマンドの指示文
  licenses/                  配布元のライセンス
```

スキルはモデルを再学習する機能ではなく、関連する作業のときに読み込む再利用可能な指示セットです。

## 導入した6スキル

| スキル名 | 役割 | 導入形態 |
| --- | --- | --- |
| `frontend-design` | 内容に根ざした配色・文字組み・レイアウト設計 | Anthropic公式をベースに、OpenCodeと事実に基づく依頼整理の注記を追加 |
| `baseline-ui` | 余白・階層・レスポンシブ表示の仕上げ | UI Skillsを静的HTML/CSS向けに調整した派生版 |
| `fixing-accessibility` | キーボード、フォーカス、ラベル、コントラスト | UI Skillsのルールを保持し、呼び出し案内を調整 |
| `fixing-motion-performance` | 動きの滑らかさ、描画負荷、画面外の停止 | UI Skillsのルールを保持し、呼び出し案内を調整 |
| `web-design-guidelines` | Vercelの公開ガイドラインを参照したレビュー | 参照用のローカル実装。公式SKILL.mdの複製ではない |
| `design-review` | スクリーンショット・実操作・研究業績の見せ方を検証 | 記事のワークフローを参考にした研究室HP専用の独自スキル |

React専用の`composition-patterns`・`react-best-practices`は、現在の静的サイトには導入していません。記事の`ux-strategist`・`design-requirements-grill`は具体的な配布元が示されていないため、同名の公式スキルを導入したとは扱っていません。読者・目的・内容の整理は`SITE_BRIEF.md`とプロジェクト用コマンドに含めています。

## 使い方

再起動後、通常の文章で依頼できます。

> frontend-designを使って、研究業績がもっと伝わるトップページに改善してください。

> 研究室HPをdesign-reviewでレビューしてください。

このプロジェクトでは次のコマンドも登録しています。

```text
/lab-design 学生に研究の強みが伝わるように改善してください
/lab-review
/lab-review スマートフォンと論文欄を重点的に確認してください
```

- `/lab-design`：設計・改善・仕上げ・必要な表示確認。
- `/lab-review`：レビューと修正案の提示。追加の明示的な修正依頼がなければサイトを編集しません。

コマンドの登録名・説明はルートの `opencode.json`、指示文は `commands/lab-design.md` と `commands/lab-review.md` にあります。設定内の `{file:...}` で指示文を読み込むため、通常のフォルダからでもコマンドが利用できます。

記事のClaude Code用の`/frontend-design`などをすべて同名のOpenCodeコマンドとして登録しているわけではありません。上記2コマンド、または通常の文章からスキル名を指定してください。

## 方針の保持

`SITE_BRIEF.md`に以下を記録しています。

- 学生募集に向けて研究内容・実績・相談先を分かりやすく伝える。
- `Paper_Data/citations.txt`を優先し、筆頭・第2著者の代表業績を重視する。
- 最近のAI研究に偏らず、CT・SPECT、検査の最適化、画像解析からのつながりを示す。
- 全論文の検索・絞り込みページは作らず、Google Scholarへ案内する。
- 既存の静的HTML/CSS/JavaScript構成を活かす。

## 配布元と取得時点

確認・導入日：2026-09-10。

- Anthropic：`anthropics/skills`、コミット `41bbe19d1a1a7eaab5e7bb9050a417e5c6cffc8f`。`skills/frontend-design/`。Apache-2.0。ライセンスは `skills/frontend-design/LICENSE.txt` に同梱。
- UI Skills：`ibelick/ui-skills`、コミット `f5dd1de9c0fc6c033a43dc3fd2a5be41366e9f43`。`skills/baseline-ui/`、`skills/fixing-accessibility/`、`skills/fixing-motion-performance/`。MIT。ライセンスは `licenses/ui-skills-LICENSE.txt` に同梱。
- Vercelのスキル構成を参照：`vercel-labs/agent-skills`、コミット `063bee94c3f4df8453406c830b0a7df0f2860278`。
- レビュー時のガイドライン：<https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md>。

ローカルに導入したスキル本文は自動更新しません。Vercelのガイドラインのみレビュー時に取得します。

## 動作確認

プロジェクトルートで次を実行すると、OpenCodeが検出したスキルを確認できます。

```bash
opencode debug skill
```

`design-review`はブラウザの利用手順を定義したスキルです。Playwright MCP自体を導入するものではなく、利用できるMCPまたはローカルPlaywrightを使います。

このフォルダは制作支援用で、GitHub Pagesの表示には必要ありません。
