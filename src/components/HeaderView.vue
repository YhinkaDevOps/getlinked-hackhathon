<template>
    <header class="header flex justify-between bg-[#150E28] top-0 left-0 right-0 fixed px-[128px] pt-[67px] pb-[30px]">
       <RouterLink to="/">
        <h2 class="nav-header font-bold text-[36px] text-[#D434FE] inline-block ">
          <span class="text-white">get</span>linked
        </h2>
       </RouterLink>

      <nav class="nav-items flex gap-x-[121px]">
        <ul class="text-white flex gap-x-[56px] items-center">
         <RouterLink to="/">Timeline</RouterLink>
         <RouterLink to="/">Overview</RouterLink>
         <RouterLink to="/">FAQs</RouterLink>
         <RouterLink to="/">Contact</RouterLink>
        </ul>
         
        <button
          class="nav-btn text-white rounded-[4px] py-3 w-[172px]"
        >
          Register
        </button>      
      </nav>
    </header>
</template>

<style lang="scss">
.header{
  border-bottom-width: 1px;
  border-bottom-color:rgba(255, 255, 255, 0.18);
}

.nav-btn{
  background: linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%);
}
</style>