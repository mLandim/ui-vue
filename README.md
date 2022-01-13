![npm](https://img.shields.io/npm/v/@syara/ui-vue?style=flat-square)
![NPM](https://img.shields.io/npm/l/@syara/ui-vue?style=flat-square)
![npm](https://img.shields.io/npm/dt/@syara/ui-vue?style=flat-square)
# Syara UI Tools

User interface tools for web applications

## Requirements
* vue 3.x

## Installation

``` bash
npm install @syara/ui-vue
```

## Usage

Import and register components with `.use()`. And import css styles.
``` js
// main.js
import { createApp } from 'vue'

import SyaraUi from '@syara/ui-vue'
import '@syara/ui-vue/dist/syara-ui.css'

createApp(App).use(SyaraUi).mount('#app')

```



``` html
<!-- VuePage.vue -->

<!-- template  -->
<SyTable 
:header="tHeader" 
:body="tBody" 
:pageLimit="40" 
:bodyHeight="600" 
:selectionField="true" 
:bodyLoading="loading"
@selectedLines="selectedItens=$event" 
@callbackFunctions="manageCallbackFunctions($event)" />

```


``` js
// VuePage.vue
// script

// Using axios to fetch data from API
import axios from 'axios'

export default {
  name: 'App',
    data() {
        return {

        // Define table's structure
        tHeader: [
            {
                text: 'Id', // Text presented at header's column
                field: 'id', // Map to this specific key from every object at data list 
                filter: true, // define whether filter field is presented or not for this specific column
                asc: true // Define how to order lines based on this column data
            },
            {text: 'Album Id', field: 'albumId', filter: true },
            {text: 'Title', field: 'title', filter: true },
            {text: 'Url', field: 'url', filter: true},
            {text: 'Thumb', field: 'thumbnailUrl', filter: true},
            {
                text: 'Actions', // Text presented at header's column
                actions:[
                    {
                        callback:'testReturnFunction', // action called whenever the icon is clicked (must be mapped with method manageCallbackFunctions)
                        info: 'id', // value presented besides icon
                        mdIcon: 'attach_file' // it's possible to use a svg code as icon -> just replace the key materialIcon by icon and write/paste svg code as a string
                    },
                    {
                        callback:'testReturnFunction2', 
                        info: 'id', 
                        mdIcon: 'forum',
                        mdIconSize: 18 // optional, in value in pixels 
                    }
                ] 
            }

        ],

        // Actual table data
        tBody: [],
        // Receive list objects containing each line selected 
        selectedItens: [],
        // Control whether loading message is presented ro not
        loading: false,
        


        }
    },
    created(){

        this.getDataAxios()

    },
    methods: {

        async getDataAxios(){
            this.loading = true
            // Testing with API provide by JSONPlaceholder - awesome!
            let response = await axios.get('https://jsonplaceholder.typicode.com/photos')
            this.tBody = response.data
            this.loading = false
        },

        // Setup this function to deal with actions - i.e.: Click at table icon
        manageCallbackFunctions(event) {
            console.log('manageCallbackFunctions')
            console.log(event)
            this[event[0]](event[1])
        },

        testReturnFunction(e){
            console.log('testReturnFunction')
            console.log(e)

        },

        testReturnFunction2(e) {
            console.log('testReturnFunction2')
            console.log(e)
        }


    }
}

```

## Components 

Click on component's name to see the documentation (if available)

| Name | Type | Status |
| ------- | ----- | :-------: | 
| [SyTable](https://ui.syara.app/vue/components/table.html) | table | Ok |
| SyForm | form | X |
| SyButton | button | X |
| SyChart | charts | X |
| SyIcon | svg icons | X |





## More information

[SyaraUI Docs](https://ui.syara.app/)