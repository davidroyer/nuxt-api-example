<template>

    <div :key="$route.params.slug">
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              {{$route.params.slug}}
            </h1>
            <h2 class="subtitle">
              A dynamic markdown file
            </h2>
          </div>
        </div>
      </section>
      <div class="container">
        <div v-html="content" class="contentWrapper content"></div>
      </div>
    </div>



</template>

<script>

export default {
  async asyncData ({params}) {
    const fileContent = await import(`~/static/markdownFiles/${params.slug}.md`)
    return {
      content: fileContent
    }
  }
}
</script>

<style>

</style>
