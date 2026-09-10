---
name: design-review
description: Review the Nakaura laboratory website in a real browser using screenshots, student-recruitment goals, publication accuracy, responsive layout, and keyboard interaction. Use for a visual design review or verification after requested UI changes.
metadata:
  implementation: Project-specific original skill inspired by the Qiita design-review workflow
  article: https://qiita.com/kamome_susume/items/41300417840aa107472e
---

# Research laboratory website design review

## 目的と範囲

「研究に興味がある学生が、研究内容・実績・相談先を理解できるか」を軸に、実画面で確認する。

最初に`../../SITE_BRIEF.md`、プロジェクトルートの`CONTENT_NOTES.md`、依頼対象のHTML・CSS・JavaScriptを読む。レビューの依頼は指摘と提案、改善の依頼は範囲内の修正と再確認まで行う。

## 観点に応じて使うスキル

- デザイン方向性そのものの検討：`frontend-design`。
- 余白・文字組み・情報の優先順位：`baseline-ui`。
- 操作・意味構造・色のコントラスト：`fixing-accessibility`。
- アニメーションを含む箇所：`fixing-motion-performance`。
- Web全体の設計監査を依頼された場合：`web-design-guidelines`。

毎回すべて読み込まず、実際の依頼に必要なものを選ぶ。作業は現在のエージェントで実施する。

## ブラウザ確認

1. 利用できるブラウザツールを確認する。Playwright MCPがあれば使えるが、Playwrightのローカル実行でもよい。MCPを必須条件にしない。
2. 現在の環境では一時的な検証用のPlaywright等が`/tmp/opencode`にある可能性がある。存在と動作を確認し、再利用できるものを使う。別セッションでも存在するとは仮定しない。
3. サーバーが必要ならプロジェクトルートで `python3 -m http.server 8000 --bind 127.0.0.1` を使う。ポート競合時は空きポートを選ぶ。自分が開始した検証用プロセスは終了時に停止する。
4. 少なくともデスクトップ（1440px前後）・スマートフォン（390px前後）で撮影し、画像を実際に読む。320pxの狭い画面、タブレット幅、拡大時の長文にも注意する。
5. 撮影前にフォント・画像を待ち、スクロールとアニメーションの状態を安定させる。上部からの全体像と、問題箇所の拡大を確認する。
6. メニューの開閉、Escape、キーボードフォーカス、論文欄の開閉、ページ内リンクを実際に操作する。
7. メール・電話リンクは宛先を検証する。実際のメール送信や電話発信はしない。
8. 横スクロール、固定ヘッダーによる隠れ、リンク先不在、コンソールエラーを確認する。
9. 動きを変更した場合は`prefers-reduced-motion`でも確認する。自動検査の成功だけで完全なアクセシビリティ対応とは結論しない。

ブラウザが使えない場合は、コードで確認した内容と未確認の表示・操作を明記する。撮影・実機確認を実施したと装わない。

## 研究室HP固有の確認

- ファーストビューで所属、研究領域、学生向けの入り口が分かるか。
- 研究業績を見つけやすく、日本語説明から研究の意義が理解できるか。
- 昔の画像融合・検査最適化から、機械学習・生成AIまでのつながりが伝わるか。
- 筆頭・第2著者の表記は元資料の著者順と一致しているか。
- 論文名、掲載誌、年、巻号、ページに変更があれば`Paper_Data/citations.txt`と照合したか。
- Google Scholarへの導線が明確か。ユーザーが不要とした全論文検索ページを増やしていないか。
- 装飾のために数字、成果、写真、研究設備、学生人数や受け入れ条件を作っていないか。
- メール、電話、住所が最新のユーザー提供情報と一致するか。

## 報告

日本語で、重要な発見を先に簡潔に伝える。

- **確認できた問題**：重要度、`ファイル:行`、再現条件、修正案。
- **デザイン上の提案**：好みを不具合と混同せず、学生にとっての効果を説明。
- **検証結果**：実際に使用した画面幅・操作・検査結果・スクリーンショットの場所。

依頼された修正と必要な確認が完了したら、終了する。小さな改善を無制限の再設計に広げない。
