<template>
  <header class="w-full text-sm">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="border-brand-gray-1 max-auto flex h-full flex-nowrap border-b border-solid px-8">
        <a
          :href="url"
          target="_blank"
          rel="noopener noreferrer"
          class="flex h-full items-center text-xl"
          >{{ company }}</a
        >
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li v-for="menuItem in menuItems" :key="menuItem" class="ml-9 h-full first:ml-0">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                class="flex h-full items-center py-2.5"
                >{{ menuItem }}</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainNav',
  data() {
    return {
      company: 'Jojo Careers',
      url: 'https://careers.google.com',
      menuItems: ['Teams', 'Locations', 'Life at Jojo Careers', 'How we hire', 'Students', 'Jobs']
    }
  }
}
</script>
