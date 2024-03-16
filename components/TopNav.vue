
import type { NuxtLink } from '#build/components';

import type { Icon } from '#build/components';

import type { NuxtLink } from '#build/components';

import type { Icon } from '#build/components';

import type { NuxtLink } from '#build/components';
<template>
  <div id="TopNav"
         class="fixed bg-white z-30 flex items-center w-full border-b h-[61px]"
    > 
        <div 
            :class="route.fullPath === '/' ? 'max-w-full' : ''"
            class="flex items-center justify-between w-full px-6 mx-auto">
            <div :class="route.fullPath === '/' ? 'w-[80%]' : 'lg:w-[20%] w-[70%]'">
                    <NuxtLink to="/">
                        <img width="115" src="~/assets/images/tiktok-logo.png">
                    </NuxtLink>
            </div>

            <div
                class="hidden md:flex items-center bg-[#F1F1F2] p-1 px-4 rounded-full max-w-[350px] mx-auto  w-full"
            >
                <input type="text"
                class="w-full my-2 bg-transparent placeholder-[#838383] text-[15px] focus:outline-none"
                placeholder="Search accounts"
                >
                <div
                class="px-3 py-1 flex items-center border-l border-l-gray-300"
                >
                    <Icon name="ri:search-line" color="#A1A2A7" size="22"/>
                </div>
            </div>
            
            <div
            class="flex items-center justify-end gap-3 min-w-[275px] max-w-[320px] w-full">
            <button
                class="flex items-center border ml-2 rounded-sm px-3 py-[6px] hover:bg-gray-100"
            >
                <Icon name="mdi:plus" color="#00000" size="22" />
                    <NuxtLink to="/upload">
                        <span class="px-2 font-medium text-[15px]">Upload</span>
                    </NuxtLink>
            </button>
            <button
                class="hidden lg:block text-white w-full bg-[#F02C56] rounded-sm font-medium text-[15px] flex items-center border rounded-l px-2 py-[6px]"
            >
                    <NuxtLink to="/upload">
                        <span class="px-2 font-medium text-[15px]">Log In</span>
                    </NuxtLink>
            </button>

            <div v-if="false" class="flex items-center">
                <button class="flex items-center bg-[#F02C56] text-white border rounded-md px-3 py-[6px]">
                    <span class="mx-4 font-medium text-[15px]">Log in</span>
                </button>
                <Icon name="mdi:dots-vertical" color="#161725" size="25"/>
            </div>

            <div class="flex items-center">
                <Icon class="ml-1 mr-4" name="carbon:send-alt" color="#161724" size="30"/>
                <Icon class="mr-5" name="bx:message-detail" color="#161724" size="27"/>

                <div class="relative">
                            <button class="mt-1" @click="$event => showMenu = !showMenu">
                                <img width="33" class="rounded-full" src="https://picsum.photos/id/83/300/320"/>
                            </button>

                            <div v-if="showMenu" class="absolute bg-white rounded-lg ph-1.5 w-[200px] shadow-xl border top-[43px] -right-2" id="PopupMenu">
                                <NuxtLink @click="$event => showMenu = false" class="flex items-center justify-start py-3 px-2 hover:bg-gray-100 cursor-pointer">
                                    <Icon name="ph:user" size="20" />
                                    <span class="pl-2 font-semibold text-sm">Profile</span>
                                </NuxtLink>
                                <div class="flex items-center justify-start py-2 px-1.5 hover:bg-gray-100 border-t cursor-pointer">
                                    <Icon name="ic:outline-login" size="20" />
                                    <span class="pl-2 font-semibold text-sm">Log out</span>
                                </div>
                            </div>
                </div>

            </div>

            </div>
        </div>
    </div>
</template>

<script setup>
    const route = useRoute()
    let showMenu = ref(false)
</script>