<template>
    <div id="app">
        <h1>Search Store Locations </h1>
        <form id="form2">
            <label> Outlet</label>
            <input type="text"/>
            
            <ul>
            <label for = "region"> Region </label>
            <li><label for="region">North </label>
            <input type="radio" id="region" name="region" value = "North"></li>
            <li><label for="region">South </label>
            <input type="radio" id="region" name="region" value = "South"></li>
            <li><label for="region">East </label>
            <input type="radio" id="region" name="region" value = "East"></li>
            <li><label for="region">West </label>
            <input type="radio" id="region" name="region" value = "West"></li>
            <li><label for="region">Central </label>
            <input type="radio" id="region" name="region" value = "Central"></li>
            </ul>
        </form>
            
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            msg: "Store Locations"
        }
    }
    
}
</script>

<style scoped>
#app *{
    box-sizing: border-box;
}
#app {
    margin: 20px auto;
    max-width: 500px;
}

ul{
    list-style-type: none;
    text-align: left;
}

ul,input[type="text"]{
    display: inline-block;
    padding: 10px;
    width: 50%;
}
label {
    display: inline-block;
    margin: 20px 0 10px;
    width: 50%;
    align-content: left;
}
</style>