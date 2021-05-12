# Resume

我的在线简历。

## 更新简历

1. 在本地操作将 `/resume/files` 目录下的文件更新

2. 更新后再将 `/resume/files/index.html` 中的 `<div id='write'  class='……` 复制出来，替换 `/resume/index.html` 中相关部分

3. 最后在 resume 目录下打开 Git Bash ，依次执行以下命令提交更改到 GitHub 即可。

   ```bash
   git add .
   
   git commit -m "简历-v202105121522"
   
   git push -u origin main
   ```

   

## 你如何搞到同样份在线简历

1. 将项目 fock 到你的仓库，弄到你的本地

2. 替换 `/resume/files` 目录下的文件成你的

3. 把  `/resume/files` 目录下的 `resume.html`，复制到 `/resume` 目录下，改名为 `index.html`

4. 打开这个 `index.html`，在源代码中添加几行代码，添加到 `</body>`之前就行。

   ```html
   <a class="pin pdf_downloader" href="./files/resume.pdf" download="xx.pdf">PDF</a>
   <a class="pin md_downloader" href="./files/resume.md" download="xx.md">MD</a>
   <link rel="stylesheet" href="./index.css">
   <script src="./index.js"></script>
   ```

5. 提交代码

   ```bash
   git add .
   
   git commit -m "简历-v202105121522"
   
   git push -u origin main
   ```

6. 打开 GitHub 这个项目下的 Settings -> Pages，修改成自己的即可。

7. 如果访问你的 https://xxx.github.io/resume/ 失败，可参考博文

    [我的在线简历弄好了，记 GitHub Pages 的一次填坑！]([我的在线简历弄好了，记 GitHub Pages 的一次填坑！ | 林深时觉寒 (kangjia1324.github.io)](https://kangjia1324.github.io/06-git/Github Pages 使用中的一次填坑/))