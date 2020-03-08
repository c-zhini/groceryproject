import PageContent from './components/PageContent.vue'
import AddItem from './components/AddItem.vue'
import SearchStore from './components/SearchStore.vue'

export default[
    {path:"/", component: PageContent},
    {path:"/add", component: AddItem},
    {path:"/search", component: SearchStore}
]

