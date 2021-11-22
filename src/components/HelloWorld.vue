<template>
  <!-- This is an example component -->
  <div class="mx-10 pt-15">
    <div class="grid gap-6 mb-8 md:grid-cols-2">
      <div class="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <h4 class="mb-4 font-semibold text-gray-600 dark:text-gray-300">
          Student
        </h4>
        <p class="text-gray-600 dark:text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum
          commodi a omnis numquam quod? Totam exercitationem quos hic ipsam at
          qui cum numquam, sed amet ratione! Ratione, nihil dolorum.
        </p>
      </div>
      <div class="min-w-0 p-4 text-white bg-purple-600 rounded-lg shadow-xs">
        <h4 class="mb-4 font-semibold">Administrator</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum
          commodi a omnis numquam quod? Totam exercitationem quos hic ipsam at
          qui cum numquam, sed amet ratione! Ratione, nihil dolorum.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Karla:400,700&display=swap');

.font-family-karla {
  font-family: karla;
}
</style>
