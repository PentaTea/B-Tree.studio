<template>
  <div class="theme-container">
    <div class="theme-default-content">
      <h1>404</h1>

      <blockquote>
        <h3 style="font-weight:400" id="hitokoto"></h3>
      </blockquote>

      <RouterLink to="/">
        <h4 style="font-weight:400">回到主页</h4>
      </RouterLink>
      <hr />
      <h4>
        ——
        <span id="from_who"></span>
        《
        <span id="from"></span> 》｜ 一言 ｜ by hitokoto.cn
      </h4>
    </div>
    <div class="theme-default-content">
      <Vssue title="404" />
    </div>
  </div>
</template>

<script>
fetch("https://v1.hitokoto.cn")
  .then(response => response.json())
  .then(data => {
    const hitokoto = document.getElementById("hitokoto");
    const from = document.getElementById("from");
    const from_who = document.getElementById("from_who");
    hitokoto.innerText = data.hitokoto;
    from.innerText = data.from;
    from_who.innerText = data.from_who;
    console.log(data);
  })
  .catch(err => console.error(err));
</script>
