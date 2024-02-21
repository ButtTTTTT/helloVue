<template>
    <select :value="textColor" @change="changeTextColor">
        <option value="">White</option>
        <option value="text-black">Black</option>
        <option value="text-orange">Orange</option>
      </select>
</template>
<script>
export default{
    props:["textColor","changeTextColor"]
}
</script>