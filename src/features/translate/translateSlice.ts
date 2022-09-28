import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type Language = 'FR' | 'DE'
// json object of key:value pair  

type TranslateLang = {
    [key:string]: string
} 

// TranslateLang Object type with a status 
type Translate = {
    data: TranslateLang
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const fetchLang = createAsyncThunk<TranslateLang, Language>('translate/fetch',
    async (lang: Language, thunkApi)  => {
       try {
        const res = await fetch( `https://dev.merlo-ch.com/api/api.php?trad=1`)
        const resJson= await res.json() as TranslateLang
        return resJson
       }
       catch(err) {
            throw err
       }
    }
)


// need to type initialState of the Slice 
const initialState = {
    data: {},
    loading: 'idle'
} as Translate

const translateSlice = createSlice({
    name: 'translate',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchLang.fulfilled, (state, action) => {
      //  data are loaded 
      state.data = action.payload
      state.loading = 'succeeded'
     })
     // doesn t have the return value yet
     .addCase(fetchLang.pending, (state, action) => {
      state.loading = 'pending'
     })
     // request doesn't succeeded
     .addCase(fetchLang.rejected, (state, action) => {
      state.loading = 'failed'
     })
    }
})

   

export default  translateSlice.reducer
export {fetchLang}

