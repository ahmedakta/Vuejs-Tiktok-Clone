<template>
    <div
    id="PostPage"
    class="fixed lg:flex justify-between z-50 top-0 left-0 w-full h-full bg-black lg:overflow-hidden overflow-auto"
    >
        <div class="lg:w[calc(100% - 540px)] h-full relative">
            <NuxtLink class="absolute z-20 m-5 rounded-full bg-gray-700 p-1.5 hover:bg-gray-800">
                <Icon name="material-symbols:close" color="#FFFFFF" size="27"></Icon>
            </NuxtLink>

            <button 
                :disabled="!isLoaded"
                @click="$event => loopThroughPostUp()"
                class="absolute z-20 right-4 top-4 flex items-center justify-center rounded-full bg-gray-700 p-1.5 hover:bg-gray-800">
                <Icon name="mdi:chevron-up" size="30" color="#FFFFFF"/>
            </button>
            
            <button 
                :disabled="!isLoaded"
                @click="$event => loopThroughPostDown()"
                class="absolute z-20 right-4 top-20 flex items-center justify-center rounded-full bg-gray-700 p-1.5 hover:bg-gray-800">
                <Icon name="mdi:chevron-down" size="30" color="#FFFFFF"/>
            </button>
        </div>
    </div>
</template> 

<script setup>

</script>
