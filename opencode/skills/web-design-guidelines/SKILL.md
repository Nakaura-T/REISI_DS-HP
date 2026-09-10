---
name: web-design-guidelines
description: Review HTML/CSS/JavaScript against Vercel's published Web Interface Guidelines. Use when asked for a web design, usability, accessibility, or frontend best-practice audit.
metadata:
  implementation: Local OpenCode integration, not a copy of Vercel's SKILL.md
  reference: https://github.com/vercel-labs/agent-skills/tree/063bee94c3f4df8453406c830b0a7df0f2860278/skills/web-design-guidelines
---

# Web Design Guidelines — OpenCode integration

Vercelの公開Web Interface Guidelinesを参照して、対象サイトの具体的な問題をレビューするためのローカル実装。

1. `../../SITE_BRIEF.md`と対象ファイルを読む。対象が指定されていなければ、このプロジェクトの`index.html`・`styles.css`・`main.js`を対象にする。
2. レビュー時に次の公開ガイドラインをWeb取得ツールで読む。
   `https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md`
3. 実際の技術構成とユーザーの依頼に当てはまる項目を確認する。静的HTMLにReactのハイドレーション規則を当てはめたり、日本語を英語の大文字規則に変えたりしない。
4. ネイティブHTMLの動作で満たされる項目に、冗長なJavaScriptハンドラーやARIAを追加しない。
5. 関連箇所を実際に確認できた指摘を、`ファイル:行 — 問題 — 修正案`の形式で日本語で報告する。重大度の高いものを先にする。
6. レビューだけを依頼された場合は、サイトのソースコードを編集しない。修正依頼があれば対象範囲で対応する。

取得できなかった場合は「最新ガイドライン未取得」と明記し、ローカルの`fixing-accessibility`や実画面から確認できる範囲を報告する。取得していない最新版に準拠したとは主張しない。

このスキルはガイドラインを参照するための指示であり、ブラウザやMCPサーバーのインストールを行うものではない。
