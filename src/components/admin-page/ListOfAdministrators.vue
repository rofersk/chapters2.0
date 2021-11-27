<template>
  <v-app>
    <div class="w-full bg-white">
      <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div class="text-center pb-12">
          <h2 class="text-base font-bold text-black">
            We have all of the books you'll need for your education.
          </h2>
          <h1
            class="
              font-bold
              text-3xl
              md:text-4xl
              lg:text-5xl
              font-heading
              text-yellow-500
            "
          >
            Team Chapters
          </h1>
        </div>
        <div
          class="
            grid grid-cols-1
            sm:grid-cols-2
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          <div
            class="
              w-full
              bg-yellow-500
              rounded-lg
              sahdow-lg
              p-12
              flex flex-col
              justify-center
              items-center
            "
          >
            <div class="mb-8">
              <img
                class="object-center object-cover rounded-full h-36 w-36"
                src="@/assets/id-picture.jpg"
                alt="photo"
              />
            </div>
            <div class="text-center">
              <p class="text-xl text-white font-bold mb-2">Rhafel Pacao</p>
              <p class="text-base text-black font-normal">Team Leader</p>
            </div>
          </div>
          <div
            class="
              w-full
              bg-yellow-500
              rounded-lg
              sahdow-lg
              p-12
              flex flex-col
              justify-center
              items-center
            "
          >
            <div class="mb-8">
              <img
                class="object-center object-cover rounded-full h-36 w-36"
                src="https://upload.wikimedia.org/wikipedia/commons/1/10/Zayn_Wiki_%28cropped%29.jpg"
                alt="photo"
              />
            </div>
            <div class="text-center">
              <p class="text-xl text-white font-bold mb-2">Zayn Malik</p>
              <p class="text-base text-black font-normal">Lodi ko to</p>
            </div>
          </div>
          <div
            class="
              w-full
              bg-yellow-500
              rounded-lg
              sahdow-lg
              p-12
              flex flex-col
              justify-center
              items-center
            "
          >
            <div class="mb-8">
              <img
                class="object-center object-cover rounded-full h-36 w-36"
                src="https://pbs.twimg.com/profile_images/892691930529673216/4bxHd6NN_400x400.jpg"
                alt="photo"
              />
            </div>
            <div class="text-center">
              <p class="text-xl text-white font-bold mb-2">Bamboo Manalac</p>
              <p class="text-base text-black font-normal">Lodi ko to</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'ListOfAdministrators',

  components: {},

  data: () => ({
    //
  }),
};
</script>
