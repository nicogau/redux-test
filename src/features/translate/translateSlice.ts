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

const fetchLang = createAsyncThunk<TranslateLang, Language>('lang/fetch',
    async (lang: Language)  => {
       try {
        const res = await fetch( `https://dev.merlo-ch.com/api/api.php?trad=1&langue=${lang}`)
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
      // Add user to the state array
      state.data = action.payload
    // })

   
})

export default translateSlice.