# 中浦研究室 ホームページ原案

熊本大学 半導体・デジタル研究教育機構 総合情報学部門 データサイエンス分野・中浦 猛教授の研究室ホームページ案です。学生の方が「研究の内容・蓄積・自分の興味との接点」を理解できる構成にしています。

## 原案を見る

`index.html` をブラウザで開いてください。ビルドやインストールは不要です。日本語Webフォントはオンライン時に読み込み、オフラインでは端末のフォントで表示します。

ローカルサーバーを使う場合は、このフォルダで次を実行します。

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

ブラウザで <http://localhost:8000/> にアクセスします。

## 構成とデザイン

- 白・深いネイビー・青緑を基調に、医療と情報学の接点を表現。
- トップ：「医療の問いを、データの力で。」
- 研究内容：撮影・画像再構成／画像解析・機械学習／生成AI・言語モデル。
- 研究業績：4つの分野に分けて研究の歩みと代表論文を紹介。開閉式の欄で10件の書誌情報と著者順を確認できます。
- 研究指標：OpenAlexの収録データを毎週集計し、総被引用数、h-index、収録論文数を表示。
- 学生の方へ：興味の入り口となる3つの問いと、配属・進学・見学の相談先。
- 教員紹介、連絡先、アクセス。全業績への案内はGoogle Scholarリンクに集約。

スマートフォン対応。JavaScriptを無効にしても本文・リンク・論文欄を利用できます。イラストは独自の抽象図で、実際の医療画像・測定データではありません。

## GitHub Pagesで公開する

1. GitHubで新しいリポジトリを作成します（例：`nakaura-lab`）。通常の無料公開ではPublicを選択します。
2. 次の4ファイルをリポジトリの一番上の階層へアップロードします。
   - `index.html`
   - `styles.css`
   - `main.js`
   - `favicon.svg`

   Jekyllによる処理を無効にする場合は、同期用ファイル `nojekyll` もアップロードし、**GitHub上で名前を `.nojekyll` に変更**します。先頭のドットを除いた名前のままでは、この指定は有効になりません。

3. リポジトリの **Settings → Pages → Build and deployment** を開きます。
4. **Source: Deploy from a branch**、**Branch: main**、**フォルダ: / (root)** を選択して **Save**。
5. デプロイが完了すると、その画面に公開URLが表示されます。

リポジトリ名が `nakaura-lab` の場合のURL例：

```text
https://ユーザー名.github.io/nakaura-lab/
```

CSS・JavaScript・画像はすべて相対パスなので、プロジェクト名付きのGitHub Pagesでもそのまま動きます。`Paper_Data/` は編集のための参照資料で、サイトの動作には必要ありません。

GitHub Actionsの実行を許可すると、`.github/workflows/update-research-metrics.yml` が毎週月曜0:20 UTCにOpenAlexを取得し、`data/research-metrics.json` を更新します。初回はGitHubの **Actions** から `Update research metrics` を手動実行してください。自動コミットを許可するため、リポジトリの **Settings → Actions → General → Workflow permissions** で **Read and write permissions** を選択します。OpenAlexの集計値はGoogle Scholarとは一致しない場合があります。

## 内容を更新する

| 更新内容 | 編集箇所 |
| --- | --- |
| 研究紹介・学生向け文章 | `index.html` の `research`、`students` セクション |
| 代表業績・論文 | `index.html` の `achievements` セクション |
| 所属・プロフィール | `index.html` の `member`、`contact` セクション |
| 電話・メール | `index.html` の連絡先と `tel:`・`mailto:` リンク |
| 色・余白・レイアウト | `styles.css`。主な色は冒頭の `:root` |
| メニュー操作 | `main.js` |

論文の編集時には、`data-bibkey` と `CONTENT_NOTES.md` を手がかりに元データを確認できます。書誌情報は静的HTMLで保持しており、Google Scholarやresearchmapへの接続状況に左右されず表示されます。

## 原案の確認ポイント

- 「中浦研究室」「Nakaura Laboratory」は仮の教室名称です。
- 電話番号 **096-342-2266** は、2026-09-10の修正依頼時にユーザー確認済みです。
- 学生向けの文章・研究テーマ紹介・キャッチコピーは提案文です。配属・進学・見学の受け入れ方針に合わせて調整してください。
- 写真を使う場合は、教員写真や研究室・D-Squareの写真を追加できます。
- 公開版では、ページ上部の「サイト原案」表記を削除できます。

代表論文の選定根拠と資料の確認内容は [CONTENT_NOTES.md](./CONTENT_NOTES.md) にまとめています。

## OpenCodeでのデザイン支援

`opencode/skills/` に、デザイン設計・UIの仕上げ・アクセシビリティ・動きの性能・画面レビューのための6スキルを導入しています。同期できるよう先頭のドットを外し、ルートの `opencode.json` に読み込み先とコマンドを登録しています。

**`opencode/` フォルダと `opencode.json` を一緒に同期し、OpenCodeを再起動してください。** `/lab-design` で改善、`/lab-review` でレビューを依頼できます。

導入元、静的HTML向けの調整内容、使い方は [opencode/README.md](./opencode/README.md) をご覧ください。
