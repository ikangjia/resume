# Resume

我的在线简历 v2.0~

## 如何更新简历

1. 修改 Notion 里的 Resume 源码，分别导出为 HTML、PDF、Markdown 三种格式，分别改名为：
   - index.html
   - resume.md
   - resume.pdf
2. 使用新的 resume.md 与 resume.pdf 替换 `file` 目录下的同名旧文件
3. 使用新的 index.html 替换 `resume` 目录下的同名 index.html
4. 将以下代码复制到 index.html 的 `head` 标签
   ```html
   <link rel="stylesheet" href="assets/index.css">
   ```
5. 将以下代码复制到 `</body>` 标签前面
   ```html
   <a class="pin pdf_downloader" href="./files/resume.pdf" download="康佳-后端-18232110170.pdf">PDF</a>
   <a class="pin md_downloader" href="./files/resume.md" download="康佳-后端-18232110170.md">MD</a>
   <link rel="stylesheet" href="assets/index.css">
   <script src="assets/index.js"></script>
   ```
6. 最后在 `resume` 目录下打开 Git Bash ，依次执行以下命令提交更改到 GitHub 即可。

   ```bash
   git add .
   
   git commit -m "更新简历"
   
   git push -u origin main
   ```


## 你如何搞到同样份在线简历

1. 将项目 fock 到你的仓库，弄到你的本地
2. 将 [我的简历模板](https://ikangjia.notion.site/Resume-ddb0757361414744a1309731bf84b954) 复制到你那里一份，改成你自己的简历
3. 参考上文 **如何更新简历**