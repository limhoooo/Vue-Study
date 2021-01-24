<template>
  <header>
      <h1>TODO it!</h1>
  </header>
</template>

<script>
export default {
}
</script>

// scoped 정의시 상의에 상속받던 
// css 를 무시하는 고유의 스코프영역을 갖게됨
<style scoped>
    h1 {
        color: #2F3B52;
        font-weight: 900;
        margin: 2.5rem 0 1.5rem;
    }
</style>