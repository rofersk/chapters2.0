<template>
  <div
    class="
      w-screen
      flex flex-row
      items-center
      p-1
      justify-between
      bg-gray-900
      shadow-xs
    "
  >
    <div class="ml-8 text-lg text-white hidden md:flex"></div>
    <span
      class="
        w-screen
        md:w-1/3
        h-10
        bg-gray-200
        cursor-pointer
        border border-gray-300
        text-sm
        rounded-full
        flex
      "
    >
      <input
        type="search"
        name="serch"
        placeholder="Search"
        class="
          flex-grow
          px-4
          rounded-l-full rounded-r-full
          text-sm
          focus:outline-none
        "
      />
      <i class="fas fa-search m-3 mr-5 text-lg text-gray-700 w-4 h-4"> </i>
    </span>
    <div class="flex flex-row-reverse mr-4 ml-4 md:hidden">
      <i class="fas fa-bars"></i>
    </div>
    <div class="flex flex-row-reverse mr-8 'hidden' md:flex">
      <div class="text-black text-center bg-yellow-500 px-4 py-2 m-2">
        Button
      </div>
      <div class="text-gray-800 text-center bg-yellow-500 px-4 py-2 m-2">
        Link
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
};
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Karla:400,700&display=swap');

.font-family-karla {
  font-family: karla;
}
</style>
