https://hshindo.github.io/www/

## 単一ページの新規セットアップ手順

1. 作成するページのパス（例えば、`example.com/labo/`など）を決定する。以下、パス名を`labo`に決定したもとのして仮定して記載。
1. 下記のフォルダ及びファイル（マークダウン）を作成する。

   `content/labo/index.md`

   ```md
   ---
   type: labo
   ---

   # ここ以降にマークダウンコンテンツを記述する
   ```

1. 下記のフォルダ及びファイル（レイアウト）を作成する。

   `layouts/labo/single.html`

   ```html
   {{ define "main" }}
    <div class="container">
      <div class="row">
        <div class="col s12">

          <!-- ここにHTMLを記述する -->

          <!--
            マークダウンファイル（`content/labo/index.md`）の
            コンテンツを差し込みたい場合は、任意の場所で下記のタグを挿入する。
          -->
          {{ .Content }}

        </div>
      </div>
    </div>
   {{ end }}
   ```

1. `https://example.com/labo/`にアクセスし、正しく表示されることを確認する

## 制限事項

- マークダウンファイルに数式を記載する際は、`<div />`タグで囲む必要がある。

  ```html
  <div>$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$</div>
  ```
