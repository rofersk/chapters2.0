<template>
  <div
    id="content"
    class="
      bg-center bg-cover bg-no-repeat
      h-screen
      items-center
      justify-center
      flex flex-col
    "
    style="
      background-image: url('https://static01.nyt.com/images/2019/12/17/books/review/17fatbooks/17fatbooks-superJumbo.jpg');
    "
  >
    <div
      id="moka-w1wgf"
      class="items-center justify-center w-full p-8 flex flex-col"
    >
      <div
        id="moka-ix3cs"
        class="
          bg-gray-400
          items-center
          justify-center
          md:w-1/2
          w-full
          shadow-md
          p-5
          h-auto
          rounded-lg
          blur-3
          bg-opacity-50
          flex flex-col
          col-span-12
        "
      >
        <h4
          class="w-48 border-t-4 border-solid border-yellow-500 h-20"
          id="moka-uuij0"
        ></h4>
        <h4
          class="text-orange-300 text-2xl"
          id="moka-8q3tt"
          style="font-family: Abel"
        >
          Online Library
        </h4>
        <h1
          class="text-white text-5xl text-center mt-2 mb-20"
          id="moka-cqg7a"
          style="font-family: 'Archivo Black'"
        >
          Chapters
        </h1>
        <button
          value="button"
          class="
            hover:text-gray-300
            bg-yellow-500
            text-white
            hover:bg-black
            w-56
            p-4
            text-2xl
            font-bold
          "
          
          id="moka-8pwrq"
          style="font-family: Barlow"
        >
        Student
        </button>
        <router-link to="/admin">
        <button
          value="button"
          class="
            hover:text-gray-300
            bg-yellow-500
            text-white
            hover:bg-black
            w-56
            p-4
            text-2xl
            font-bold
          "
          id="moka-8pwrq"
          style="font-family: Barlow"
        >
          
          Admin
          
        </button>
        </router-link>
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
