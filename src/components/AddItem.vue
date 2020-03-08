<template>
    <div id="app">
        <h1>Add Item Page </h1>
        <form id="form1">
            <label> Item Name </label>
            <input type="text"/>
            <label for="categories"> Category</label>
                <select id="categories">
                    <option value="Fruits">Fruits</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Dairy Products">Dairy Products</option>
                    <option value="Canned Food">Canned Food</option>
                    <option value="Tidbits">Tidbits</option>
                    <option value="Poultry">Poultry</option>
                    <option value="Toiletries">Toiletries</option>
                </select>
        </form>
    </div>
    
</template>


<script>
export default {
    data() {
        return {
            msg: "Add Item"
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

label {
    display: inline-block;
    margin: 20px 0 10px;
    width: 50%;
    align-content: left;
}

input[type="text"],select {
    display: inline-block;
    padding: 8px;
    width: 50%;
}

</style>