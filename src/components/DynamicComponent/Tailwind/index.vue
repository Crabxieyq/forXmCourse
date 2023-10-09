<template>
    <!--max-w-md给盒子设置最大宽度，这里的md指中号 对应的还有sm(小) lg(大) mx-auto让盒子居中 -->
    <!-- bg-white背景色设置为白色 对应的有背景色设置为黑色bg-black -->
    <!-- rounded-xl：border-radius: 0.75rem; /* 12px */ -->
    <!-- box-shadow 添加阴影 -->
    <!-- md:在md宽度的屏幕上才生效 -->
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
            <div class="md:flex-shrink-0">
                <img class="h-48 w-full object-cover md:w-48" src="../../../assets/imgs/R-C.jpg"
                    alt="Man looking at item at a store">
            </div>
            <!-- p-8: padding: 2rem;uppercase:内容转为大写 tracking-wide：设置字符间距 letter-sapce-->
            <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding
                    customers
                    for your new business</a>
                <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five
                    ideas
                    you can use to find your first customers.</p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">


</script>
<style scoped lang="scss"></style>