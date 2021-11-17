// logs.js


const htmlMsg =
`<div class="div_class">
  <p class="p">
    <a href="github.com">源码</a>
  </p>
</div>
`

Page({
  data: {
    aboutMsg: htmlMsg
  },
  onLoad() {
    this.setData({
      aboutMsg: htmlMsg
    })
  }
})
