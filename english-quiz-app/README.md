# English Quiz Studio

React + TypeScript + Vite 製の英語4択問題学習アプリです。

## 起動

Node.js 20.19+ または 22.12+ をインストールしてから、プロジェクトのフォルダーで以下を実行します。

```bash
npm install
npm run dev
```

ターミナルに表示されるURL（通常 http://localhost:5173 ）を開いてください。

## ビルド

```bash
npm run build
```

`dist/` を Azure Static Web Apps などの静的サイトホスティングに公開できます。

## 使い方

- 「学習する」: サンプル6問を1問ずつ解答し、解説を確認。
- 「写真から登録」: 問題集の写真を選び、OCR結果を編集し、正解・解説を設定して登録。
- 「問題一覧」: 登録した問題を確認・削除し、JSONでバックアップ・復元。
- 「前回間違えた問題」: 最後の解答が不正解だった問題のみを出題。

## 注意

- OCRは Tesseract.js による英語認識です。初回は言語データをダウンロードするためネット接続が必要です。
- OCRは問題文の抽出補助です。写真のレイアウトにより問題区切りや選択肢の解析が崩れます。必ず登録前に修正してください。
- OCRは正解・文法解説を自動生成しません。利用者が確認して入力します。
- 問題と学習履歴はブラウザの localStorage に保存されます。ブラウザのデータ消去・別端末では消失するためバックアップを推奨します。
- 写真はOCR処理のためブラウザ内で扱い、アプリ独自のサーバーにはアップロードしません。初回OCRのエンジン・言語データ取得には外部通信があります。
- 書籍の問題を登録・公開する場合は著作権と利用条件に注意してください。

## GitHub Pages への公開

GitHub リポジトリの Settings → Pages で、Build and deployment の Source を「GitHub Actions」に設定してください。
`main` または `master` ブランチへ push すると、GitHub Actions がビルドして GitHub Pages に公開します。
公開URLと実行状況は、リポジトリの Actions タブおよび Settings → Pages で確認できます。
