---
title: Blog
date: 2021-01-26T11:46:25.652Z
css: "list"
---

YellowMugでは [note.com](https://note.com/yellow_mug) を活用して情報発信しています。<br>
以下は [note.com](https://note.com/yellow_mug) の最新記事です。

<ul id=rss><big><b>読み込み中...</b></big></ul>
<script>
fetch("//api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnote.com%2Fyellow_mug%2Frss")
.then(function(response) {
  return response.json();
})
.then(function(json) {
  let data = json.items,
      html = "";
  for (value of data) {
   html = html+"<li><a href="+value.link+" target=_blank><h2>"+value.title+"</h2><time>"+value.pubDate+"</time></a></li>";
   rss.innerHTML = html;
  }
});
</script>