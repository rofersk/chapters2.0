<template>
  <body class="bg-gray-900 font-family-karla h-screen">
    <div class="w-full flex flex-wrap bg-gray-900">
      <!-- Login Section -->
      <div class="w-full md:w-1/2 flex flex-col">
        <div
          class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24"
        >
          <a href="#" class="bg-black text-white font-bold text-xl p-4">Logo</a>
        </div>

        <div
          class="
            flex flex-col
            justify-center
            md:justify-start
            my-auto
            pt-8
            md:pt-0
            px-8
            md:px-24
            lg:px-32
          "
        >
          <p class="text-center text-3xl text-yellow-500">Student Login</p>
          <form
            class="flex flex-col pt-3 md:pt-8"
            onsubmit="event.preventDefault();"
          >
            <div class="flex flex-col pt-4">
              <label for="email" class="text-lg text-yellow-500"
                >Enter your email</label
              >
              <input
                type="email"
                id="email"
                placeholder="your@neu.edu.ph"
                class="
                  shadow
                  appearance-none
                  border
                  rounded
                  w-full
                  py-2
                  px-3
                  text-gray-100
                  mt-1
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
              />
            </div>

            <div class="flex flex-col pt-4">
              <label for="password" class="text-yellow-500"
                >Enter your password</label
              >
              <input
                type="password"
                id="password"
                placeholder="Password"
                class="
                  shadow
                  appearance-none
                  border
                  rounded
                  w-full
                  py-2
                  px-3
                  text-gray-100
                  mt-1
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
              />
            </div>

            <input
              type="submit"
              value="Log In"
              class="
                bg-yellow-500
                text-white
                font-bold
                text-lg
                hover:bg-yellow-600
                p-2
                mt-8
              "
            />
          </form>
          <div class="text-center text-white pt-12 pb-12">
            <p>
              Don't have an account yet?
              <a href="Register.vue" class="underline font-semibold"
                >Ask the administrator</a
              >
            </p>
          </div>
        </div>
      </div>

      <!-- Image Section -->
      <div class="w-1/2 shadow-2xl">
        <img
          class="object-cover w-full h-screen hidden md:block"
          src="https://images.unsplash.com/photo-1508107506371-193d6e71444c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
      </div>
    </div>
  </body>
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
