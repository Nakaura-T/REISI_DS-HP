---
name: baseline-ui
description: Polish an existing static HTML/CSS interface by improving spacing, visual hierarchy, typography, responsive layout, and interaction states. Use for focused UI cleanup rather than a full redesign.
license: MIT, see ../../licenses/ui-skills-LICENSE.txt
metadata:
  source: https://github.com/ibelick/ui-skills/blob/f5dd1de9c0fc6c033a43dc3fd2a5be41366e9f43/skills/baseline-ui/SKILL.md
  adaptation: Static HTML/CSS edition for the Nakaura laboratory website, 2026-09-10
---

# Baseline UI — static HTML edition

UI Skills / Julien Thibeautの`baseline-ui`を、既存の静的サイト向けに調整した派生版です。React・Tailwind・Motionライブラリを必須とする指示を、ネイティブHTMLと既存CSSでの実装へ変更しています。

## 使う場面

余白、文字組み、情報の優先順位、レスポンシブ表示など、既存画面を磨く依頼に使用する。`../../SITE_BRIEF.md`を先に読む。

レビューのみの依頼なら、ファイルと該当行、確認した問題、最小限の修正案を報告する。修正を求められた場合は、依頼の範囲内で反映・検証する。

## 実装の基準

- 現在のHTML・CSS・JavaScriptと既存のCSS変数を使う。スキルのためだけにReact、Tailwind、コンポーネントライブラリを追加しない。
- リンクは`a`、操作は`button`、開閉は適切なら`details`・`summary`を使う。ネイティブ動作を独自実装で置き換えない。
- アイコンのみの操作にはアクセシブルな名前を付ける。
- キーボードフォーカス、ホバー、開閉状態の見た目を確認する。
- 固定要素の重なり、タップ領域、ノッチのsafe area、拡大時の見切れを確認する。

## タイポグラフィとレイアウト

- 見出し、本文、補足情報の差が読者に分かるようにする。日本語本文を小さな英語ラベルと同じサイズにしない。
- 見出しの不自然な改行を避ける。`text-wrap: balance`などは日本語・英語の実際の表示を確認して採用する。
- 論文名、所属、メールアドレスなどの長い文字列を狭い画面で確認する。重要な情報を安易に省略表示しない。
- 比較する数値には必要に応じて`font-variant-numeric: tabular-nums`を使う。
- 余白・罫線・角丸・z-indexは少数の一貫した規則で扱う。
- 内容に意味のあるまとまりを作る。同じ形のカードや装飾ラベルを機械的に増やさない。
- 横にはみ出す原因を修正する。ページ全体の`overflow-x: hidden`だけで問題を隠さない。

## 色と動き

- ユーザーの指定と既存のデザイン意図を優先する。色やグラデーションの禁止を一律に当てはめない。
- 意味のないグロー、グラデーション、アクセント色を増やさない。
- 新しいアニメーションは、依頼や明確な操作上の理由があるときに使う。
- 動かす場合は`transform`・`opacity`を基本とし、レイアウト再計算や大きなblurの連続変化を避ける。
- 短い操作フィードバックを基本とし、`prefers-reduced-motion`を尊重する。
- 自動で繰り返す動きは画面外で停止し、必要に応じて停止操作を用意する。

## 確認

- PCとスマートフォンでスクリーンショットを実際に見比べる。
- スタイルの好みと、読みにくさ・操作不能などの具体的な問題を区別する。
- 小さな依頼を全面リニューアルに拡大しない。
