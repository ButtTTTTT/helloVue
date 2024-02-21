<template>
  
    <label>
        Circle Rotate
        <input type="number" :value="angle"
        @input="changeAngle"
         />
      </label>
</template>
<script>
export default{
    props:["angle","changeAngle"]
}
</script>