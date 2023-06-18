<template>
    <div class="h-80 overflow-hidden mb-10 rounded-lg">
      <img src="@/assets/restaurant.jpg" @load="imgOnload"/>
    </div>
</template>

<script setup lang="ts">

// Adjust thi img
function imgOnload(e:any) {
    const target = e.currentTarget
    const wid = target.parentNode.offsetWidth
    const hei = target.parentNode.offsetHeight
    const realWidth = target.width
    const realHeight = target.height
    const realwh = target.width/target.height
    if(realwh > wid/hei) {
        const w = ((hei/realHeight)*realWidth + 'px')
        const h = hei + 'px'
        const l = '-' + ((hei/realHeight)*realWidth-wid) /2 +'px'
        target.style.width = w
        target.style.height = h
        target.style.left = l
        target.style.position = 'relative'
    }
    else {
        const w = wid + 'px'
        const h = ((wid/realWidth)*realHeight) + 'px'
        const l = '-' + ((wid/realWidth)*realHeight-hei) /2 +'px'
        target.style.width = w
        target.style.height = h
        target.style.top = l
        target.style.position = 'relative'
    }
}

</script>