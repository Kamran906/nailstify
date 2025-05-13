const { configureStore } = require("@reduxjs/toolkit");
import UserReducer from './Slice'
const MyStore= configureStore({
    reducer:{
user:UserReducer
    }
})
export default MyStore;