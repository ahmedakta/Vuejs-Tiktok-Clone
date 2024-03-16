<template>
    <div
        id="SideNavMain"
        :class="route.fullPath === '/' ? 'lg:w-[310px]' : 'lg:w-[220px]'"
        class="fixed z-20 bg-white pt-[70px] h-full lg:border-r-0 border-r w-[75px] overflow-auto"
    >
        <div class="lg:w-full w-[55px] mx-auto">
                <NuxtLink to="/foryou">
                    <MenuItem iconString="For You" colorString="#F02C56" sizeString="30" />
                </NuxtLink>

                <NuxtLink to="/following">
                    <MenuItem iconString="Following" colorString="#000000" sizeString="27" />
                </NuxtLink>

                <NuxtLink to="/friends">
                    <MenuItem iconString="Friends" colorString="#000000" sizeString="27" />
                </NuxtLink>

                <NuxtLink to="/discover">
                    <MenuItem iconString="Discover" colorString="#000000" sizeString="27" />
                </NuxtLink>

                <NuxtLink to="/live">
                    <MenuItem iconString="LIVE" colorString="#000000" sizeString="27" />
                </NuxtLink>

                <NuxtLink to="/profile">
                    <MenuItem iconString="Profile" colorString="#000000" sizeString="27" />
                </NuxtLink>


                <div class="lg:block hidden border-b lg:ml-2 mt-2" />


                <div class="hidden lg:block cursor-pointer items-center mt-1"> 
                    <div class="py-1">Log in to follow creators, like videos, and view comments.</div>
                    <Button
                    class="items-center  ml-5 font-bold text-[18px] text-[#F02C56] h-12 w-[250px] hover:bg-[#F02C56] hover:bg-opacity-30 rounded-[5px] border border-[#F02C56]"
                    >
                        Log In
                    </Button>
                </div>
                <div class="border-b lg:ml-2 mt-2" />

                <div class="lg:block hidden text-xs text-gray-600 font-semibold pt-4 bn-2 px-2">
                    Suggested accounts
                </div>

                <div class="lg:hidden block pt-3" />

                <div class="cursor-pointer"> 
                    <MenuItemFollow />
                </div>
                 
                <button class="lg:block hidden text-[#F02C56] pt-1.5 pl-2 text[13px]">
                    See all
                </button>

                <div class="border-b lg:ml-2 mt-2" />

                <div class="lg:block hidden text-xs text-gray-600 font-semibold pt-4 bn-2 px-2">
                    Following accounts
                </div>

                <div class="lg:hidden block pt-3" />

                <div class="cursor-pointer"> 
                    <MenuItemFollow />
                </div>
                 
                <button class="lg:block hidden text-[#F02C56] pt-1.5 pl-2 text[13px]">
                    See more
                </button>


                <div class="lg:block hidden border-b lg:ml-2 mt-2" />
                <div
                class="lg:block hidden text-[11px] text-gray-500"
                >
                    <div class="pt-4 px-2">Lorem ipsum dolor sit.</div>
                    <div class="pt-4 px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, corrupti.</div>
                    <div class="pt-4 px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsam necessitatibus optio dicta.</div>
                    <div class="pt-4 px-2">Lorem ipsum dolor sit.</div>
                </div>

                <div class="pb-14"></div>
        </div>
    </div>
</template>

<script setup>
    const route = useRoute()
</script>