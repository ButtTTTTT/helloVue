<template>
    <label> <input type="checkbox" @change="togglePurple"   /> Purple </label>
</template>
<script>
export default{
    props:["togglePurple"],
}
</script>